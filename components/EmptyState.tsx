import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { images } from '@/constants';
import CustomButton from './CustomButton';
import { router } from 'expo-router';

const EmptyState = ({ title, subtitle }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.empty}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>{title}</Text>
      <Text style={styles.title}>{subtitle}</Text>
      <CustomButton 
      title="Create a video"
      handlePress={() => router.push('/create')}
      containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 270,
    height: 215,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#D1D5DB',
  },
  subtitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 8,
    textAlign: 'center',
  },
});
