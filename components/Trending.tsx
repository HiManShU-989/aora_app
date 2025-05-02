import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const Trending = ({ posts }: any) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text style={styles.text}>{item.id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;

const styles = StyleSheet.create({
  text: {
    fontSize: 30, // Tailwind 'text-3xl'
    color: '#FFFFFF',
  },
});
