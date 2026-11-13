import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const zodiacSigns = [
  { name: "Aries", date: "Mar 21 - Apr 19", icon: "♈" },
  { name: "Taurus", date: "Apr 20 - May 20", icon: "♉" },
  { name: "Gemini", date: "May 21 - Jun 20", icon: "♊" },
  { name: "Cancer", date: "Jun 21 - Jul 22", icon: "♋" },
  { name: "Leo", date: "Jul 23 - Aug 22", icon: "♌" },
  { name: "Virgo", date: "Aug 23 - Sep 22", icon: "♍" },
  { name: "Libra", date: "Sep 23 - Oct 22", icon: "♎" },
  { name: "Scorpio", date: "Oct 23 - Nov 21", icon: "♏" },
  { name: "Sagittarius", date: "Nov 22 - Dec 21", icon: "♐" },
  { name: "Capricorn", date: "Dec 22 - Jan 19", icon: "♑" },
  { name: "Aquarius", date: "Jan 20 - Feb 18", icon: "♒" },
  { name: "Pisces", date: "Feb 19 - Mar 20", icon: "♓" },
];

const periods = ["Daily", "Weekly", "Monthly"] as const;
type Period = (typeof periods)[number];

const categories = [
  { name: "Overview", icon: "sparkles-outline" },
  { name: "Love", icon: "heart-outline" },
  { name: "Career", icon: "briefcase-outline" },
  { name: "Health", icon: "fitness-outline" },
  { name: "Finance", icon: "wallet-outline" },
] as const;

type Category = (typeof categories)[number]["name"];

const predictions: Record<Period, Record<Category, string[]>> = {
  Daily: {
    Overview: [
      "Today brings an opportunity to focus on your personal goals. Stay open to positive changes and trust your ability to make thoughtful decisions.",
      "A fresh perspective can help you approach today's challenges. Take your time, stay balanced and make space for meaningful conversations.",
      "The day encourages patience and self-reflection. Small steps taken with confidence may lead to encouraging progress.",
    ],
    Love: [
      "Make time for the people who matter. Honest conversations and thoughtful gestures can strengthen your relationships.",
      "A little understanding can make a big difference in your personal life. Listen carefully and express your feelings openly.",
      "Focus on emotional balance and meaningful connections. A warm conversation may bring you closer to someone special.",
    ],
    Career: [
      "Stay organized and focus on your priorities. A practical approach can help you move forward with confidence.",
      "Your dedication deserves attention. Use your ideas constructively and remain open to learning something new.",
      "Take initiative where appropriate, but avoid rushing important decisions. Consistency is your strongest asset.",
    ],
    Health: [
      "Give yourself enough rest and maintain a balanced routine. Remember to make time for activities that help you relax.",
      "Pay attention to your daily habits. Hydration, movement and a little quiet time can support your general well-being.",
      "Try to maintain a healthy balance between responsibilities and personal time. Avoid unnecessary stress.",
    ],
    Finance: [
      "Review your spending before making new commitments. A thoughtful approach can help you maintain financial balance.",
      "Focus on practical budgeting and avoid impulsive purchases. Small, consistent decisions matter.",
      "Consider your priorities carefully before making financial decisions. Planning ahead can be helpful.",
    ],
  },

  Weekly: {
    Overview: [
      "This week is a good time to review your priorities and make steady progress. Stay flexible when plans change.",
      "The coming days encourage patience, personal growth and better communication. Give important decisions the attention they deserve.",
      "A productive week can begin with clear intentions. Focus on what matters and avoid spreading your energy too thin.",
    ],
    Love: [
      "Relationships benefit from patience and understanding this week. Make time for meaningful conversations.",
      "This week encourages emotional openness. Appreciate the people who support you and communicate honestly.",
      "Shared experiences can bring people closer. Focus on trust, kindness and mutual respect.",
    ],
    Career: [
      "Set realistic work goals and follow through consistently. Collaboration may help you find useful solutions.",
      "A good week to organize unfinished tasks and develop your professional skills. Keep your long-term goals in view.",
      "Stay focused on progress rather than perfection. Thoughtful planning can make your workload easier to manage.",
    ],
    Health: [
      "Build a routine that gives equal importance to work and rest. Consistency is more useful than sudden changes.",
      "Make room for movement, nutritious meals and proper sleep throughout the week.",
      "Avoid overloading your schedule. Give yourself time to recharge and maintain your usual healthy habits.",
    ],
    Finance: [
      "Review your weekly expenses and identify areas where you can save. Avoid unnecessary financial risks.",
      "A practical budget can help you stay on track. Think carefully before committing to major purchases.",
      "Focus on financial discipline this week. Planning and patience can support your longer-term goals.",
    ],
  },

  Monthly: {
    Overview: [
      "This month offers an opportunity to reflect on your ambitions and create a clearer path forward. Consistent effort will be important.",
      "Use this month to strengthen your routines and explore meaningful opportunities. Stay patient with your progress.",
      "A month of reflection and planning can help you identify what deserves more of your attention.",
    ],
    Love: [
      "Give your relationships the time and care they deserve this month. Respect, trust and communication remain important.",
      "Focus on building stronger emotional connections. Small acts of appreciation can make relationships more meaningful.",
      "This month is a useful opportunity to understand your needs and communicate them with kindness.",
    ],
    Career: [
      "Think about your professional direction and identify skills you want to develop. A structured plan can support your ambitions.",
      "Consistent work and constructive feedback can help you grow. Keep track of your progress throughout the month.",
      "Set clear professional goals and break them into manageable steps. Avoid comparing your journey with others.",
    ],
    Health: [
      "Make your well-being a regular priority this month. Create a routine that you can maintain comfortably.",
      "Balance your responsibilities with adequate rest. Small improvements to daily habits can be worthwhile.",
      "Pay attention to your energy and stress levels. Make time for rest and activities you enjoy.",
    ],
    Finance: [
      "Review your monthly budget and plan for upcoming expenses. Prioritize saving where possible.",
      "This is a good time to assess your financial goals and spending habits. Make decisions based on careful planning.",
      "Focus on long-term financial discipline instead of short-term impulses. Keep your budget realistic.",
    ],
  },
};

