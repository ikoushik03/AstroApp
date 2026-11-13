// import React, { useEffect } from "react";
// import { View, Text, StyleSheet, StatusBar } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { Ionicons } from "@expo/vector-icons";

// type SplashScreenProps = {
//   onFinish: () => void;
// };

// export default function SplashScreen({ onFinish }: SplashScreenProps) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFinish();
//     }, 5000); // 5 seconds delay

//     return () => clearTimeout(timer);
//   }, [onFinish]);

//   return (
//     <LinearGradient
//       colors={["#100D25", "#21143D", "#100D25"]}
//       style={styles.container}
//     >
//       <StatusBar barStyle="light-content" />

//       <View style={styles.content}>
//         <View style={styles.logoCircle}>
//           <Ionicons name="planet-outline" size={75} color="#F5C76B" />
//         </View>

//         <Text style={styles.appName}>AstroGuide</Text>

//         <Text style={styles.tagline}>Discover Your Cosmic Path</Text>

//         <View style={styles.divider} />

//         <Text style={styles.bottomText}>ALIGN WITH THE UNIVERSE</Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 25,
//   },
//   logoCircle: {
//     width: 145,
//     height: 145,
//     borderRadius: 73,
//     borderWidth: 1.5,
//     borderColor: "#F5C76B",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(245, 199, 107, 0.08)",
//     marginBottom: 30,
//   },
//   appName: {
//     fontSize: 38,
//     fontWeight: "bold",
//     color: "#F5C76B",
//     letterSpacing: 2,
//   },
//   tagline: {
//     fontSize: 15,
//     color: "#D0C5E5",
//     marginTop: 12,
//     letterSpacing: 1,
//   },
//   divider: {
//     width: 55,
//     height: 2,
//     backgroundColor: "#F5C76B",
//     marginTop: 28,
//     marginBottom: 20,
//   },
//   bottomText: {
//     color: "#A59ABF",
//     fontSize: 10,
//     letterSpacing: 3,
//   },
// });

import React, { useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

type SplashScreenProps = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.92)).current;

  useEffect(() => {
    // Start artwork animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1800,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate to Login after 3 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, onFinish]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require("../../assets/splash-cosmic.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100D25",
  },

  imageContainer: {
    width: width,
    height: height,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
