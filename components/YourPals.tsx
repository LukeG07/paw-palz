import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Colours from '../constants/Colours'
import SectionHeader from './SectionHeader'

const pets = [
  { name: 'Pet 1', image: require('../assets/images/pet1.png') },
  { name: 'Pet 2', image: require('../assets/images/pet2.png') },
  // Add more pets here
];

export default function YourPals() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionHeader> Your pals </SectionHeader>
        <View style={styles.options}>
          <MyButton title='See all pets'></MyButton>
          <MyButton title='+ Add pet'></MyButton>
        </View>
      </View>
      <PetCarousel />
    </View>
  );
}

function MyButton({ title }: { title: string }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function PetCarousel() {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
      {pets.map((pet, index) => (
        <PetAvatar pet={pet} key={index} />
      ))}
    </View>
  );
}

function PetAvatar({ pet }: { pet: { name: string, image: any } }) {
  return (
    <View style={styles.avatarCard}>
      <View style={styles.avatarImageContainer}>
        <Image source={pet.image} style={styles.avatarImage} />
      </View>
      <Text>{pet.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 35,
    width: '101%', // This is to extend the container so the left and right borders are hidden
    padding: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: Colours.light.primary,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  avatarImageContainer: {
    padding: 1,
    borderWidth: 2,
    borderRadius: 8,
  },
  avatarImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: `${Colours.light.secondary}40`,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 15,
    paddingRight: 15,
    height: 24,
    borderRadius: 27,
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4, // Required for Android to show shadow
  },
  buttonText: {
    fontFamily: 'Urbanist',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
  }
});


