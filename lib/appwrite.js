import { Client,Account,ID, Avatars, Databases } from 'react-native-appwrite';
export const config = {
   endpoint: 'https://fra.cloud.appwrite.io/v1',
   platform: 'com.jsm.aora',
    projectId: '6805ed2f0035efa4af86',
    databaseId: '680658b6002b78657991',
    userCollectionId: '6806590d00177a8dbc8a',
    videoCollectionId: '6806594400261da8db9d',
    storageId: '68065b3900380d1dac75',
}

const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform)
;
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser= async(username,email,password) =>{
  try {
    const newAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        username,
    )
    if(!newAccount) throw Error;
    const avatarUrl = avatars.getInitials(username);
    await signIn(email,password);

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(), 
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl,
        }
    )
    return newUser
    
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const signIn = async (email, password) =>{
try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw new Error('Session not created');
    return session;
} catch (error) {
    throw new Error(error);
}
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw new Error('No current account found');
        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw new Error('No current user found');
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}