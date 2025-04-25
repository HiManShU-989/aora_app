import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { images } from '../constants';
import CustomButton from '@/components/CustomButton';
import { useGlobalContext } from '@/context/GlobalProvider';

const { height } = Dimensions.get('window');

export default function App() {
  const {isLoading,isLoggedIn} = useGlobalContext();
  if(!isLoading && isLoggedIn) <Redirect href="/home" />
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Image source={images.logo} style={styles.logo} resizeMode="contain" />
          <Image source={images.cards} style={styles.cards} resizeMode="contain" />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>
              Discover endless possibilities with{' '}
              <Text style={styles.titleHighlight}>Aora</Text>
            </Text>
            <Image source={images.path} style={styles.path} resizeMode="contain" />
          </View>
          <Text style={styles.subtitle}>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora.
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles={{ width: '100%', marginTop: 28 }}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#161622',
    flex: 1,
  },
  scrollContent: {
    height,
  },
  container: {
    width: '100%',
    minHeight: height * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 130,
    height: 84,
  },
  cards: {
    width: '100%',
    maxWidth: 380,
    height: 300,
  },
  titleWrapper: {
    marginTop: 20,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleHighlight: {
    color: '#FF8E01',
  },
  path: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -8,
    right: -32,
  },
  subtitle: {
    fontSize: 14,
    color: '#CDCDE0',
    textAlign: 'center',
    marginTop: 28,
    fontFamily: 'Poppins-Regular',
  },
});
