import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  Modal,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type Availability = "Online" | "Busy" | "Offline";

type Astrologer = {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: string;
  reviews: string;
  price: string;
  languages: string[];
  expertise: string[];
  availability: Availability;
  verified: boolean;
};

const categories = ["All", "Love", "Career", "Marriage", "Vedic", "Numerology"];

const astrologers: Astrologer[] = [
  {
    id: "1",
    name: "Acharya Rahul",
    specialty: "Vedic Astrology",
    experience: "12 Years",
    rating: "4.9",
    reviews: "2.4k",
    price: "₹25/min",
    languages: ["Hindi", "English"],
    expertise: ["Vedic", "Marriage", "Career"],
    availability: "Online",
    verified: true,
  },
  {
    id: "2",
    name: "Pandit Sharma",
    specialty: "Love & Marriage Expert",
    experience: "9 Years",
    rating: "4.8",
    reviews: "1.8k",
    price: "₹20/min",
    languages: ["Hindi", "English", "Punjabi"],
    expertise: ["Love", "Marriage"],
    availability: "Online",
    verified: true,
  },
  {
    id: "3",
    name: "Astrologer Priya",
    specialty: "Career & Numerology",
    experience: "7 Years",
    rating: "4.7",
    reviews: "1.2k",
    price: "₹18/min",
    languages: ["Hindi", "English"],
    expertise: ["Career", "Numerology"],
    availability: "Busy",
    verified: true,
  },
  {
    id: "4",
    name: "Acharya Vikram",
    specialty: "Vedic & Kundali Expert",
    experience: "15 Years",
    rating: "4.9",
    reviews: "3.1k",
    price: "₹30/min",
    languages: ["Hindi", "Sanskrit"],
    expertise: ["Vedic", "Marriage"],
    availability: "Offline",
    verified: true,
  },
];

const availableDates = ["Today", "Tomorrow", "15 Nov", "16 Nov"];

const availableTimes = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "04:30 PM",
  "06:00 PM",
];

const ConsultScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const [bookingVisible, setBookingVisible] = useState(false);
  const [selectedAstrologer, setSelectedAstrologer] =
    useState<Astrologer | null>(null);

  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [consultationType, setConsultationType] = useState("Chat");

  const filteredAstrologers = astrologers.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.specialty.toLowerCase().includes(searchText) ||
      item.languages.some((language) =>
        language.toLowerCase().includes(searchText),
      ) ||
      item.expertise.some((expertise) =>
        expertise.toLowerCase().includes(searchText),
      );

    const matchesCategory =
      selectedCategory === "All" ||
      item.expertise.some(
        (expertise) =>
          expertise.toLowerCase() === selectedCategory.toLowerCase(),
      );

    return matchesSearch && matchesCategory;
  });

  const openBooking = (astrologer: Astrologer, method: string) => {
    if (astrologer.availability !== "Online") {
      Alert.alert(
        "Currently Unavailable",
        `${astrologer.name} is ${astrologer.availability.toLowerCase()}. You can check again later.`,
      );
      return;
    }

    setSelectedAstrologer(astrologer);
    setConsultationType(method);
    setSelectedDate("Today");
    setSelectedTime("10:00 AM");
    setBookingVisible(true);
  };

  const confirmBooking = () => {
    if (!selectedAstrologer) return;

    Alert.alert(
      "Booking Preview",
      `Astrologer: ${selectedAstrologer.name}\nType: ${consultationType}\nDate: ${selectedDate}\nTime: ${selectedTime}\nRate: ${selectedAstrologer.price}\n\nActual booking and payment will be connected later.`,
      [
        {
          text: "OK",
          onPress: () => setBookingVisible(false),
        },
      ],
    );
  };

  const getAvailabilityColor = (status: Availability) => {
    if (status === "Online") return "#42D68B";
    if (status === "Busy") return "#F5C76B";
    return "#817795";
  };

  const renderAstrologer = (item: Astrologer) => (
    <View key={item.id} style={styles.astrologerCard}>
      {/* Profile */}
      <View style={styles.cardTop}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={35} color="#F5C76B" />

          <View
            style={[
              styles.onlineDot,
              { backgroundColor: getAvailabilityColor(item.availability) },
            ]}
          />
        </View>

        <View style={styles.astrologerInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.astrologerName}>{item.name}</Text>

            {item.verified && (
              <Ionicons name="checkmark-circle" size={17} color="#42D68B" />
            )}
          </View>

          <Text style={styles.specialty}>{item.specialty}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={13} color="#F5C76B" />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.reviewText}>({item.reviews} reviews)</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.perMinute}>per minute</Text>
        </View>
      </View>

      {/* Verified label */}
      {item.verified && (
        <View style={styles.verifiedRow}>
          <Ionicons name="shield-checkmark" size={13} color="#42D68B" />
          <Text style={styles.verifiedText}>Verified Astrologer</Text>
        </View>
      )}

      <View style={styles.cardDivider} />

      {/* Experience */}
      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <Ionicons name="briefcase-outline" size={15} color="#F5C76B" />
          <Text style={styles.detailText}>{item.experience} experience</Text>
        </View>
      </View>

      {/* Languages */}
      <Text style={styles.detailHeading}>Languages</Text>

      <View style={styles.tagRow}>
        {item.languages.map((language) => (
          <View key={language} style={styles.languageTag}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        ))}
      </View>

      {/* Expertise */}
      <Text style={styles.detailHeading}>Expertise</Text>

      <View style={styles.tagRow}>
        {item.expertise.map((expertise) => (
          <View key={expertise} style={styles.expertiseTag}>
            <Text style={styles.expertiseText}>{expertise}</Text>
          </View>
        ))}
      </View>

      {/* Availability and booking */}
      <View style={styles.cardBottom}>
        <View>
          <Text
            style={[
              styles.availability,
              { color: getAvailabilityColor(item.availability) },
            ]}
          >
            ● {item.availability}
          </Text>

          <Text style={styles.availabilitySubtext}>
            {item.availability === "Online"
              ? "Available for consultation"
              : item.availability === "Busy"
                ? "Currently in consultation"
                : "Check again later"}
          </Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[
              styles.chatButton,
              item.availability !== "Online" && styles.disabledButton,
            ]}
            onPress={() => openBooking(item, "Chat")}
          >
            <Ionicons name="chatbubble-outline" size={15} color="#F5C76B" />
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.callButton,
              item.availability !== "Online" && styles.disabledCallButton,
            ]}
            onPress={() => openBooking(item, "Call")}
          >
            <Ionicons name="call-outline" size={15} color="#211632" />
            <Text style={styles.callButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Talk to Astrologers</Text>
            <Text style={styles.headerSubtitle}>
              Get guidance from astrology experts
            </Text>
          </View>

          <TouchableOpacity
            style={styles.historyButton}
            onPress={() =>
              Alert.alert(
                "Consultation History",
                "Your consultation history will be available after booking integration.",
              )
            }
          >
            <Ionicons name="time-outline" size={23} color="#F5C76B" />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <LinearGradient
          colors={["#523875", "#30204E", "#17112F"]}
          style={styles.banner}
        >
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTag}>✦ PERSONAL GUIDANCE</Text>

            <Text style={styles.bannerTitle}>Your Stars Have Answers</Text>

            <Text style={styles.bannerDescription}>
              Connect with trusted astrologers and find clarity in life's
              important moments.
            </Text>

            <View style={styles.trustRow}>
              <Ionicons name="shield-checkmark" size={15} color="#F5C76B" />
              <Text style={styles.trustText}>Verified expert profiles</Text>
            </View>
          </View>

          <Ionicons name="sparkles" size={65} color="#F5C76B" />
        </LinearGradient>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={21} color="#A59ABF" />

          <TextInput
            style={styles.searchInput}
            placeholder="Search name, language or expertise"
            placeholderTextColor="#817795"
            value={search}
            onChangeText={setSearch}
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={20} color="#A59ABF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Categories */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore by Expertise</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        >
          {categories.map((category) => {
            const selected = selectedCategory === category;

            return (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryButton,
                  selected && styles.selectedCategory,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selected && styles.selectedCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Astrologers */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Top Astrologers</Text>
            <Text style={styles.listSubtitle}>
              Connect with experienced experts
            </Text>
          </View>

          <Text style={styles.resultCount}>
            {filteredAstrologers.length} Experts
          </Text>
        </View>

        {filteredAstrologers.map(renderAstrologer)}

        {filteredAstrologers.length === 0 && (
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={35} color="#F5C76B" />
            <Text style={styles.emptyText}>No astrologers found.</Text>
            <Text style={styles.emptySubtext}>
              Try another search or category.
            </Text>
          </View>
        )}

        <View style={styles.footerNote}>
          <Ionicons name="shield-checkmark-outline" size={16} color="#F5C76B" />
          <Text style={styles.footerText}>
            Sample astrologer profiles for app preview.
          </Text>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      {/* Booking Modal */}
      <Modal
        visible={bookingVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setBookingVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.bookingModal}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Book Consultation</Text>
                <Text style={styles.modalSubtitle}>
                  Choose your preferred time
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setBookingVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            {selectedAstrologer && (
              <View style={styles.selectedProfile}>
                <View style={styles.smallAvatar}>
                  <Ionicons name="person" size={24} color="#F5C76B" />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.selectedName}>
                    {selectedAstrologer.name}
                  </Text>
                  <Text style={styles.selectedSpecialty}>
                    {selectedAstrologer.specialty}
                  </Text>
                </View>

                <Text style={styles.selectedPrice}>
                  {selectedAstrologer.price}
                </Text>
              </View>
            )}

            <Text style={styles.modalLabel}>Consultation Type</Text>

            <View style={styles.choiceRow}>
              {["Chat", "Call"].map((method) => (
                <TouchableOpacity
                  key={method}
                  style={[
                    styles.choiceButton,
                    consultationType === method && styles.selectedChoice,
                  ]}
                  onPress={() => setConsultationType(method)}
                >
                  <Ionicons
                    name={
                      method === "Chat" ? "chatbubble-outline" : "call-outline"
                    }
                    size={17}
                    color={consultationType === method ? "#211632" : "#F5C76B"}
                  />
                  <Text
                    style={[
                      styles.choiceText,
                      consultationType === method && styles.selectedChoiceText,
                    ]}
                  >
                    {method}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.modalLabel}>Select Date</Text>

            <View style={styles.choiceRow}>
              {availableDates.map((date) => (
                <TouchableOpacity
                  key={date}
                  style={[
                    styles.dateButton,
                    selectedDate === date && styles.selectedChoice,
                  ]}
                  onPress={() => setSelectedDate(date)}
                >
                  <Text
                    style={[
                      styles.dateText,
                      selectedDate === date && styles.selectedChoiceText,
                    ]}
                  >
                    {date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.modalLabel}>Available Time Slots</Text>

            <View style={styles.timeGrid}>
              {availableTimes.map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.timeButton,
                    selectedTime === time && styles.selectedChoice,
                  ]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === time && styles.selectedChoiceText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmBooking}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={["#F8D98C", "#E6AF4C"]}
                style={styles.confirmGradient}
              >
                <Text style={styles.confirmButtonText}>Confirm Booking</Text>
                <Ionicons name="arrow-forward" size={18} color="#211632" />
              </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.bookingDisclaimer}>
              Booking times and availability are sample data. Actual
              reservations and payments are not connected yet.
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConsultScreen;

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
    fontSize: 22,
    fontWeight: "bold",
  },

  headerSubtitle: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 6,
  },

  historyButton: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#28203F",
    justifyContent: "center",
    alignItems: "center",
  },

  banner: {
    marginHorizontal: 20,
    marginTop: 23,
    padding: 18,
    borderRadius: 19,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#59417C",
  },

  bannerContent: {
    flex: 1,
  },

  bannerTag: {
    color: "#F5C76B",
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 12,
  },

  bannerDescription: {
    color: "#C8BEDB",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 7,
  },

  trustRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 6,
  },

  trustText: {
    color: "#F5C76B",
    fontSize: 10,
    fontWeight: "600",
  },

  searchContainer: {
    marginHorizontal: 20,
    marginTop: 23,
    height: 52,
    backgroundColor: "#211A38",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#392B54",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    gap: 10,
  },

  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 12,
  },

  sectionHeader: {
    marginHorizontal: 20,
    marginTop: 26,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  listSubtitle: {
    color: "#A59ABF",
    fontSize: 10,
    marginTop: 5,
  },

  categoryList: {
    paddingHorizontal: 20,
    gap: 10,
  },

  categoryButton: {
    paddingHorizontal: 19,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#211A38",
    borderWidth: 1,
    borderColor: "#392B54",
  },

  selectedCategory: {
    backgroundColor: "#F5C76B",
    borderColor: "#F5C76B",
  },

  categoryText: {
    color: "#C8BEDB",
    fontSize: 12,
    fontWeight: "600",
  },

  selectedCategoryText: {
    color: "#211632",
  },

  resultCount: {
    color: "#F5C76B",
    fontSize: 11,
  },

  astrologerCard: {
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: "#211A38",
    borderRadius: 17,
    padding: 15,
    borderWidth: 1,
    borderColor: "#392B54",
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarContainer: {
    width: 57,
    height: 57,
    borderRadius: 17,
    backgroundColor: "#44305F",
    justifyContent: "center",
    alignItems: "center",
  },

  onlineDot: {
    position: "absolute",
    right: 1,
    bottom: 1,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#211A38",
  },

  astrologerInfo: {
    flex: 1,
    marginLeft: 12,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  },

  astrologerName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  specialty: {
    color: "#A59ABF",
    fontSize: 10,
    marginTop: 5,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
    gap: 4,
  },

  ratingText: {
    color: "#F5C76B",
    fontSize: 11,
    fontWeight: "bold",
  },

  reviewText: {
    color: "#A59ABF",
    fontSize: 9,
  },

  priceContainer: {
    alignItems: "flex-end",
  },

  price: {
    color: "#F5C76B",
    fontSize: 14,
    fontWeight: "bold",
  },

  perMinute: {
    color: "#A59ABF",
    fontSize: 9,
    marginTop: 4,
  },

  verifiedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 11,
  },

  verifiedText: {
    color: "#42D68B",
    fontSize: 10,
    fontWeight: "600",
  },

  cardDivider: {
    height: 1,
    backgroundColor: "#392B54",
    marginVertical: 13,
  },

  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  detailText: {
    color: "#C8BEDB",
    fontSize: 10,
  },

  detailHeading: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 9,
  },

  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },

  languageTag: {
    backgroundColor: "#30264A",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 7,
  },

  languageText: {
    color: "#D8CCE9",
    fontSize: 10,
  },

  expertiseTag: {
    backgroundColor: "#49365F",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#59417C",
  },

  expertiseText: {
    color: "#F5C76B",
    fontSize: 10,
    fontWeight: "600",
  },

  cardBottom: {
    marginTop: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  availability: {
    fontSize: 11,
    fontWeight: "bold",
  },

  availabilitySubtext: {
    color: "#A59ABF",
    fontSize: 9,
    marginTop: 5,
  },

  actionButtons: {
    flexDirection: "row",
    gap: 8,
  },

  chatButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: "#F5C76B",
    borderRadius: 9,
    paddingHorizontal: 11,
    paddingVertical: 9,
  },

  chatButtonText: {
    color: "#F5C76B",
    fontSize: 11,
    fontWeight: "bold",
  },

  callButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#F5C76B",
    borderRadius: 9,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },

  callButtonText: {
    color: "#211632",
    fontSize: 11,
    fontWeight: "bold",
  },

  disabledButton: {
    opacity: 0.45,
  },

  disabledCallButton: {
    opacity: 0.45,
  },

  emptyContainer: {
    alignItems: "center",
    padding: 30,
  },

  emptyText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 12,
  },

  emptySubtext: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 6,
  },

  footerNote: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    marginTop: 15,
  },

  footerText: {
    color: "#A59ABF",
    fontSize: 10,
  },

  // Booking modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "flex-end",
  },

  bookingModal: {
    backgroundColor: "#17112F",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 23,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: "#49365F",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  modalSubtitle: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 5,
  },

  closeButton: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: "#30264A",
    alignItems: "center",
    justifyContent: "center",
  },

  selectedProfile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#211A38",
    borderRadius: 13,
    padding: 12,
    marginTop: 20,
    gap: 10,
  },

  smallAvatar: {
    width: 43,
    height: 43,
    borderRadius: 12,
    backgroundColor: "#44305F",
    alignItems: "center",
    justifyContent: "center",
  },

  selectedName: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  selectedSpecialty: {
    color: "#A59ABF",
    fontSize: 10,
    marginTop: 4,
  },

  selectedPrice: {
    color: "#F5C76B",
    fontSize: 13,
    fontWeight: "bold",
  },

  modalLabel: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 21,
    marginBottom: 11,
  },

  choiceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  choiceButton: {
    flex: 1,
    minWidth: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#211A38",
    borderWidth: 1,
    borderColor: "#49365F",
  },

  selectedChoice: {
    backgroundColor: "#F5C76B",
    borderColor: "#F5C76B",
  },

  choiceText: {
    color: "#F5C76B",
    fontSize: 11,
    fontWeight: "bold",
  },

  selectedChoiceText: {
    color: "#211632",
  },

  dateButton: {
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderRadius: 9,
    backgroundColor: "#211A38",
    borderWidth: 1,
    borderColor: "#49365F",
  },

  dateText: {
    color: "#C8BEDB",
    fontSize: 10,
    fontWeight: "600",
  },

  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },

  timeButton: {
    width: "31%",
    alignItems: "center",
    paddingVertical: 11,
    borderRadius: 9,
    backgroundColor: "#211A38",
    borderWidth: 1,
    borderColor: "#49365F",
  },

  timeText: {
    color: "#C8BEDB",
    fontSize: 10,
  },

  confirmButton: {
    marginTop: 25,
    borderRadius: 12,
    overflow: "hidden",
  },

  confirmGradient: {
    height: 53,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  confirmButtonText: {
    color: "#211632",
    fontSize: 13,
    fontWeight: "bold",
  },

  bookingDisclaimer: {
    color: "#A59ABF",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 12,
  },
});
