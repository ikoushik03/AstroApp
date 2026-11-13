import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
};

const PlaceholderScreen: React.FC<Props> = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Welcome to AstroGuide {title}</Text>
        <Text style={styles.description}>This section is coming soon.</Text>
      </View>
    </SafeAreaView>
  );
};

export default PlaceholderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100D25",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#F5C76B",
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 17,
    marginTop: 12,
  },
  description: {
    color: "#A59ABF",
    fontSize: 13,
    marginTop: 8,
  },
});