const HoroscopeScreen = () => {
  const [selectedSign, setSelectedSign] = useState("Aries");
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("Daily");
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Overview");

  const selectedZodiac = zodiacSigns.find((sign) => sign.name === selectedSign);

  const signIndex = zodiacSigns.findIndex((sign) => sign.name === selectedSign);

  const prediction =
    predictions[selectedPeriod][selectedCategory][
      signIndex % predictions[selectedPeriod][selectedCategory].length
    ];

  const luckyColours = [
    "Golden",
    "Green",
    "Yellow",
    "Silver",
    "Orange",
    "Blue",
    "Pink",
    "Maroon",
    "Purple",
    "Brown",
    "Sky Blue",
    "Sea Green",
  ];

  const luckyNumbers = [7, 5, 3, 2, 9, 6, 8, 4, 1, 10, 11, 12];

  const luckyDays = [
    "Tuesday",
    "Friday",
    "Wednesday",
    "Monday",
    "Sunday",
    "Wednesday",
    "Friday",
    "Tuesday",
    "Thursday",
    "Saturday",
    "Saturday",
    "Thursday",
  ];

  const handleSignChange = (sign: string) => {
    setSelectedSign(sign);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Horoscope</Text>
            <Text style={styles.headerSubtitle}>
              Discover what the stars say about you
            </Text>
          </View>

          <TouchableOpacity style={styles.calendarButton} activeOpacity={0.8}>
            <Ionicons name="calendar-outline" size={23} color="#F5C76B" />
          </TouchableOpacity>
        </View>

        {/* Top Label */}
        <View style={styles.dateContainer}>
          <Ionicons name="sparkles-outline" size={17} color="#F5C76B" />
          <Text style={styles.dateText}>YOUR COSMIC GUIDANCE</Text>
        </View>

        {/* Banner */}
        <LinearGradient
          colors={["#49316D", "#24183F", "#17112F"]}
          style={styles.banner}
        >
          <Text style={styles.bannerSmall}>✦ COSMIC INSIGHTS ✦</Text>

          <Text style={styles.bannerTitle}>Your Stars, Your Future</Text>

          <Text style={styles.bannerDescription}>
            Discover daily, weekly and monthly predictions for your zodiac sign.
          </Text>

          <View style={styles.bannerDecoration}>
            <Text style={styles.bannerSymbol}>✧ ☾ ✧</Text>
          </View>
        </LinearGradient>

        {/* Zodiac Selection */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Choose Your Zodiac</Text>
          <Text style={styles.sectionSubtitle}>12 Signs</Text>
        </View>

        <View style={styles.zodiacGrid}>
          {zodiacSigns.map((sign) => {
            const isSelected = selectedSign === sign.name;

            return (
              <TouchableOpacity
                key={sign.name}
                style={[
                  styles.zodiacCard,
                  isSelected && styles.selectedZodiacCard,
                ]}
                onPress={() => handleSignChange(sign.name)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.zodiacIcon,
                    isSelected && styles.selectedZodiacIcon,
                  ]}
                >
                  {sign.icon}
                </Text>

                <Text
                  style={[styles.zodiacName, isSelected && styles.selectedText]}
                >
                  {sign.name}
                </Text>

                <Text style={styles.zodiacDate}>{sign.date}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Selected Zodiac Summary */}
        <LinearGradient
          colors={["#352452", "#211832"]}
          style={styles.selectedSignCard}
        >
          <View style={styles.selectedSignIcon}>
            <Text style={styles.selectedSignSymbol}>
              {selectedZodiac?.icon}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.selectedSignLabel}>YOUR ZODIAC SIGN</Text>
            <Text style={styles.selectedSignName}>{selectedSign}</Text>
            <Text style={styles.selectedSignDate}>{selectedZodiac?.date}</Text>
          </View>

          <Ionicons name="sparkles" size={27} color="#F5C76B" />
        </LinearGradient>

        {/* Period Selection */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Your Horoscope</Text>
            <Text style={styles.sectionSubtitle}>
              Select your prediction period
            </Text>
          </View>
        </View>

        <View style={styles.periodContainer}>
          {periods.map((period) => {
            const isActive = selectedPeriod === period;

            return (
              <TouchableOpacity
                key={period}
                style={[
                  styles.periodButton,
                  isActive && styles.activePeriodButton,
                ]}
                onPress={() => setSelectedPeriod(period)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.periodText,
                    isActive && styles.activePeriodText,
                  ]}
                >
                  {period}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Prediction Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore Predictions</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.name;

            return (
              <TouchableOpacity
                key={category.name}
                style={[
                  styles.categoryButton,
                  isActive && styles.activeCategoryButton,
                ]}
                onPress={() => setSelectedCategory(category.name)}
                activeOpacity={0.8}
              >
                <Ionicons
                  name={category.icon as any}
                  size={16}
                  color={isActive ? "#211632" : "#F5C76B"}
                />
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.activeCategoryText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Horoscope Prediction */}
        <LinearGradient
          colors={["#30204E", "#211A38"]}
          style={styles.predictionCard}
        >
          <View style={styles.predictionTop}>
            <View style={styles.predictionSign}>
              <Text style={styles.predictionSymbol}>
                {selectedZodiac?.icon}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.predictionTitle}>
                {selectedSign} {selectedPeriod} Horoscope
              </Text>

              <Text style={styles.predictionDate}>
                {selectedCategory} Prediction
              </Text>
            </View>

            <Ionicons name="sparkles" size={25} color="#F5C76B" />
          </View>

          <View style={styles.divider} />

          <Text style={styles.predictionDescription}>{prediction}</Text>

          <View style={styles.predictionFooter}>
            <Ionicons
              name="information-circle-outline"
              size={15}
              color="#A59ABF"
            />
            <Text style={styles.disclaimer}>
              Illustrative astrology content for preview.
            </Text>
          </View>
        </LinearGradient>

        {/* Lucky Details */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Your Lucky Elements</Text>
        </View>

        <View style={styles.luckyRow}>
          <View style={styles.luckyCard}>
            <Ionicons name="color-palette-outline" size={25} color="#F5C76B" />
            <Text style={styles.luckyLabel}>Lucky Colour</Text>
            <Text style={styles.luckyValue}>{luckyColours[signIndex]}</Text>
          </View>

          <View style={styles.luckyCard}>
            <Ionicons name="star-outline" size={25} color="#F5C76B" />
            <Text style={styles.luckyLabel}>Lucky Number</Text>
            <Text style={styles.luckyValue}>{luckyNumbers[signIndex]}</Text>
          </View>

          <View style={styles.luckyCard}>
            <Ionicons name="calendar-outline" size={25} color="#F5C76B" />
            <Text style={styles.luckyLabel}>Lucky Day</Text>
            <Text style={styles.luckyValue}>{luckyDays[signIndex]}</Text>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HoroscopeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100D25",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#A59ABF",
    fontSize: 12,
    marginTop: 6,
  },

  calendarButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#28203F",
    alignItems: "center",
    justifyContent: "center",
  },

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 25,
    gap: 8,
  },

  dateText: {
    color: "#F5C76B",
    fontSize: 10,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  banner: {
    marginHorizontal: 20,
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
    minHeight: 170,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#59417C",
  },

  bannerSmall: {
    color: "#F5C76B",
    fontSize: 10,
    fontWeight: "bold",
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 13,
  },

  bannerDescription: {
    color: "#C8BEDB",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
    maxWidth: "85%",
  },

  bannerDecoration: {
    position: "absolute",
    right: 15,
    bottom: 12,
  },

  bannerSymbol: {
    color: "#F5C76B",
    fontSize: 25,
  },

  sectionHeader: {
    marginHorizontal: 20,
    marginTop: 27,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  sectionSubtitle: {
    color: "#A59ABF",
    fontSize: 11,
  },

  zodiacGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    rowGap: 12,
  },

  zodiacCard: {
    width: "31.5%",
    backgroundColor: "#211A38",
    borderRadius: 14,
    paddingVertical: 13,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#392B54",
  },

  selectedZodiacCard: {
    backgroundColor: "#44305F",
    borderColor: "#F5C76B",
  },

  zodiacIcon: {
    color: "#F5C76B",
    fontSize: 29,
    marginBottom: 7,
  },

  selectedZodiacIcon: {
    color: "#FFFFFF",
  },

  zodiacName: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  selectedText: {
    color: "#F5C76B",
  },

  zodiacDate: {
    color: "#A59ABF",
    fontSize: 8,
    marginTop: 5,
  },

  selectedSignCard: {
    marginHorizontal: 20,
    marginTop: 22,
    padding: 15,
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#59417C",
    gap: 13,
  },

  selectedSignIcon: {
    width: 58,
    height: 58,
    borderRadius: 17,
    backgroundColor: "#49316D",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedSignSymbol: {
    color: "#F5C76B",
    fontSize: 34,
  },

  selectedSignLabel: {
    color: "#A59ABF",
    fontSize: 9,
    letterSpacing: 1,
    fontWeight: "bold",
  },

  selectedSignName: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 4,
  },

  selectedSignDate: {
    color: "#C8BEDB",
    fontSize: 10,
    marginTop: 3,
  },

  periodContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    padding: 5,
    backgroundColor: "#211A38",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#392B54",
  },

  periodButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 9,
  },

  activePeriodButton: {
    backgroundColor: "#F5C76B",
  },

  periodText: {
    color: "#C8BEDB",
    fontSize: 12,
    fontWeight: "600",
  },

  activePeriodText: {
    color: "#211632",
    fontWeight: "bold",
  },

  categoryContainer: {
    paddingHorizontal: 20,
    gap: 9,
  },

  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: "#211A38",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#49365F",
  },

  activeCategoryButton: {
    backgroundColor: "#F5C76B",
    borderColor: "#F5C76B",
  },

  categoryText: {
    color: "#E1D7EE",
    fontSize: 11,
    fontWeight: "600",
  },

  activeCategoryText: {
    color: "#211632",
  },

  predictionCard: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#59417C",
  },

  predictionTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  predictionSign: {
    width: 52,
    height: 52,
    borderRadius: 15,
    backgroundColor: "#44305F",
    justifyContent: "center",
    alignItems: "center",
  },

  predictionSymbol: {
    color: "#F5C76B",
    fontSize: 30,
  },

  predictionTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  predictionDate: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: "#59417C",
    marginVertical: 17,
  },

  predictionDescription: {
    color: "#D2C9E1",
    fontSize: 13,
    lineHeight: 23,
  },

  predictionFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    gap: 6,
  },

  disclaimer: {
    color: "#A59ABF",
    fontSize: 9,
    fontStyle: "italic",
  },

  luckyRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    gap: 10,
  },

  luckyCard: {
    flex: 1,
    backgroundColor: "#211A38",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#392B54",
  },

  luckyLabel: {
    color: "#A59ABF",
    fontSize: 9,
    marginTop: 10,
  },

  luckyValue: {
    color: "#F5C76B",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
});
