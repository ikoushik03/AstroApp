import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type ServiceTab = "Gemstones" | "Puja" | "Panchang";

const GOLD = "#F5C76B";
const BACKGROUND = "#100D25";
const CARD = "#1C1631";
const MUTED = "#A59ABF";

const gemstones = [
  {
    name: "Ruby",
    hindi: "Manik",
    icon: "diamond-outline",
    benefit: "Traditionally associated with confidence and leadership.",
    price: "From ₹1,500",
  },
  {
    name: "Emerald",
    hindi: "Panna",
    icon: "leaf-outline",
    benefit: "Traditionally associated with communication and wisdom.",
    price: "From ₹2,000",
  },
  {
    name: "Yellow Sapphire",
    hindi: "Pukhraj",
    icon: "sunny-outline",
    benefit: "Traditionally associated with knowledge and prosperity.",
    price: "From ₹3,000",
  },
  {
    name: "Blue Sapphire",
    hindi: "Neelam",
    icon: "sparkles-outline",
    benefit: "Traditionally associated with discipline and focus.",
    price: "From ₹2,500",
  },
];

const pujas = [
  {
    name: "Ganesh Puja",
    description: "A traditional prayer for new beginnings.",
    price: "₹1,100",
    icon: "flower-outline",
  },
  {
    name: "Mahamrityunjaya Jaap",
    description: "A traditional prayer for peace and well-being.",
    price: "₹2,100",
    icon: "flame-outline",
  },
  {
    name: "Lakshmi Puja",
    description: "A traditional prayer for prosperity.",
    price: "₹1,500",
    icon: "sparkles-outline",
  },
  {
    name: "Navgraha Shanti Puja",
    description: "A traditional ritual associated with planetary peace.",
    price: "₹3,100",
    icon: "planet-outline",
  },
];

const panchangDetails = [
  { label: "Tithi", value: "Sample Tithi", icon: "calendar-outline" },
  { label: "Nakshatra", value: "Sample Nakshatra", icon: "star-outline" },
  { label: "Yoga", value: "Sample Yoga", icon: "infinite-outline" },
  { label: "Karana", value: "Sample Karana", icon: "sync-outline" },
  { label: "Sunrise", value: "6:15 AM", icon: "sunny-outline" },
  { label: "Sunset", value: "5:30 PM", icon: "moon-outline" },
  { label: "Rahu Kaal", value: "Sample time", icon: "time-outline" },
  { label: "Shubh Muhurat", value: "Sample time", icon: "sparkles-outline" },
];

