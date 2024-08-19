import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { Home, PawPrint, CalendarDays } from 'lucide-react-native';

import Colours from '../../constants/Colours';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarBackground: TabBar,
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          borderTopColor: 'transparent',
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
          tabBarItemStyle: { elevation: 0 }
        }}
      />
      <Tabs.Screen
        name="pets"
        options={{
          title: 'Pets',
          tabBarIcon: ({ color }) => <PawPrint color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <CalendarDays color={color} />,
        }}
      />
    </Tabs>
  );
}

function TabBar() {
  return (
    <View style={styles.tabBarContainer}>

    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '101%',
    backgroundColor: Colours.light.primary,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    borderBottomWidth: 0,
    left: '-2%',
  },
});