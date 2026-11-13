// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// type LoginScreenProps = {
//   onLogin: () => void;
//   onSignupPress: () => void;
// };

// // export default function LoginScreen({ onLogin }: LoginScreenProps) {

// export default function LoginScreen({
//   onLogin,
//   onSignupPress,
// }: LoginScreenProps) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {
//     if (!email.trim() || !password.trim()) {
//       Alert.alert("Missing Details", "Please enter your email and password.");
//       return;
//     }

//     if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
//       Alert.alert("Invalid Email", "Please enter a valid email address.");
//       return;
//     }

//     // Demo login only. Real authentication will be added later.
//     onLogin();
//   };

//   return (
//     <LinearGradient
//       colors={["#100D25", "#21143D", "#100D25"]}
//       style={styles.container}
//     >
//       <StatusBar barStyle="light-content" />

//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : undefined}
//       >
//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           keyboardShouldPersistTaps="handled"
//           showsVerticalScrollIndicator={false}
//         >
//           <View style={styles.logoContainer}>
//             <View style={styles.logoCircle}>
//               <Ionicons name="planet-outline" size={55} color="#F5C76B" />
//             </View>

//             <Text style={styles.logoText}>AstroGuide</Text>
//             <Text style={styles.tagline}>Discover Your Cosmic Path</Text>
//           </View>

//           <View style={styles.formContainer}>
//             <Text style={styles.heading}>Welcome Back!</Text>
//             <Text style={styles.subHeading}>
//               Sign in to continue your cosmic journey.
//             </Text>

//             <Text style={styles.label}>Email Address</Text>

//             <View style={styles.inputContainer}>
//               <Ionicons name="mail-outline" size={21} color="#A59ABF" />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter your email"
//                 placeholderTextColor="#827895"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//               />
//             </View>

//             <Text style={styles.label}>Password</Text>

//             <View style={styles.inputContainer}>
//               <Ionicons name="lock-closed-outline" size={21} color="#A59ABF" />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter your password"
//                 placeholderTextColor="#827895"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword}
//                 autoCapitalize="none"
//               />

//               <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//                 <Ionicons
//                   name={showPassword ? "eye-off-outline" : "eye-outline"}
//                   size={21}
//                   color="#A59ABF"
//                 />
//               </TouchableOpacity>
//             </View>

//             <TouchableOpacity
//               style={styles.forgotContainer}
//               onPress={() =>
//                 Alert.alert(
//                   "Forgot Password",
//                   "Password recovery will be added later.",
//                 )
//               }
//             >
//               <Text style={styles.forgotText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={handleLogin} activeOpacity={0.85}>
//               <LinearGradient
//                 colors={["#F5C76B", "#D99B3D"]}
//                 style={styles.loginButton}
//               >
//                 <Text style={styles.loginButtonText}>Login</Text>
//                 <Ionicons name="arrow-forward" size={20} color="#21143D" />
//               </LinearGradient>
//             </TouchableOpacity>

//             <View style={styles.signupContainer}>
//               <Text style={styles.signupText}>Don't have an account? </Text>
//               {/* <TouchableOpacity
//                 onPress={() =>
//                   Alert.alert(
//                     "Sign Up",
//                     "We will build the Sign Up screen next.",
//                   )
//                 }
//               >
//                 <Text style={styles.signupLink}>Sign Up</Text>
//               </TouchableOpacity> */}

//               <TouchableOpacity onPress={onSignupPress}>
//                 <Text style={styles.signupLink}>Sign Up</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <Text style={styles.footer}>✦ ALIGN WITH THE UNIVERSE ✦</Text>
//         </ScrollView>
//       </KeyboardAvoidingView>
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
//     marginBottom: 38,
//   },
//   logoCircle: {
//     width: 105,
//     height: 105,
//     borderRadius: 53,
//     borderWidth: 1.5,
//     borderColor: "#F5C76B",
//     backgroundColor: "rgba(245,199,107,0.08)",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 15,
//   },
//   logoText: {
//     fontSize: 31,
//     fontWeight: "bold",
//     color: "#F5C76B",
//     letterSpacing: 2,
//   },
//   tagline: {
//     fontSize: 13,
//     color: "#C5B9D9",
//     marginTop: 7,
//   },
//   formContainer: {
//     backgroundColor: "rgba(40, 29, 65, 0.75)",
//     borderRadius: 22,
//     borderWidth: 1,
//     borderColor: "#49375F",
//     padding: 23,
//   },
//   heading: {
//     color: "#FFFFFF",
//     fontSize: 26,
//     fontWeight: "bold",
//   },
//   subHeading: {
//     color: "#B9ADC9",
//     fontSize: 13,
//     marginTop: 8,
//     marginBottom: 25,
//   },
//   label: {
//     color: "#E8DFF4",
//     fontSize: 14,
//     fontWeight: "600",
//     marginBottom: 9,
//     marginTop: 15,
//   },
//   inputContainer: {
//     height: 54,
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
//   forgotContainer: {
//     alignItems: "flex-end",
//     marginTop: 15,
//     marginBottom: 22,
//   },
//   forgotText: {
//     color: "#F5C76B",
//     fontSize: 13,
//     fontWeight: "600",
//   },
//   loginButton: {
//     height: 54,
//     borderRadius: 13,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 10,
//   },
//   loginButtonText: {
//     color: "#21143D",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   signupContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 25,
//   },
//   signupText: {
//     color: "#B9ADC9",
//     fontSize: 13,
//   },
//   signupLink: {
//     color: "#F5C76B",
//     fontSize: 13,
//     fontWeight: "bold",
//   },
//   footer: {
//     textAlign: "center",
//     color: "#9385AC",
//     fontSize: 10,
//     letterSpacing: 2,
//     marginTop: 30,
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
  KeyboardAvoidingView,
  Platform,
  Alert,
  Modal,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type LoginScreenProps = {
  onLogin: () => void;
  onSignupPress: () => void;
};