export default function AdditionalServicesScreen({ route }: any) {
  const [activeTab, setActiveTab] = useState<ServiceTab>(
    route?.params?.initialTab ?? "Gemstones",
  );
  const [selectedPuja, setSelectedPuja] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingName, setBookingName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const openPujaBooking = (pujaName: string) => {
    setSelectedPuja(pujaName);
    setModalVisible(true);
  };

  const confirmBooking = () => {
    if (!bookingName.trim() || !bookingDate.trim()) {
      Alert.alert(
        "Missing details",
        "Please enter your name and preferred date.",
      );
      return;
    }

    setModalVisible(false);
    Alert.alert(
      "Booking request received",
      `${selectedPuja}\nName: ${bookingName}\nPreferred date: ${bookingDate}\n\nThis is a demo confirmation. No actual booking has been made.`,
    );
    setBookingName("");
    setBookingDate("");
  };

  const renderGemstones = () => (
    <>
      <View style={styles.introCard}>
        <Ionicons name="diamond" size={30} color={GOLD} />
        <Text style={styles.introTitle}>Find Your Lucky Gemstone</Text>
        <Text style={styles.introDescription}>
          Explore traditional gemstone associations. A personalized
          recommendation requires a detailed birth-chart consultation.
        </Text>
      </View>

      {gemstones.map((stone) => (
        <View key={stone.name} style={styles.serviceCard}>
          <View style={styles.serviceIcon}>
            <Ionicons name={stone.icon as any} size={27} color={GOLD} />
          </View>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceTitle}>{stone.name}</Text>
            <Text style={styles.hindiText}>{stone.hindi}</Text>
            <Text style={styles.serviceDescription}>{stone.benefit}</Text>
            <Text style={styles.priceText}>{stone.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() =>
              Alert.alert(
                stone.name,
                "Personalized gemstone consultation will be available soon.",
              )
            }
          >
            <Text style={styles.smallButtonText}>Explore</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.disclaimer}>
        Note: Gemstone associations are traditional beliefs, not scientifically
        established benefits. Prices are illustrative.
      </Text>
    </>
  );

  const renderPuja = () => (
    <>
      <View style={styles.introCard}>
        <Ionicons name="flower" size={30} color={GOLD} />
        <Text style={styles.introTitle}>Book a Sacred Puja</Text>
        <Text style={styles.introDescription}>
          Explore traditional puja services and send a booking request.
        </Text>
      </View>

      {pujas.map((puja) => (
        <View key={puja.name} style={styles.serviceCard}>
          <View style={styles.serviceIcon}>
            <Ionicons name={puja.icon as any} size={27} color={GOLD} />
          </View>
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceTitle}>{puja.name}</Text>
            <Text style={styles.serviceDescription}>{puja.description}</Text>
            <Text style={styles.priceText}>{puja.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.smallButton}
            onPress={() => openPujaBooking(puja.name)}
          >
            <Text style={styles.smallButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );

  const renderPanchang = () => (
    <>
      <LinearGradient
        colors={["#33234F", "#1C1631"]}
        style={styles.panchangHeader}
      >
        <Ionicons name="calendar" size={30} color={GOLD} />
        <Text style={styles.introTitle}>Daily Panchang</Text>
        <Text style={styles.panchangDate}>13 November 2026</Text>
        <Text style={styles.introDescription}>
          Sample Panchang information for demonstration.
        </Text>
      </LinearGradient>

      <View style={styles.panchangGrid}>
        {panchangDetails.map((item) => (
          <View key={item.label} style={styles.panchangItem}>
            <Ionicons name={item.icon as any} size={23} color={GOLD} />
            <Text style={styles.panchangLabel}>{item.label}</Text>
            <Text style={styles.panchangValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.disclaimer}>
        Panchang values and timings are placeholders, not verified astronomical
        calculations. Accurate timings depend on date and location.
      </Text>
    </>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerSubtitle}>EXPLORE MORE</Text>
          <Text style={styles.headerTitle}>Additional Services</Text>
          <Text style={styles.headerDescription}>
            Discover spiritual services for your journey.
          </Text>
        </View>

        <View style={styles.tabContainer}>
          {(["Gemstones", "Puja", "Panchang"] as ServiceTab[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.content}>
          {activeTab === "Gemstones" && renderGemstones()}
          {activeTab === "Puja" && renderPuja()}
          {activeTab === "Panchang" && renderPanchang()}
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Book Puja</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close-circle" size={27} color={MUTED} />
              </TouchableOpacity>
            </View>

            <Text style={styles.selectedPuja}>{selectedPuja}</Text>

            <Text style={styles.inputLabel}>Your Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor={MUTED}
              value={bookingName}
              onChangeText={setBookingName}
            />

            <Text style={styles.inputLabel}>Preferred Date</Text>
            <TextInput
              style={styles.input}
              placeholder="DD/MM/YYYY"
              placeholderTextColor={MUTED}
              value={bookingDate}
              onChangeText={setBookingDate}
            />

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={confirmBooking}
            >
              <Text style={styles.confirmButtonText}>Submit Request</Text>
            </TouchableOpacity>

            <Text style={styles.disclaimer}>
              Demo only — this does not create a real booking.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 16,
  },
  headerSubtitle: {
    color: GOLD,
    fontSize: 11,
    letterSpacing: 2,
    fontWeight: "700",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 7,
  },
  headerDescription: {
    color: MUTED,
    fontSize: 13,
    marginTop: 6,
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    padding: 5,
    backgroundColor: CARD,
    borderRadius: 14,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: GOLD,
  },
  tabText: {
    color: MUTED,
    fontSize: 12,
    fontWeight: "600",
  },
  activeTabText: {
    color: BACKGROUND,
    fontWeight: "bold",
  },
  content: {
    padding: 16,
    paddingBottom: 35,
  },
  introCard: {
    backgroundColor: CARD,
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#392B54",
  },
  introTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 12,
  },
  introDescription: {
    color: MUTED,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 7,
  },
  serviceCard: {
    backgroundColor: CARD,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#302444",
  },
  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#33234F",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
  serviceTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  hindiText: {
    color: GOLD,
    fontSize: 11,
    marginTop: 3,
  },
  serviceDescription: {
    color: MUTED,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },
  priceText: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 7,
  },
  smallButton: {
    backgroundColor: GOLD,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 10,
  },
  smallButtonText: {
    color: BACKGROUND,
    fontSize: 11,
    fontWeight: "bold",
  },
  disclaimer: {
    color: "#887D9F",
    fontSize: 10,
    lineHeight: 16,
    marginTop: 12,
  },
  panchangHeader: {
    borderRadius: 18,
    padding: 22,
    alignItems: "center",
    marginBottom: 16,
  },
  panchangDate: {
    color: GOLD,
    fontSize: 13,
    fontWeight: "600",
    marginTop: 8,
  },
  panchangGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  panchangItem: {
    width: "48%",
    backgroundColor: CARD,
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#302444",
  },
  panchangLabel: {
    color: MUTED,
    fontSize: 11,
    marginTop: 10,
  },
  panchangValue: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    padding: 20,
  },
  modalCard: {
    backgroundColor: CARD,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#49375F",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  selectedPuja: {
    color: GOLD,
    fontSize: 14,
    marginTop: 15,
    marginBottom: 18,
  },
  inputLabel: {
    color: "#FFFFFF",
    fontSize: 12,
    marginBottom: 7,
  },
  input: {
    backgroundColor: "#100D25",
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#49375F",
    color: "#FFFFFF",
    paddingHorizontal: 13,
    paddingVertical: 12,
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: GOLD,
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginTop: 5,
  },
  confirmButtonText: {
    color: BACKGROUND,
    fontWeight: "bold",
    fontSize: 14,
  },
});
