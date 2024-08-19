import { View, StyleSheet } from "react-native";
import { CalendarProvider, WeekCalendar } from 'react-native-calendars';

import YourPals from "../../components/YourPals";
import UpcomingEvents from "@/components/UpcomingEvents";
import Colours from "@/constants/Colours";

export default function Home() {
  return (
    <View style={styles.container} >
      <YourPals />
      <UpcomingEvents />
      {/* <CalendarProvider
        date="2018-03-01"
      >
        <WeekCalendar firstDay={1} />
      </CalendarProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.light.background,
  },
});