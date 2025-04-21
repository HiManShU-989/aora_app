import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';


const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
      email: '',
      password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit =() => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Image 
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />

          <Text style={styles.title}>Sign Up to Aora</Text>
          <FormField
          title="Username"
          value= {form.username}
          handleChangeText={(e: any)=> setForm({...form, username: e})}
          otherStyles="mt-10"
          />
          <FormField
          title="Email"
          value= {form.email}
          handleChangeText={(e: any)=> setForm({...form, email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"
          />
          <FormField
          title="Password"
          value= {form.password}
          handleChangeText={(e: any)=> setForm({...form, password: e})}
          otherStyles="mt-7"
          />
          <CustomButton
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          />
          <View style={styles.bottomContainer}>
  <Text style={styles.promptText}>
    Have an account already?
  </Text>
  <Link href="/sign-in">
    <Text style={styles.linkText}>Sign In</Text>
  </Link>
</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161622',
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'center',
    minHeight: '83%',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  logo: {
    width: 115,
    height: 35,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 40,
  },
  bottomContainer: {
    justifyContent: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    gap: 8,
  },
  promptText: {
    fontSize: 16,
    color: '#D1D1D1', // equivalent to text-gray-100
    fontFamily: 'Poppins-Regular',
  },
  linkText: {
    fontSize: 16,
    color: '#FFA500', // replace with your actual secondary color
    fontFamily: 'Poppins-SemiBold',
  },
});

export default SignUp;
