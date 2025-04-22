import { Client,Account,ID } from 'react-native-appwrite';
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

export const createUser= () =>{
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}