export default function LoginScreen({
  onLogin,
  onSignupPress,
}: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [recoveryVisible, setRecoveryVisible] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");

  // Email and password validation
  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing Details", "Please enter your email and password.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 6 characters.",
      );
      return;
    }

    // Demo login. Real authentication will be integrated later.
    onLogin();
  };

  // Google login
  const handleGoogleLogin = () => {
    Alert.alert(
      "Google Login",
      "Google authentication will be connected in the next integration step.",
    );
  };

  // Password recovery
  const handlePasswordRecovery = () => {
    if (!recoveryEmail.trim()) {
      Alert.alert("Missing Email", "Please enter your registered email.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(recoveryEmail.trim())) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    Alert.alert(
      "Password Recovery",
      "Your email is valid. Password reset email delivery will be connected with authentication.",
    );

    setRecoveryVisible(false);
    setRecoveryEmail("");
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
              <Ionicons name="planet-outline" size={55} color="#F5C76B" />
            </View>

            <Text style={styles.logoText}>AstroGuide</Text>
            <Text style={styles.tagline}>Discover Your Cosmic Path</Text>
          </View>

          {/* Login Form */}
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Welcome Back!</Text>

            <Text style={styles.subHeading}>
              Sign in to continue your cosmic journey.
            </Text>

            {/* Email */}
            <Text style={styles.label}>Email Address</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={21} color="#A59ABF" />

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

            {/* Password */}
            <Text style={styles.label}>Password</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={21} color="#A59ABF" />

              <TextInput
                style={styles.input}
                placeholder="Enter your password"
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

            {/* Forgot Password */}
            <TouchableOpacity
              style={styles.forgotContainer}
              onPress={() => {
                setRecoveryEmail(email);
                setRecoveryVisible(true);
              }}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity onPress={handleLogin} activeOpacity={0.85}>
              <LinearGradient
                colors={["#F5C76B", "#D99B3D"]}
                style={styles.loginButton}
              >
                <Text style={styles.loginButtonText}>Login</Text>

                <Ionicons name="arrow-forward" size={20} color="#21143D" />
              </LinearGradient>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.divider} />
            </View>

            {/* Google Login */}
            <TouchableOpacity
              style={styles.googleButton}
              onPress={handleGoogleLogin}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-google" size={21} color="#FFFFFF" />

              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            {/* Signup */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>

              <TouchableOpacity onPress={onSignupPress}>
                <Text style={styles.signupLink}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.footer}>✦ ALIGN WITH THE UNIVERSE ✦</Text>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Password Recovery Modal */}
      <Modal
        visible={recoveryVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setRecoveryVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setRecoveryVisible(false)}
            >
              <Ionicons name="close" size={23} color="#FFFFFF" />
            </TouchableOpacity>

            <Ionicons name="lock-open-outline" size={40} color="#F5C76B" />

            <Text style={styles.modalTitle}>Forgot Password?</Text>

            <Text style={styles.modalDescription}>
              Enter your registered email address to request a password reset.
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#A59ABF" />

              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#827895"
                value={recoveryEmail}
                onChangeText={setRecoveryEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity
              style={styles.recoveryButton}
              onPress={handlePasswordRecovery}
            >
              <Text style={styles.recoveryButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    paddingVertical: 35,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 38,
  },

  logoCircle: {
    width: 105,
    height: 105,
    borderRadius: 53,
    borderWidth: 1.5,
    borderColor: "#F5C76B",
    backgroundColor: "rgba(245,199,107,0.08)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  logoText: {
    fontSize: 31,
    fontWeight: "bold",
    color: "#F5C76B",
    letterSpacing: 2,
  },

  tagline: {
    fontSize: 13,
    color: "#C5B9D9",
    marginTop: 7,
  },

  formContainer: {
    backgroundColor: "rgba(40,29,65,0.75)",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#49375F",
    padding: 23,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
  },

  subHeading: {
    color: "#B9ADC9",
    fontSize: 13,
    marginTop: 8,
    marginBottom: 25,
  },

  label: {
    color: "#E8DFF4",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 9,
    marginTop: 15,
  },

  inputContainer: {
    height: 54,
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

  forgotContainer: {
    alignItems: "flex-end",
    marginTop: 15,
    marginBottom: 22,
  },

  forgotText: {
    color: "#F5C76B",
    fontSize: 13,
    fontWeight: "600",
  },

  loginButton: {
    height: 54,
    borderRadius: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  loginButtonText: {
    color: "#21143D",
    fontSize: 16,
    fontWeight: "bold",
  },

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 22,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#59456F",
  },

  orText: {
    color: "#A59ABF",
    marginHorizontal: 15,
    fontSize: 12,
  },

  googleButton: {
    height: 54,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#59456F",
    backgroundColor: "#19132E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  googleButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  signupText: {
    color: "#B9ADC9",
    fontSize: 13,
  },

  signupLink: {
    color: "#F5C76B",
    fontSize: 13,
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    color: "#9385AC",
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 30,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  modalContainer: {
    width: "100%",
    backgroundColor: "#21143D",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#59456F",
    padding: 25,
    alignItems: "center",
  },

  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },

  modalTitle: {
    color: "#F5C76B",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 15,
  },

  modalDescription: {
    color: "#C5B9D9",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 21,
    marginVertical: 18,
  },

  recoveryButton: {
    backgroundColor: "#F5C76B",
    height: 52,
    borderRadius: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  recoveryButtonText: {
    color: "#21143D",
    fontSize: 15,
    fontWeight: "bold",
  },
});
