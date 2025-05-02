import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';

const SearchInput = ({ title, value, placeholder, handleChangeText, ...props }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
      <View style={[
        styles.inputContainer,
        isFocused && { borderColor: '#FFA500' } // Replace with your actual secondary color
      ]}>
        <TextInput
          value={value}
          placeholder="Search for a video topic"
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={title === "Password" && !showPassword}
          style={styles.textInput}
          {...props}
        />
       <TouchableOpacity>
        <Image
          source={icons.search}
          style={styles.icon}
          resizeMode="contain"
          />
       </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: '#262630',
    backgroundColor: '#1A1A1C',
    borderRadius: 16,
    height: 64,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  textInput: {
    fontSize: 16,
    marginTop: 2,
    color: '#FFFFFF',
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default SearchInput;
