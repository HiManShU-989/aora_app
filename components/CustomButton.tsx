import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  handlePress,
  isLoading,
  containerStyles,
  textStyles,
}: any) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        isLoading && styles.disabled,
        containerStyles,
      ]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#161622" />
      ) : (
        <Text style={[styles.text, textStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9C01',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 62,
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: '#161622',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default CustomButton;
