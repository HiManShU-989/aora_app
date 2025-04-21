import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FormField = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>FormField</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#CDCDE0', // equivalent to text-gray-100
    fontFamily: 'Poppins-Medium',
  },
});

export default FormField;
