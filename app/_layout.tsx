import { Stack } from 'expo-router/stack';
import { Text, View, StyleSheet } from 'react-native';
import { Bell } from 'lucide-react-native';

import Colours from '../constants/Colours';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colours.light.primary,
        },
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: Colours.light.background,
          elevation: 0,
          display: 'flex',
          justifyContent: 'center',
        },
        headerLeft: () => false,
        headerRight: () => <HeaderRight />,
        headerTitle: () => <HeaderTitle />
      }}>
    </Stack>
  );
}

function HeaderRight() {
  return (
    <View style={styles.headerRight}>
      <Bell size={20} color={Colours.light.accent} />
      {/* <DrawerToggleButton tintColor={Colours.light.accent} /> */}
    </View>
  );
}

function HeaderTitle() {
  return (
    <Text style={styles.headerTitle}> PawPalz </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  headerTitle: {
    fontFamily: 'Urbanist',
    fontSize: 24,
    fontWeight: '900',
    color: '#D8A33F',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
});