// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// type SignupScreenProps = {
//   onSignup: () => void;
//   onLoginPress: () => void;
// };

// export default function SignupScreen({
//   onSignup,
//   onLoginPress,
// }: SignupScreenProps) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSignup = () => {
//     if (!name.trim() || !email.trim() || !password.trim()) {
//       Alert.alert("Missing Details", "Please fill in all fields.");
//       return;
//     }

//     if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
//       Alert.alert("Invalid Email", "Please enter a valid email.");
//       return;
//     }

//     if (password.length < 6) {
//       Alert.alert(
//         "Weak Password",
//         "Password must contain at least 6 characters.",
//       );
//       return;
//     }

//     // Demo signup only. Real account creation will be integrated later.
//     onSignup();
//   };

//   return (
//     <LinearGradient
//       colors={["#100D25", "#21143D", "#100D25"]}
//       style={styles.container}
//     >
//       <StatusBar barStyle="light-content" />

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.logoContainer}>
//           <View style={styles.logoCircle}>
//             <Ionicons name="planet-outline" size={48} color="#F5C76B" />
//           </View>

//           <Text style={styles.logoText}>AstroGuide</Text>
//           <Text style={styles.tagline}>Begin Your Cosmic Journey</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.heading}>Create Account</Text>
//           <Text style={styles.subHeading}>
//             Join us and discover what the stars have for you.
//           </Text>

//           <Text style={styles.label}>Full Name</Text>
//           <View style={styles.inputContainer}>
//             <Ionicons name="person-outline" size={20} color="#A59ABF" />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your full name"
//               placeholderTextColor="#827895"
//               value={name}
//               onChangeText={setName}
//             />
//           </View>

//           <Text style={styles.label}>Email Address</Text>
//           <View style={styles.inputContainer}>
//             <Ionicons name="mail-outline" size={20} color="#A59ABF" />
//             <TextInput
//               style={styles.input}
//               placeholder="Enter your email"
//               placeholderTextColor="#827895"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoCorrect={false}
//             />
//           </View>

//           <Text style={styles.label}>Password</Text>
//           <View style={styles.inputContainer}>
//             <Ionicons name="lock-closed-outline" size={20} color="#A59ABF" />
//             <TextInput
//               style={styles.input}
//               placeholder="Create a password"
//               placeholderTextColor="#827895"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry={!showPassword}
//               autoCapitalize="none"
//             />

//             <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//               <Ionicons
//                 name={showPassword ? "eye-off-outline" : "eye-outline"}
//                 size={21}
//                 color="#A59ABF"
//               />
//             </TouchableOpacity>
//           </View>

//           <TouchableOpacity onPress={handleSignup} activeOpacity={0.85}>
//             <LinearGradient
//               colors={["#F5C76B", "#D99B3D"]}
//               style={styles.signupButton}
//             >
//               <Text style={styles.signupButtonText}>Create Account</Text>
//               <Ionicons name="arrow-forward" size={20} color="#21143D" />
//             </LinearGradient>
//           </TouchableOpacity>

//           <View style={styles.loginContainer}>
//             <Text style={styles.loginText}>Already have an account? </Text>
//             <TouchableOpacity onPress={onLoginPress}>
//               <Text style={styles.loginLink}>Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <Text style={styles.footer}>✦ ALIGN WITH THE UNIVERSE ✦</Text>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: "center",
//     paddingHorizontal: 25,
//     paddingVertical: 35,
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginBottom: 30,
//   },
//   logoCircle: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     borderWidth: 1.5,
//     borderColor: "#F5C76B",
//     backgroundColor: "rgba(245,199,107,0.08)",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   logoText: {
//     fontSize: 29,
//     fontWeight: "bold",
//     color: "#F5C76B",
//     letterSpacing: 2,
//   },
//   tagline: {
//     color: "#C5B9D9",
//     fontSize: 13,
//     marginTop: 7,
//   },
//   formContainer: {
//     backgroundColor: "rgba(40,29,65,0.75)",
//     borderRadius: 22,
//     borderWidth: 1,
//     borderColor: "#49375F",
//     padding: 22,
//   },
//   heading: {
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   subHeading: {
//     color: "#B9ADC9",
//     fontSize: 13,
//     marginTop: 8,
//     marginBottom: 15,
//   },
//   label: {
//     color: "#E8DFF4",
//     fontSize: 14,
//     fontWeight: "600",
//     marginTop: 15,
//     marginBottom: 9,
//   },
//   inputContainer: {
//     height: 53,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: "#59456F",
//     backgroundColor: "#19132E",
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 14,
//   },
//   input: {
//     flex: 1,
//     color: "#FFFFFF",
//     fontSize: 14,
//     marginLeft: 11,
//   },
//   signupButton: {
//     height: 54,
//     borderRadius: 13,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//     marginTop: 28,
//   },
//   signupButtonText: {
//     color: "#21143D",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   loginContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 23,
//   },
//   loginText: {
//     color: "#B9ADC9",
//     fontSize: 13,
//   },
//   loginLink: {
//     color: "#F5C76B",
//     fontWeight: "bold",
//     fontSize: 13,
//   },
//   footer: {
//     color: "#9385AC",
//     fontSize: 10,
//     textAlign: "center",
//     letterSpacing: 2,
//     marginTop: 27,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type SignupScreenProps = {
  onSignup: () => void;
  onLoginPress: () => void;
};

