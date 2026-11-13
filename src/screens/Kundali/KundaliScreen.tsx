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
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type Tab = "kundali" | "matching" | "reports";

const KundaliScreen = () => {
  const [activeTab, setActiveTab] = useState<Tab>("kundali");

  // My Kundali details
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [gender, setGender] = useState("Male");
  const [generated, setGenerated] = useState(false);

  // Partner details
  const [personOne, setPersonOne] = useState("");
  const [personOneDob, setPersonOneDob] = useState("");
  const [personOneTime, setPersonOneTime] = useState("");
  const [personOnePlace, setPersonOnePlace] = useState("");

  const [personTwo, setPersonTwo] = useState("");
  const [personTwoDob, setPersonTwoDob] = useState("");
  const [personTwoTime, setPersonTwoTime] = useState("");
  const [personTwoPlace, setPersonTwoPlace] = useState("");

  const [matchingSubmitted, setMatchingSubmitted] = useState(false);

  const handleGenerate = () => {
    if (!name.trim() || !dob.trim() || !time.trim() || !place.trim()) {
      Alert.alert(
        "Missing Details",
        "Please fill in all birth details before continuing.",
      );
      return;
    }

    setGenerated(true);
    Alert.alert(
      "Details Submitted",
      "Your birth details have been saved in this screen preview. Actual Kundali calculations will be connected later.",
    );
  };

  const handleMatching = () => {
    if (
      !personOne.trim() ||
      !personOneDob.trim() ||
      !personOneTime.trim() ||
      !personOnePlace.trim() ||
      !personTwo.trim() ||
      !personTwoDob.trim() ||
      !personTwoTime.trim() ||
      !personTwoPlace.trim()
    ) {
      Alert.alert(
        "Missing Details",
        "Please enter all birth details for both people.",
      );
      return;
    }

    setMatchingSubmitted(true);

    Alert.alert(
      "Details Submitted",
      "Both birth profiles are ready for compatibility calculation. Actual Guna Milan results will be connected later.",
    );
  };

  const handleDownload = () => {
    if (!generated) {
      Alert.alert(
        "Kundali Not Generated",
        "Please enter your birth details and generate your Kundali first.",
      );
      setActiveTab("kundali");
      return;
    }

    Alert.alert(
      "PDF Download",
      "Your report preview is ready. PDF generation and download will be connected in the next development step.",
    );
  };

  const renderInput = (
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (value: string) => void,
    icon: keyof typeof Ionicons.glyphMap,
    keyboardType: "default" | "numeric" = "default",
  ) => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>

      <View style={styles.inputContainer}>
        <Ionicons name={icon} size={20} color="#F5C76B" />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#817795"
          value={value}
          onChangeText={(value) => {
            onChangeText(value);
            setGenerated(false);
          }}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );

  const renderPartnerForm = (
    title: string,
    partnerName: string,
    setPartnerName: (value: string) => void,
    partnerDob: string,
    setPartnerDob: (value: string) => void,
    partnerTime: string,
    setPartnerTime: (value: string) => void,
    partnerPlace: string,
    setPartnerPlace: (value: string) => void,
    icon: keyof typeof Ionicons.glyphMap,
  ) => (
    <View style={styles.partnerCard}>
      <View style={styles.partnerHeading}>
        <View style={styles.partnerIcon}>
          <Ionicons name={icon} size={23} color="#F5C76B" />
        </View>
        <Text style={styles.partnerTitle}>{title}</Text>
      </View>

      {renderInput(
        "Full Name",
        "Enter full name",
        partnerName,
        setPartnerName,
        "person-outline",
      )}

      {renderInput(
        "Date of Birth",
        "DD/MM/YYYY",
        partnerDob,
        setPartnerDob,
        "calendar-outline",
      )}

      {renderInput(
        "Time of Birth",
        "HH:MM AM/PM",
        partnerTime,
        setPartnerTime,
        "time-outline",
      )}

      {renderInput(
        "Place of Birth",
        "Enter city or birthplace",
        partnerPlace,
        setPartnerPlace,
        "location-outline",
      )}
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
            <Text style={styles.headerTitle}>Kundali</Text>
            <Text style={styles.headerSubtitle}>
              Your personal Vedic astrology guide
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons name="planet-outline" size={25} color="#F5C76B" />
          </View>
        </View>

        {/* Banner */}
        <LinearGradient
          colors={["#49316D", "#24183F", "#17112F"]}
          style={styles.banner}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerSmall}>✦ YOUR COSMIC BLUEPRINT</Text>

            <Text style={styles.bannerTitle}>Know Your Destiny</Text>

            <Text style={styles.bannerDescription}>
              Explore your birth chart, relationship compatibility and
              personalized astrology reports.
            </Text>
          </View>

          <Ionicons name="moon" size={65} color="#F5C76B" />
        </LinearGradient>

        {/* Main Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "kundali" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("kundali")}
          >
            <Ionicons
              name="planet-outline"
              size={17}
              color={activeTab === "kundali" ? "#211632" : "#A59ABF"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "kundali" && styles.activeTabText,
              ]}
            >
              My Kundali
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "matching" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("matching")}
          >
            <Ionicons
              name="heart-outline"
              size={17}
              color={activeTab === "matching" ? "#211632" : "#A59ABF"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "matching" && styles.activeTabText,
              ]}
            >
              Matching
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "reports" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("reports")}
          >
            <Ionicons
              name="document-text-outline"
              size={17}
              color={activeTab === "reports" ? "#211632" : "#A59ABF"}
            />
            <Text
              style={[
                styles.tabText,
                activeTab === "reports" && styles.activeTabText,
              ]}
            >
              Reports
            </Text>
          </TouchableOpacity>
        </View>

        {/* MY KUNDALI */}
        {activeTab === "kundali" && (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Enter Birth Details</Text>
              <Text style={styles.sectionSubtitle}>
                All fields are required
              </Text>
            </View>

            {renderInput(
              "Full Name",
              "Enter your full name",
              name,
              setName,
              "person-outline",
            )}

            {renderInput(
              "Date of Birth",
              "DD/MM/YYYY",
              dob,
              setDob,
              "calendar-outline",
            )}

            {renderInput(
              "Time of Birth",
              "HH:MM (e.g. 07:30 AM)",
              time,
              setTime,
              "time-outline",
            )}

            {renderInput(
              "Place of Birth",
              "Enter city or birthplace",
              place,
              setPlace,
              "location-outline",
            )}

            {/* Gender */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Gender</Text>

              <View style={styles.genderRow}>
                {["Male", "Female", "Other"].map((item) => {
                  const selected = gender === item;

                  return (
                    <TouchableOpacity
                      key={item}
                      style={[
                        styles.genderButton,
                        selected && styles.selectedGender,
                      ]}
                      onPress={() => setGender(item)}
                    >
                      <Text
                        style={[
                          styles.genderText,
                          selected && styles.selectedGenderText,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <TouchableOpacity
              style={styles.generateButton}
              onPress={handleGenerate}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={["#F8D98C", "#E6AF4C"]}
                style={styles.generateGradient}
              >
                <Ionicons name="sparkles" size={20} color="#211632" />

                <Text style={styles.generateButtonText}>
                  Generate My Kundali
                </Text>

                <Ionicons name="arrow-forward" size={19} color="#211632" />
              </LinearGradient>
            </TouchableOpacity>

            {generated && (
              <View style={styles.resultCard}>
                <View style={styles.resultHeader}>
                  <Ionicons name="checkmark-circle" size={24} color="#F5C76B" />
                  <Text style={styles.resultTitle}>
                    Birth Details Submitted
                  </Text>
                </View>

                <Text style={styles.resultText}>Name: {name}</Text>
                <Text style={styles.resultText}>Date of Birth: {dob}</Text>
                <Text style={styles.resultText}>Time of Birth: {time}</Text>
                <Text style={styles.resultText}>Birthplace: {place}</Text>
                <Text style={styles.resultText}>Gender: {gender}</Text>

                <Text style={styles.resultNote}>
                  This is a form preview only. Actual planetary positions and
                  Kundali calculations will be integrated later.
                </Text>

                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => setActiveTab("reports")}
                >
                  <Ionicons
                    name="document-text-outline"
                    size={18}
                    color="#F5C76B"
                  />
                  <Text style={styles.secondaryButtonText}>
                    View Report Options
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}

        {/* KUNDALI MATCHING */}
        {activeTab === "matching" && (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Kundali Matching</Text>
              <Text style={styles.sectionSubtitle}>
                Compare two birth profiles
              </Text>
            </View>

            <View style={styles.matchingInfo}>
              <Ionicons name="heart" size={25} color="#F5C76B" />
              <View style={{ flex: 1 }}>
                <Text style={styles.matchingInfoTitle}>
                  Relationship Compatibility
                </Text>
                <Text style={styles.matchingInfoText}>
                  Enter both birth profiles to prepare a Kundali matching
                  report.
                </Text>
              </View>
            </View>

            {renderPartnerForm(
              "Person 1 Details",
              personOne,
              setPersonOne,
              personOneDob,
              setPersonOneDob,
              personOneTime,
              setPersonOneTime,
              personOnePlace,
              setPersonOnePlace,
              "person-outline",
            )}

            <View style={styles.matchSymbol}>
              <Ionicons name="heart" size={25} color="#F5C76B" />
              <Text style={styles.matchSymbolText}>COMPATIBILITY</Text>
            </View>

            {renderPartnerForm(
              "Person 2 Details",
              personTwo,
              setPersonTwo,
              personTwoDob,
              setPersonTwoDob,
              personTwoTime,
              setPersonTwoTime,
              personTwoPlace,
              setPersonTwoPlace,
              "person-outline",
            )}

            <TouchableOpacity
              style={styles.generateButton}
              activeOpacity={0.85}
              onPress={handleMatching}
            >
              <LinearGradient
                colors={["#F8D98C", "#E6AF4C"]}
                style={styles.generateGradient}
              >
                <Ionicons name="heart" size={19} color="#211632" />

                <Text style={styles.generateButtonText}>
                  Check Compatibility
                </Text>

                <Ionicons name="arrow-forward" size={19} color="#211632" />
              </LinearGradient>
            </TouchableOpacity>

            {matchingSubmitted && (
              <View style={styles.resultCard}>
                <View style={styles.resultHeader}>
                  <Ionicons name="checkmark-circle" size={24} color="#F5C76B" />
                  <Text style={styles.resultTitle}>
                    Birth Profiles Submitted
                  </Text>
                </View>

                <Text style={styles.resultText}>Person 1: {personOne}</Text>

                <Text style={styles.resultText}>Person 2: {personTwo}</Text>

                <Text style={styles.resultNote}>
                  Both profiles are ready for compatibility analysis. Guna Milan
                  score and detailed matching results require an astrology
                  calculation service.
                </Text>
              </View>
            )}

            <View style={{ height: 20 }} />
          </>
        )}

        {/* REPORTS */}
        {activeTab === "reports" && (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Your Kundali Reports</Text>
              <Text style={styles.sectionSubtitle}>
                View and download your astrology reports
              </Text>
            </View>

            <LinearGradient
              colors={["#49316D", "#24183F"]}
              style={styles.reportBanner}
            >
              <Ionicons
                name="document-text-outline"
                size={42}
                color="#F5C76B"
              />

              <Text style={styles.reportBannerTitle}>Your Cosmic Report</Text>

              <Text style={styles.reportBannerDescription}>
                Explore your birth details and personalized astrology report in
                one place.
              </Text>
            </LinearGradient>

            <View style={styles.reportCard}>
              <View style={styles.reportCardHeader}>
                <View style={styles.reportIcon}>
                  <Ionicons name="planet-outline" size={27} color="#F5C76B" />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.reportTitle}>Birth Kundali Report</Text>
                  <Text style={styles.reportSubtitle}>
                    Your personal birth chart
                  </Text>
                </View>

                <View
                  style={[
                    styles.statusBadge,
                    generated ? styles.completedBadge : styles.pendingBadge,
                  ]}
                >
                  <Text style={styles.statusText}>
                    {generated ? "Ready" : "Pending"}
                  </Text>
                </View>
              </View>

              <View style={styles.reportDivider} />

              {[
                "Birth Details",
                "Planetary Positions",
                "Ascendant Information",
                "Birth Chart Analysis",
                "Astrology Predictions",
              ].map((item, index) => (
                <View key={index} style={styles.reportListItem}>
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={17}
                    color="#F5C76B"
                  />
                  <Text style={styles.reportListText}>{item}</Text>
                </View>
              ))}

              <TouchableOpacity
                style={styles.downloadButton}
                onPress={handleDownload}
                activeOpacity={0.85}
              >
                <Ionicons name="download-outline" size={19} color="#211632" />
                <Text style={styles.downloadButtonText}>
                  Download PDF Report
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.viewReportButton}
                onPress={() => {
                  if (!generated) {
                    Alert.alert(
                      "No Report Yet",
                      "Generate your Kundali first to prepare a report.",
                    );
                    setActiveTab("kundali");
                  } else {
                    Alert.alert(
                      "Report Preview",
                      "Your birth details have been submitted. The detailed report viewer will be connected later.",
                    );
                  }
                }}
              >
                <Text style={styles.viewReportText}>View Report</Text>
                <Ionicons name="arrow-forward" size={16} color="#F5C76B" />
              </TouchableOpacity>
            </View>

            <View style={styles.reportNote}>
              <Ionicons
                name="information-circle-outline"
                size={19}
                color="#F5C76B"
              />
              <Text style={styles.reportNoteText}>
                PDF generation and actual astrological calculations will be
                integrated in a later development step.
              </Text>
            </View>
          </>
        )}

        {/* Footer */}
        <View style={styles.footerNote}>
          <Ionicons name="shield-checkmark-outline" size={17} color="#F5C76B" />

          <Text style={styles.footerText}>
            Your birth details are used for your Kundali.
          </Text>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default KundaliScreen;

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

  headerIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: "#28203F",
    justifyContent: "center",
    alignItems: "center",
  },

  banner: {
    marginHorizontal: 20,
    marginTop: 25,
    padding: 20,
    borderRadius: 20,
    minHeight: 145,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#59417C",
  },

  bannerSmall: {
    color: "#F5C76B",
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 12,
  },

  bannerDescription: {
    color: "#C8BEDB",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 7,
    maxWidth: 230,
  },

  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 25,
    padding: 5,
    backgroundColor: "#211A38",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#392B54",
  },

  tabButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    gap: 5,
  },

  activeTab: {
    backgroundColor: "#F5C76B",
  },

  tabText: {
    color: "#A59ABF",
    fontSize: 10,
    fontWeight: "600",
  },

  activeTabText: {
    color: "#211632",
    fontWeight: "bold",
  },

  sectionHeader: {
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 18,
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

  inputGroup: {
    marginHorizontal: 20,
    marginBottom: 18,
  },

  inputLabel: {
    color: "#E8DFF5",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 9,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#211A38",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#392B54",
    paddingHorizontal: 15,
    height: 55,
    gap: 12,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 13,
  },

  genderRow: {
    flexDirection: "row",
    gap: 10,
  },

  genderButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#211A38",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#392B54",
  },

  selectedGender: {
    backgroundColor: "#44305F",
    borderColor: "#F5C76B",
  },

  genderText: {
    color: "#A59ABF",
    fontSize: 12,
    fontWeight: "600",
  },

  selectedGenderText: {
    color: "#F5C76B",
  },

  generateButton: {
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 14,
    overflow: "hidden",
  },

  generateGradient: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  generateButtonText: {
    color: "#211632",
    fontSize: 13,
    fontWeight: "bold",
  },

  resultCard: {
    marginHorizontal: 20,
    marginTop: 25,
    padding: 18,
    backgroundColor: "#211A38",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F5C76B",
  },

  resultHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 15,
  },

  resultTitle: {
    color: "#F5C76B",
    fontSize: 16,
    fontWeight: "bold",
  },

  resultText: {
    color: "#FFFFFF",
    fontSize: 13,
    marginBottom: 9,
  },

  resultNote: {
    color: "#A59ABF",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 8,
  },

  secondaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#F5C76B",
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 17,
    gap: 8,
  },

  secondaryButtonText: {
    color: "#F5C76B",
    fontSize: 12,
    fontWeight: "bold",
  },

  matchingInfo: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "#30204E",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderColor: "#59417C",
  },

  matchingInfoTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  matchingInfoText: {
    color: "#C8BEDB",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },

  partnerCard: {
    marginHorizontal: 20,
    marginTop: 20,
    paddingTop: 17,
    backgroundColor: "#17122D",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#49365F",
  },

  partnerHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 18,
    gap: 10,
  },

  partnerIcon: {
    width: 42,
    height: 42,
    backgroundColor: "#35264D",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  partnerTitle: {
    color: "#F5C76B",
    fontSize: 15,
    fontWeight: "bold",
  },

  matchSymbol: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
    gap: 6,
  },

  matchSymbolText: {
    color: "#A59ABF",
    fontSize: 9,
    letterSpacing: 2,
    fontWeight: "bold",
  },

  reportBanner: {
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#59417C",
  },

  reportBannerTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 12,
  },

  reportBannerDescription: {
    color: "#C8BEDB",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 19,
    marginTop: 8,
  },

  reportCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#211A38",
    borderRadius: 17,
    padding: 17,
    borderWidth: 1,
    borderColor: "#49365F",
  },

  reportCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },

  reportIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#35264D",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  reportTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
  },

  reportSubtitle: {
    color: "#A59ABF",
    fontSize: 10,
    marginTop: 5,
  },

  statusBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
  },

  completedBadge: {
    backgroundColor: "#31543E",
  },

  pendingBadge: {
    backgroundColor: "#49365F",
  },

  statusText: {
    color: "#F5C76B",
    fontSize: 9,
    fontWeight: "bold",
  },

  reportDivider: {
    height: 1,
    backgroundColor: "#49365F",
    marginVertical: 17,
  },

  reportListItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    marginBottom: 13,
  },

  reportListText: {
    color: "#D2C9E1",
    fontSize: 12,
  },

  downloadButton: {
    backgroundColor: "#F5C76B",
    paddingVertical: 14,
    borderRadius: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
    marginTop: 8,
  },

  downloadButtonText: {
    color: "#211632",
    fontSize: 12,
    fontWeight: "bold",
  },

  viewReportButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
  },

  viewReportText: {
    color: "#F5C76B",
    fontSize: 12,
    fontWeight: "600",
  },

  reportNote: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 18,
    gap: 9,
    alignItems: "flex-start",
  },

  reportNoteText: {
    color: "#A59ABF",
    fontSize: 10,
    lineHeight: 17,
    flex: 1,
  },

  footerNote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    gap: 8,
  },

  footerText: {
    color: "#A59ABF",
    fontSize: 10,
  },
});
