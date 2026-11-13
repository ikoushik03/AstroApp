import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
  Modal,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const menuItems = [
    {
      icon: "document-text-outline",
      title: "Saved Reports",
      subtitle: "Your saved Kundali and astrology reports",
    },
    {
      icon: "planet-outline",
      title: "Birth Details",
      subtitle: "Manage your birth information",
    },
    {
      icon: "time-outline",
      title: "Consultation History",
      subtitle: "View your previous consultations",
    },
    {
      icon: "settings-outline",
      title: "Account Settings",
      subtitle: "Manage your account preferences",
    },
  ];

  const openSection = (title: string) => {
    setSelectedSection(title);
    setModalVisible(true);
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "Saved Reports":
        return (
          <View>
            <View style={styles.reportCard}>
              <Ionicons
                name="document-text-outline"
                size={25}
                color="#F5C76B"
              />
              <View style={styles.detailInfo}>
                <Text style={styles.detailTitle}>My Birth Kundali</Text>
                <Text style={styles.detailSubtitle}>Birth chart report</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#A59ABF" />
            </View>

            <View style={styles.reportCard}>
              <Ionicons name="heart-outline" size={25} color="#F5C76B" />
              <View style={styles.detailInfo}>
                <Text style={styles.detailTitle}>Compatibility Report</Text>
                <Text style={styles.detailSubtitle}>
                  Kundali matching report
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#A59ABF" />
            </View>

            <View style={styles.reportCard}>
              <Ionicons name="sunny-outline" size={25} color="#F5C76B" />
              <View style={styles.detailInfo}>
                <Text style={styles.detailTitle}>Daily Horoscope</Text>
                <Text style={styles.detailSubtitle}>
                  Your astrology predictions
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#A59ABF" />
            </View>
          </View>
        );

      case "Birth Details":
        return (
          <View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Full Name</Text>
              <Text style={styles.detailValue}>AstroGuide User</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date of Birth</Text>
              <Text style={styles.detailValue}>Not added</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Birth Time</Text>
              <Text style={styles.detailValue}>Not added</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Birth Place</Text>
              <Text style={styles.detailValue}>Not added</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Gender</Text>
              <Text style={styles.detailValue}>Not added</Text>
            </View>

            <TouchableOpacity
              style={styles.actionButton}
              onPress={() =>
                Alert.alert(
                  "Birth Details",
                  "Birth details editing will be connected next.",
                )
              }
            >
              <Text style={styles.actionButtonText}>Edit Birth Details</Text>
            </TouchableOpacity>
          </View>
        );

      case "Consultation History":
        return (
          <View>
            <View style={styles.emptyState}>
              <Ionicons name="chatbubbles-outline" size={48} color="#F5C76B" />
              <Text style={styles.emptyTitle}>No Consultations Yet</Text>
              <Text style={styles.emptySubtitle}>
                Your previous astrologer consultations will appear here.
              </Text>
            </View>
          </View>
        );

      case "Account Settings":
        return (
          <View>
            <View style={styles.settingRow}>
              <View style={styles.settingIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color="#F5C76B"
                />
              </View>

              <View style={styles.detailInfo}>
                <Text style={styles.detailTitle}>Notifications</Text>
                <Text style={styles.detailSubtitle}>
                  Receive astrology updates
                </Text>
              </View>

              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  notificationsEnabled && styles.toggleActive,
                ]}
                onPress={() => setNotificationsEnabled(!notificationsEnabled)}
              >
                <View
                  style={[
                    styles.toggleCircle,
                    notificationsEnabled && styles.toggleCircleActive,
                  ]}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.reportCard}
              onPress={() =>
                Alert.alert("Privacy", "Privacy settings coming soon.")
              }
            >
              <Ionicons
                name="shield-checkmark-outline"
                size={23}
                color="#F5C76B"
              />
              <View style={styles.detailInfo}>
                <Text style={styles.detailTitle}>Privacy Policy</Text>
                <Text style={styles.detailSubtitle}>
                  View our privacy information
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#A59ABF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.reportCard}
              onPress={() =>
                Alert.alert("Help & Support", "Support details coming soon.")
              }
            >
              <Ionicons name="help-circle-outline" size={23} color="#F5C76B" />
              <View style={styles.detailInfo}>
                <Text style={styles.detailTitle}>Help & Support</Text>
                <Text style={styles.detailSubtitle}>
                  Get assistance with AstroGuide
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#A59ABF" />
            </TouchableOpacity>
          </View>
        );

      case "Edit Profile":
        return (
          <View style={styles.emptyState}>
            <Ionicons name="person-circle-outline" size={48} color="#F5C76B" />
            <Text style={styles.emptyTitle}>Edit Your Profile</Text>
            <Text style={styles.emptySubtitle}>
              Profile editing form will be added in the next step.
            </Text>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>

          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => openSection("Account Settings")}
          >
            <Ionicons name="settings-outline" size={23} color="#F5C76B" />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <LinearGradient
          colors={["#49316D", "#30204E", "#17112F"]}
          style={styles.profileCard}
        >
          <View style={styles.avatar}>
            <Ionicons name="person" size={48} color="#F5C76B" />
          </View>

          <Text style={styles.userName}>AstroGuide User</Text>
          <Text style={styles.userEmail}>user@example.com</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => openSection("Edit Profile")}
          >
            <Ionicons name="create-outline" size={16} color="#211632" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Membership */}
        <LinearGradient
          colors={["#44305F", "#24183F"]}
          style={styles.membershipCard}
        >
          <View style={styles.membershipIcon}>
            <Ionicons name="star" size={23} color="#F5C76B" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.membershipTitle}>AstroGuide Membership</Text>
            <Text style={styles.membershipSubtitle}>
              Explore premium astrology services
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={21} color="#F5C76B" />
        </LinearGradient>

        {/* Account Menu */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Account</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && {
                  borderBottomWidth: 0,
                },
              ]}
              onPress={() => openSection(item.title)}
              activeOpacity={0.7}
            >
              <View style={styles.menuIcon}>
                <Ionicons name={item.icon as any} size={22} color="#F5C76B" />
              </View>

              <View style={styles.menuInfo}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>

              <Ionicons name="chevron-forward" size={19} color="#817795" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() =>
            Alert.alert("Logout", "Are you sure you want to logout?", [
              { text: "Cancel", style: "cancel" },
              {
                text: "Logout",
                style: "destructive",
                onPress: () =>
                  Alert.alert(
                    "Logout",
                    "Authentication will be connected later.",
                  ),
              },
            ])
          }
        >
          <Ionicons name="log-out-outline" size={21} color="#FF7777" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>AstroGuide v1.0.0</Text>

        <View style={{ height: 30 }} />
      </ScrollView>

      {/* Section Details Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedSection}</Text>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={23} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {renderSectionContent()}
              <View style={{ height: 20 }} />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
    paddingBottom: 20,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: "#28203F",
    alignItems: "center",
    justifyContent: "center",
  },

  profileCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 22,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#59417C",
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#44305F",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F5C76B",
  },

  userName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },

  userEmail: {
    color: "#C8BEDB",
    fontSize: 12,
    marginTop: 6,
  },

  editButton: {
    backgroundColor: "#F5C76B",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 7,
    marginTop: 17,
  },

  editButtonText: {
    color: "#211632",
    fontSize: 12,
    fontWeight: "bold",
  },

  membershipCard: {
    marginHorizontal: 20,
    marginTop: 18,
    padding: 16,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#59417C",
  },

  membershipIcon: {
    width: 45,
    height: 45,
    borderRadius: 13,
    backgroundColor: "#59417C",
    justifyContent: "center",
    alignItems: "center",
  },

  membershipTitle: {
    color: "#F5C76B",
    fontSize: 13,
    fontWeight: "bold",
  },

  membershipSubtitle: {
    color: "#C8BEDB",
    fontSize: 10,
    marginTop: 5,
  },

  sectionHeader: {
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  menuContainer: {
    marginHorizontal: 20,
    backgroundColor: "#211A38",
    borderRadius: 17,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#392B54",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#392B54",
    gap: 12,
  },

  menuIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#35264D",
    justifyContent: "center",
    alignItems: "center",
  },

  menuInfo: {
    flex: 1,
  },

  menuTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  menuSubtitle: {
    color: "#A59ABF",
    fontSize: 10,
    marginTop: 5,
  },

  logoutButton: {
    marginHorizontal: 20,
    marginTop: 25,
    backgroundColor: "#2A1931",
    borderRadius: 13,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#583044",
  },

  logoutText: {
    color: "#FF7777",
    fontSize: 13,
    fontWeight: "bold",
  },

  version: {
    color: "#817795",
    fontSize: 10,
    textAlign: "center",
    marginTop: 18,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "flex-end",
  },

  modalContainer: {
    backgroundColor: "#1C1631",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 22,
    paddingBottom: 35,
    maxHeight: "75%",
    borderWidth: 1,
    borderColor: "#59417C",
  },

  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  modalTitle: {
    color: "#F5C76B",
    fontSize: 19,
    fontWeight: "bold",
  },

  closeButton: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "#35264D",
    justifyContent: "center",
    alignItems: "center",
  },

  reportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#28203F",
    padding: 15,
    borderRadius: 13,
    marginBottom: 12,
    gap: 12,
  },

  detailInfo: {
    flex: 1,
  },

  detailTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  detailSubtitle: {
    color: "#A59ABF",
    fontSize: 11,
    marginTop: 5,
  },

  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#392B54",
  },

  detailLabel: {
    color: "#A59ABF",
    fontSize: 12,
  },

  detailValue: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  actionButton: {
    backgroundColor: "#F5C76B",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 22,
  },

  actionButtonText: {
    color: "#211632",
    fontSize: 13,
    fontWeight: "bold",
  },

  emptyState: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 15,
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },

  emptySubtitle: {
    color: "#A59ABF",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 8,
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#28203F",
    padding: 13,
    borderRadius: 13,
    marginBottom: 12,
    gap: 12,
  },

  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#35264D",
    alignItems: "center",
    justifyContent: "center",
  },

  toggleButton: {
    width: 45,
    height: 25,
    borderRadius: 15,
    backgroundColor: "#59417C",
    justifyContent: "center",
    padding: 3,
  },

  toggleActive: {
    backgroundColor: "#B58B43",
  },

  toggleCircle: {
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },

  toggleCircleActive: {
    alignSelf: "flex-end",
  },
});
