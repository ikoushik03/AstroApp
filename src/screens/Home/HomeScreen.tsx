// // import React from "react";
// // import { View, Text, StyleSheet } from "react-native";

// // const HomeScreen = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome to AstroGuide</Text>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#FAF7F2",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     fontSize: 25,
// //     fontWeight: "bold",
// //     color: "#241431",
// //   },
// // });

// // export default HomeScreen;

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
// } from "react-native";

// import { SafeAreaView } from "react-native-safe-area-context";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// const HomeScreen = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <StatusBar
//         barStyle="light-content"
//         backgroundColor="#100D25"
//       /> */}

//       <StatusBar barStyle="light-content" />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header */}
//         <View style={styles.header}>
//           <View>
//             <Text style={styles.logo}>✦ AstroGuide</Text>
//             <Text style={styles.tagline}>Your Cosmic Journey Begins</Text>
//           </View>

//           <TouchableOpacity style={styles.profileButton}>
//             <Ionicons name="person-outline" size={23} color="#F5C76B" />
//           </TouchableOpacity>
//         </View>

//         {/* Welcome Section */}
//         <View style={styles.welcomeSection}>
//           <Text style={styles.welcomeText}>Welcome Back!</Text>

//           <Text style={styles.subtitle}>
//             Discover what the universe has planned for you.
//           </Text>
//         </View>

//         {/* Premium Banner */}
//         <LinearGradient
//           colors={["#392568", "#17112F", "#100D25"]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//           style={styles.heroCard}
//         >
//           <View style={styles.heroContent}>
//             <Text style={styles.heroSmall}>✨ YOUR DESTINY AWAITS</Text>

//             <Text style={styles.heroTitle}>
//               Unlock Your{"\n"}Cosmic Potential
//             </Text>

//             <Text style={styles.heroDescription}>
//               Explore your stars, understand your future and find your life's
//               direction.
//             </Text>

//             <TouchableOpacity style={styles.heroButton}>
//               <Text style={styles.heroButtonText}>Explore Now</Text>
//               <Ionicons name="arrow-forward" size={17} color="#211632" />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.heroIcon}>
//             <Ionicons name="moon" size={90} color="#F5C76B" />
//             <Text style={styles.stars}>✦ · ✧ · ✦</Text>
//           </View>
//         </LinearGradient>

//         {/* Quick Services */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Explore Astrology</Text>
//           <Text style={styles.viewAll}>View All</Text>
//         </View>

//         <View style={styles.serviceRow}>
//           <TouchableOpacity style={styles.serviceCard}>
//             <View style={styles.serviceIcon}>
//               <Ionicons name="planet-outline" size={30} color="#F5C76B" />
//             </View>
//             <Text style={styles.serviceTitle}>Free Kundali</Text>
//             <Text style={styles.serviceDescription}>Know your birth chart</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.serviceCard}>
//             <View style={styles.serviceIcon}>
//               <Ionicons name="sunny-outline" size={30} color="#F5C76B" />
//             </View>
//             <Text style={styles.serviceTitle}>Horoscope</Text>
//             <Text style={styles.serviceDescription}>Read your daily stars</Text>
//           </TouchableOpacity>
//         </View>

//         {/* More Services */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Our Services</Text>
//         </View>

//         <View style={styles.moreServices}>
//           {[
//             {
//               icon: "heart-outline",
//               title: "Love Compatibility",
//               description: "Discover your cosmic connection",
//             },
//             {
//               icon: "briefcase-outline",
//               title: "Career Astrology",
//               description: "Find your professional direction",
//             },
//             {
//               icon: "diamond-outline",
//               title: "Gemstone Consultation",
//               description: "Find your lucky gemstone",
//             },
//             {
//               icon: "flame-outline",
//               title: "Online Puja",
//               description: "Spiritual rituals and blessings",
//             },
//           ].map((item, index) => (
//             <TouchableOpacity key={index} style={styles.moreServiceCard}>
//               <View style={styles.smallIcon}>
//                 <Ionicons name={item.icon as any} size={25} color="#F5C76B" />
//               </View>

