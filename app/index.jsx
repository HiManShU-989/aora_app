import { Link } from 'expo-router';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Image, Text } from 'react-native';
import { images } from '../constants';


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{
        height: '100%',
      }}>
        <View className="w-full h-full items-center justify-center px-4">
          <Image 
          source={images.logo}
          className='w-[130px] h-[84px]'
          resizeMode='contain'
          />
          <Image 
          source={images.cards}
          className='max-w-[380px] w-full h-[300px]'
          resizeMode='contain'
          />
          <View className="relative mt-5">
          <Text className="text-3xl text-white font-bold text-center">
            Discover endless possibilities with {' '}
            <Text className="text-secondary-200">
              Aora
            </Text>
          </Text>
          <Image 
          source={images.path}
          className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
          resizeMode='contain'
          />
          </View>
          <Text className='text-sm font-pregular text-center text-gray-100 mt-7'>
            Where creativity meets innovation:
            embark on a journey of limitless exploration with Aora.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
