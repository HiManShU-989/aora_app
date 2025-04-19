import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 70 }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{
          width: 20,
          height: 20,
          tintColor: color,
        }}
      />
      <Text
       className={`${focused ? 'font-psemibold' : 'font-pregular'}text-xs `}
       style={{color:color}
        }
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          height: 50,
          backgroundColor:'#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              name="Home"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              name="Bookmark"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              name="Create"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              name="Profile"
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
