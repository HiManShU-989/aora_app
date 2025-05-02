import { View, Text, FlatList, Image, StyleSheet, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import { useState } from 'react';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // Recall videos -> if any new video appears 
    setRefreshing(false);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View style={styles.headerWrapper}>
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.welcomeText}>
                  Welcome back,
                </Text>
                <Text style={styles.usernameText}>
                  Jsmastery
                </Text>
              </View>
              <View style={styles.logoWrapper}>
                <Image
                  source={images.logoSmall}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View style={styles.trendingWrapper}>
              <Text style={styles.latestText}>
                Latest Videos
              </Text>
              <Trending
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }]}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#161622',
    height: '100%',
  },
  itemText: {
    fontSize: 30,
    color: '#D1D5DB',
  },
  headerWrapper: {
    marginVertical: 24,
    paddingHorizontal: 16,
    gap: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  welcomeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#D1D5DB',
  },
  usernameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  logoWrapper: {
    marginTop: 6,
  },
  logo: {
    width: 36,
    height: 40,
  },
  trendingWrapper: {
    width: '100%',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 32,
  },
  latestText: {
    color: '#D1D5DB',
    fontFamily: 'Poppins-Regular',
    marginBottom: 12,
    fontSize: 18,
  },
});
