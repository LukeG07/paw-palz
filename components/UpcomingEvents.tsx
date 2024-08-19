import { View, Text, StyleSheet } from "react-native";

import { formatDateToDayMonth } from "../utils/dates";
import Colours from '../constants/Colours';
import SectionHeader from "./SectionHeader";

interface Event {
  name: string;
  dateTime: string;
  pet: string;
}

const events: Event[] = [
  { name: 'Event 1', dateTime: '2021-10-01T12:00:00Z', pet: 'Pet 1' },
  { name: 'Event 2', dateTime: '2021-10-01T12:00:00Z', pet: 'Pet 1' },
  { name: 'Event 3', dateTime: '2021-10-01T12:00:00Z', pet: 'Pet 2' },
];

export default function UpcomingEvents() {
  return (
    <View style={styles.container}>
      <SectionHeader>Upcoming events</SectionHeader>
      <View style={styles.eventList}>
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </View>
    </View>
  );
}

function EventCard({ name, dateTime, pet }: Event) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{pet}</Text>
        <Text style={styles.cardDate}>{formatDateToDayMonth(dateTime)}</Text>
      </View>
      <Text style={styles.cardDescription}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 30,
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    height: 80,
    backgroundColor: Colours.light.secondary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Urbanist',
    fontSize: 16,
    fontWeight: '500',
    color: '#D8A33F'
  },
  cardDate: {
    fontFamily: 'Urbanist',
    fontSize: 16,
    fontWeight: '500',
  },
  cardDescription: {
    fontFamily: 'Urbanist',
    fontSize: 14,
    fontWeight: '500',
  },
  eventList: {
    marginTop: 28,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  }
});