export default function SignupScreen({
  onSignup,
  onLoginPress,
}: SignupScreenProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignup = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert("Missing Details", "Please fill in all fields.");
      return;
    }

    if (!emailPattern.test(email.trim())) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (!phonePattern.test(phone.trim())) {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit Indian mobile number.",
      );
      return;
    }

    if (password.length < 8) {
      Alert.alert(
        "Weak Password",
        "Password must contain at least 8 characters.",
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Your passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      Alert.alert(
        "Terms Required",
        "Please accept the Terms & Conditions to continue.",
      );
      return;
    }

    // Demo signup only. Real registration will be integrated later.
    onSignup();
  };

  return (
    <LinearGradient
      colors={["#100D25", "#21143D", "#100D25"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Ionicons name="planet-outline" size={48} color="#F5C76B" />
            </View>

            <Text style={styles.logoText}>AstroGuide</Text>
            <Text style={styles.tagline}>Begin Your Cosmic Journey</Text>
          </View>

          {/* Registration Form */}
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Create Account</Text>

            <Text style={styles.subHeading}>
              Join AstroGuide and discover your cosmic path.
            </Text>

            {/* Full Name */}
            <Text style={styles.label}>Full Name</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#A59ABF" />

              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#827895"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>

            {/* Email */}
            <Text style={styles.label}>Email Address</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#A59ABF" />

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#827895"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            {/* Phone */}
            <Text style={styles.label}>Phone Number</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color="#A59ABF" />

              <Text style={styles.countryCode}>+91</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter 10-digit mobile number"
                placeholderTextColor="#827895"
                value={phone}
                onChangeText={(value) =>
                  setPhone(value.replace(/\D/g, "").slice(0, 10))
                }
                keyboardType="phone-pad"
                maxLength={10}
              />
            </View>

            {/* Password */}
            <Text style={styles.label}>Password</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#A59ABF" />

              <TextInput
                style={styles.input}
                placeholder="Create a password"
                placeholderTextColor="#827895"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />

              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={21}
                  color="#A59ABF"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <Text style={styles.label}>Confirm Password</Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="shield-checkmark-outline"
                size={20}
                color="#A59ABF"
              />

              <TextInput
                style={styles.input}
                placeholder="Re-enter your password"
                placeholderTextColor="#827895"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />

              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                  size={21}
                  color="#A59ABF"
                />
              </TouchableOpacity>
            </View>

            {/* Terms and Conditions */}
            <TouchableOpacity
              style={styles.termsContainer}
              onPress={() => setAcceptedTerms(!acceptedTerms)}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.checkbox,
                  acceptedTerms && styles.checkboxSelected,
                ]}
              >
                {acceptedTerms && (
                  <Ionicons name="checkmark" size={16} color="#21143D" />
                )}
              </View>

              <Text style={styles.termsText}>
                I agree to the{" "}
                <Text
                  style={styles.termsLink}
                  onPress={() =>
                    Alert.alert(
                      "Terms & Conditions",
                      "The full Terms & Conditions will be added here.",
                    )
                  }
                >
                  Terms & Conditions
                </Text>{" "}
                and{" "}
                <Text
                  style={styles.termsLink}
                  onPress={() =>
                    Alert.alert(
                      "Privacy Policy",
                      "The full Privacy Policy will be added here.",
                    )
                  }
                >
                  Privacy Policy
                </Text>
              </Text>
            </TouchableOpacity>

            {/* Signup Button */}
            <TouchableOpacity onPress={handleSignup} activeOpacity={0.85}>
              <LinearGradient
                colors={["#F5C76B", "#D99B3D"]}
                style={styles.signupButton}
              >
                <Text style={styles.signupButtonText}>Create Account</Text>

                <Ionicons name="arrow-forward" size={20} color="#21143D" />
              </LinearGradient>
            </TouchableOpacity>

            {/* Login Navigation */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account?</Text>

              <TouchableOpacity onPress={onLoginPress}>
                <Text style={styles.loginLink}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.footer}>✦ ALIGN WITH THE UNIVERSE ✦</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 25,
  },
  logoCircle: {
    width: 85,
    height: 85,
    borderRadius: 43,
    borderWidth: 1.5,
    borderColor: "#F5C76B",
    backgroundColor: "rgba(245,199,107,0.08)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  logoText: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#F5C76B",
    letterSpacing: 2,
  },
  tagline: {
    color: "#C5B9D9",
    fontSize: 13,
    marginTop: 7,
  },
  formContainer: {
    backgroundColor: "rgba(40,29,65,0.75)",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#49375F",
    padding: 22,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subHeading: {
    color: "#B9ADC9",
    fontSize: 13,
    marginTop: 8,
    marginBottom: 12,
  },
  label: {
    color: "#E8DFF4",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 9,
  },
  inputContainer: {
    height: 53,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#59456F",
    backgroundColor: "#19132E",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    marginLeft: 11,
  },
  countryCode: {
    color: "#F5C76B",
    fontSize: 14,
    marginLeft: 10,
    fontWeight: "600",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 22,
  },
  checkbox: {
    width: 21,
    height: 21,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#F5C76B",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#F5C76B",
  },
  termsText: {
    flex: 1,
    color: "#B9ADC9",
    fontSize: 12,
    lineHeight: 19,
  },
  termsLink: {
    color: "#F5C76B",
    fontWeight: "bold",
  },
  signupButton: {
    height: 54,
    borderRadius: 13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 28,
  },
  signupButtonText: {
    color: "#21143D",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 23,
  },
  loginText: {
    color: "#B9ADC9",
    fontSize: 13,
  },
  loginLink: {
    color: "#F5C76B",
    fontWeight: "bold",
    fontSize: 13,
  },
  footer: {
    color: "#9385AC",
    fontSize: 10,
    textAlign: "center",
    letterSpacing: 2,
    marginTop: 25,
  },
});