//               <View style={styles.serviceInfo}>
//                 <Text style={styles.serviceTitle}>{item.title}</Text>
//                 <Text style={styles.serviceDescription}>
//                   {item.description}
//                 </Text>
//               </View>

//               <Ionicons name="chevron-forward" size={20} color="#A59ABF" />
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={{ height: 30 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#100D25",
//   },

//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 12,
//     paddingBottom: 20,
//   },

//   logo: {
//     color: "#F5C76B",
//     fontSize: 25,
//     fontWeight: "bold",
//   },

//   tagline: {
//     color: "#A59ABF",
//     fontSize: 11,
//     marginTop: 4,
//     letterSpacing: 1,
//   },

//   profileButton: {
//     width: 45,
//     height: 45,
//     borderRadius: 25,
//     backgroundColor: "#28203F",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#5A477D",
//   },

//   welcomeSection: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },

//   welcomeText: {
//     color: "#FFFFFF",
//     fontSize: 24,
//     fontWeight: "bold",
//   },

//   subtitle: {
//     color: "#A59ABF",
//     fontSize: 13,
//     marginTop: 7,
//     lineHeight: 20,
//   },

//   heroCard: {
//     marginHorizontal: 20,
//     borderRadius: 22,
//     padding: 20,
//     minHeight: 220,
//     flexDirection: "row",
//     alignItems: "center",
//     overflow: "hidden",
//     borderWidth: 1,
//     borderColor: "#59417C",
//   },

//   heroContent: {
//     flex: 1.5,
//     zIndex: 1,
//   },

//   heroSmall: {
//     color: "#F5C76B",
//     fontSize: 10,
//     fontWeight: "bold",
//     letterSpacing: 1,
//   },

//   heroTitle: {
//     color: "#FFFFFF",
//     fontSize: 23,
//     fontWeight: "bold",
//     lineHeight: 31,
//     marginTop: 12,
//   },

//   heroDescription: {
//     color: "#C8BEDB",
//     fontSize: 11,
//     lineHeight: 18,
//     marginTop: 9,
//   },

//   heroButton: {
//     backgroundColor: "#F5C76B",
//     paddingHorizontal: 15,
//     paddingVertical: 11,
//     borderRadius: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     alignSelf: "flex-start",
//     marginTop: 15,
//     gap: 8,
//   },

//   heroButtonText: {
//     color: "#211632",
//     fontWeight: "bold",
//     fontSize: 12,
//   },

//   heroIcon: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: -5,
//   },

//   stars: {
//     color: "#F5C76B",
//     fontSize: 14,
//     marginTop: 12,
//   },

//   sectionHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginHorizontal: 20,
//     marginTop: 28,
//     marginBottom: 15,
//   },

//   sectionTitle: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "bold",
//   },

//   viewAll: {
//     color: "#F5C76B",
//     fontSize: 12,
//     fontWeight: "600",
//   },

//   serviceRow: {
//     flexDirection: "row",
//     marginHorizontal: 20,
//     gap: 13,
//   },

//   serviceCard: {
//     flex: 1,
//     backgroundColor: "#211A38",
//     borderRadius: 17,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: "#392B54",
//   },

//   serviceIcon: {
//     width: 53,
//     height: 53,
//     backgroundColor: "#35264D",
//     borderRadius: 15,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 13,
//   },

//   serviceTitle: {
//     color: "#FFFFFF",
//     fontSize: 13,
//     fontWeight: "bold",
//   },

//   serviceDescription: {
//     color: "#A59ABF",
//     fontSize: 10,
//     marginTop: 6,
//     lineHeight: 16,
//   },

//   moreServices: {
//     marginHorizontal: 20,
//     gap: 12,
//   },

//   moreServiceCard: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#211A38",
//     borderRadius: 15,
//     padding: 14,
//     borderWidth: 1,
//     borderColor: "#392B54",
//   },

//   smallIcon: {
//     width: 48,
//     height: 48,
//     borderRadius: 14,
//     backgroundColor: "#35264D",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   serviceInfo: {
//     flex: 1,
//     marginLeft: 13,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthPlace, setBirthPlace] = useState("");

  const handleFreeAstrology = () => {
    if (
      !name.trim() ||
      !dob.trim() ||
      !birthTime.trim() ||
      !birthPlace.trim()
    ) {
      Alert.alert("Missing Details", "Please fill in all your birth details.");
      return;
    }

    Alert.alert(
      "Details Submitted",
      "Your birth details have been entered. Kundali generation will be connected in a future step.",
    );
  };

  // const handleServicePress = (service: string) => {
  //   Alert.alert(
  //     service,
  //     "We will connect this service in the next development step.",
  //   );
  // };

  const handleServicePress = (service: string) => {
    switch (service) {
      case "Gemstone Advice":
        navigation.navigate("AdditionalServices", {
          initialTab: "Gemstones",
        });
        break;

      case "Online Puja":
        navigation.navigate("AdditionalServices", {
          initialTab: "Puja",
        });
        break;

      case "Panchang":
        navigation.navigate("AdditionalServices", {
          initialTab: "Panchang",
        });
        break;

      case "All Services":
        navigation.navigate("AdditionalServices");
        break;

      default:
        Alert.alert(
          service,
          "We will connect this service in the next development step.",
        );
    }
  };

  const astrologers = [
    {
      name: "Astrologer Profile 1",
      expertise: "Vedic Astrology",
      experience: "Profile details coming soon",
      icon: "person-circle-outline",
    },
    {
      name: "Astrologer Profile 2",
      expertise: "Kundali & Horoscope",
      experience: "Profile details coming soon",
      icon: "person-circle-outline",
    },
  ];

  const popularServices = [
    {
      icon: "heart-outline",
      title: "Kundali Matching",
      description: "Check relationship compatibility",
    },
    {
      icon: "sunny-outline",
      title: "Daily Horoscope",
      description: "Discover your daily predictions",
    },
    {
      icon: "diamond-outline",
      title: "Gemstone Advice",
      description: "Explore gemstones for you",
    },
    {
      icon: "flame-outline",
      title: "Online Puja",
      description: "Explore spiritual rituals",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.logo}>✦ AstroGuide</Text>
              <Text style={styles.tagline}>Your Cosmic Journey Begins</Text>
            </View>

            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => handleServicePress("My Profile")}
            >
              <Ionicons name="person-outline" size={23} color="#F5C76B" />
            </TouchableOpacity>
          </View>

          {/* Welcome */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Welcome Back! ✨</Text>
            <Text style={styles.subtitle}>
              Discover what the universe has planned for you.
            </Text>
          </View>

          {/* Promotional Banner */}
          <LinearGradient
            colors={["#563783", "#291B4C", "#100D25"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroCard}
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroSmall}>✦ SPECIAL COSMIC INSIGHTS</Text>

              <Text style={styles.heroTitle}>
                Unlock Your{"\n"}Cosmic Potential
              </Text>

              <Text style={styles.heroDescription}>
                Explore your stars, understand your future and find your life's
                direction.
              </Text>

              <TouchableOpacity
                style={styles.heroButton}
                onPress={() => handleServicePress("Explore Astrology")}
              >
                <Text style={styles.heroButtonText}>Explore Now</Text>
                <Ionicons name="arrow-forward" size={17} color="#211632" />
              </TouchableOpacity>
            </View>

            <View style={styles.heroIcon}>
              <Ionicons name="moon" size={85} color="#F5C76B" />
              <Text style={styles.stars}>✦ · ✧ · ✦</Text>
            </View>
          </LinearGradient>

          {/* Free Astrology Form */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Free Astrology</Text>
            <Text style={styles.freeBadge}>FREE</Text>
          </View>

          <View style={styles.formCard}>
            <Text style={styles.formHeading}>Discover Your Birth Chart</Text>
            <Text style={styles.formDescription}>
              Enter your birth details to begin your astrology journey.
            </Text>

            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={19} color="#A59ABF" />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#827795"
                value={name}
                onChangeText={setName}
              />
            </View>

            <Text style={styles.inputLabel}>Date of Birth</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="calendar-outline" size={19} color="#A59ABF" />
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#827795"
                value={dob}
                onChangeText={setDob}
              />
            </View>

            <Text style={styles.inputLabel}>Birth Time</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="time-outline" size={19} color="#A59ABF" />
              <TextInput
                style={styles.input}
                placeholder="HH:MM AM/PM"
                placeholderTextColor="#827795"
                value={birthTime}
                onChangeText={setBirthTime}
              />
            </View>

            <Text style={styles.inputLabel}>Birth Place</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="location-outline" size={19} color="#A59ABF" />
              <TextInput
                style={styles.input}
                placeholder="Enter your birth city"
                placeholderTextColor="#827795"
                value={birthPlace}
                onChangeText={setBirthPlace}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleFreeAstrology}
            >
              <LinearGradient
                colors={["#F5D58B", "#E7AD45"]}
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>
                  Generate Free Kundali
                </Text>
                <Ionicons name="arrow-forward" size={19} color="#211632" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* Daily Panchang */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Daily Panchang</Text>
              <Text style={styles.sectionSubtitle}>
                Your daily cosmic calendar
              </Text>
            </View>

            <TouchableOpacity onPress={() => handleServicePress("Panchang")}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <LinearGradient
            colors={["#352452", "#211832"]}
            style={styles.panchangCard}
          >
            <View style={styles.panchangTop}>
              <View>
                <Text style={styles.panchangDate}>TODAY'S PANCHANG</Text>
                <Text style={styles.panchangHeading}>Cosmic Overview</Text>
              </View>
              <Ionicons name="calendar" size={29} color="#F5C76B" />
            </View>

            <View style={styles.panchangGrid}>
              {[
                { icon: "moon-outline", title: "Tithi", value: "Sample Tithi" },
                {
                  icon: "star-outline",
                  title: "Nakshatra",
                  value: "Sample Nakshatra",
                },
                { icon: "planet-outline", title: "Yoga", value: "Sample Yoga" },
                {
                  icon: "sunny-outline",
                  title: "Sunrise",
                  value: "Sample Time",
                },
              ].map((item, index) => (
                <View key={index} style={styles.panchangItem}>
                  <Ionicons name={item.icon as any} size={23} color="#F5C76B" />
                  <Text style={styles.panchangLabel}>{item.title}</Text>
                  <Text style={styles.panchangValue}>{item.value}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.demoNote}>
              Sample display data – live Panchang will be connected later.
            </Text>
          </LinearGradient>

          {/* Popular Services */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Popular Services</Text>
              <Text style={styles.sectionSubtitle}>
                Explore our astrology services
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => handleServicePress("All Services")}
            >
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.popularGrid}>
            {popularServices.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.popularCard}
                activeOpacity={0.8}
                onPress={() => handleServicePress(item.title)}
              >
                <View style={styles.popularIcon}>
                  <Ionicons name={item.icon as any} size={28} color="#F5C76B" />
                </View>

                <Text style={styles.serviceTitle}>{item.title}</Text>
                <Text style={styles.serviceDescription}>
                  {item.description}
                </Text>

                <View style={styles.exploreRow}>
                  <Text style={styles.exploreText}>Explore</Text>
                  <Ionicons name="arrow-forward" size={14} color="#F5C76B" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Featured Astrologers */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Featured Astrologers</Text>
              <Text style={styles.sectionSubtitle}>
                Connect with astrology experts
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => handleServicePress("All Astrologers")}
            >
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {astrologers.map((item, index) => (
            <View key={index} style={styles.astrologerCard}>
              <View style={styles.astrologerAvatar}>
                <Ionicons name={item.icon as any} size={43} color="#F5C76B" />
              </View>

              <View style={styles.astrologerInfo}>
                <Text style={styles.astrologerName}>{item.name}</Text>
                <Text style={styles.astrologerExpertise}>{item.expertise}</Text>
                <Text style={styles.astrologerExperience}>
                  {item.experience}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.consultButton}
                onPress={() => handleServicePress(item.name)}
              >
                <Text style={styles.consultButtonText}>View</Text>
              </TouchableOpacity>
            </View>
          ))}

          {/* Bottom Space */}
          <View style={{ height: 30 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100D25",
  },

  scrollContent: {
    paddingBottom: 15,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },

  logo: {
    color: "#F5C76B",
    fontSize: 25,
    fontWeight: "bold",
  },

  tagline: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 4,
    letterSpacing: 1,
  },

  profileButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#28203F",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#5A477D",
  },

  welcomeSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  welcomeText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#A59ABF",
    fontSize: 13,
    marginTop: 7,
    lineHeight: 20,
  },

  heroCard: {
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 20,
    minHeight: 220,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#59417C",
  },

  heroContent: {
    flex: 1.5,
    zIndex: 1,
  },

  heroSmall: {
    color: "#F5C76B",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    lineHeight: 31,
    marginTop: 12,
  },

  heroDescription: {
    color: "#C8BEDB",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 9,
  },

  heroButton: {
    backgroundColor: "#F5C76B",
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginTop: 15,
    gap: 8,
  },

  heroButtonText: {
    color: "#211632",
    fontWeight: "bold",
    fontSize: 12,
  },

  heroIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -5,
  },

  stars: {
    color: "#F5C76B",
    fontSize: 14,
    marginTop: 12,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 15,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  sectionSubtitle: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 5,
  },

  viewAll: {
    color: "#F5C76B",
    fontSize: 12,
    fontWeight: "600",
  },

  freeBadge: {
    color: "#17122D",
    backgroundColor: "#F5C76B",
    fontSize: 10,
    fontWeight: "bold",
    overflow: "hidden",
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 7,
  },

  formCard: {
    marginHorizontal: 20,
    padding: 17,
    backgroundColor: "#211A38",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#392B54",
  },

  formHeading: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  formDescription: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 6,
    marginBottom: 16,
  },

  inputLabel: {
    color: "#E6DDF4",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 7,
    marginTop: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#302747",
    borderRadius: 11,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "#493A63",
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 13,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },

  submitButton: {
    marginTop: 20,
    borderRadius: 11,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  submitButtonText: {
    color: "#211632",
    fontSize: 13,
    fontWeight: "bold",
  },

  panchangCard: {
    marginHorizontal: 20,
    borderRadius: 18,
    padding: 17,
    borderWidth: 1,
    borderColor: "#59417C",
  },

  panchangTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  panchangDate: {
    color: "#F5C76B",
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  panchangHeading: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
  },

  panchangGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  panchangItem: {
    width: "48%",
    backgroundColor: "#49365F",
    borderRadius: 12,
    padding: 13,
  },

  panchangLabel: {
    color: "#C8BEDB",
    fontSize: 11,
    marginTop: 9,
  },

  panchangValue: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },

  demoNote: {
    color: "#A59ABF",
    fontSize: 9,
    marginTop: 13,
  },

  popularGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
    rowGap: 12,
  },

  popularCard: {
    width: "48%",
    backgroundColor: "#211A38",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#392B54",
  },

  popularIcon: {
    width: 49,
    height: 49,
    backgroundColor: "#35264D",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },

  serviceTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  serviceDescription: {
    color: "#A59ABF",
    fontSize: 10,
    marginTop: 6,
    lineHeight: 16,
  },

  exploreRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 13,
    gap: 6,
  },

  exploreText: {
    color: "#F5C76B",
    fontSize: 11,
    fontWeight: "600",
  },

  astrologerCard: {
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 14,
    backgroundColor: "#211A38",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#392B54",
    flexDirection: "row",
    alignItems: "center",
  },

  astrologerAvatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#35264D",
    alignItems: "center",
    justifyContent: "center",
  },

  astrologerInfo: {
    flex: 1,
    marginLeft: 12,
  },

  astrologerName: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  astrologerExpertise: {
    color: "#F5C76B",
    fontSize: 11,
    marginTop: 5,
  },

  astrologerExperience: {
    color: "#A59ABF",
    fontSize: 10,
    marginTop: 4,
  },

  consultButton: {
    backgroundColor: "#F5C76B",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 9,
  },

  consultButtonText: {
    color: "#211632",
    fontSize: 11,
    fontWeight: "bold",
  },
});
