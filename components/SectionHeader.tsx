import { Text, StyleSheet } from "react-native";


export default function SectionHeader({ children }: { children: String }) {
  return <Text style={styles.headerText}>{children}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Urbanist',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 22,
  },
});