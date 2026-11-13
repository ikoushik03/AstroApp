// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }

// import React, { useState, useCallback } from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
// import SplashScreen from "./src/screens/Splash/SplashScreen";

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleSplashFinish = useCallback(() => {
//     setIsLoading(false);
//   }, []);

//   if (isLoading) {
//     return <SplashScreen onFinish={handleSplashFinish} />;
//   }

//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }

// import React, { useState, useCallback } from "react";
// import { NavigationContainer } from "@react-navigation/native";

// import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
// import SplashScreen from "./src/screens/Splash/SplashScreen";
// import LoginScreen from "./src/screens/Login/LoginScreen";

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSplashFinish = useCallback(() => {
//     setIsLoading(false);
//   }, []);

//   const handleLogin = useCallback(() => {
//     setIsLoggedIn(true);
//   }, []);

//   if (isLoading) {
//     return <SplashScreen onFinish={handleSplashFinish} />;
//   }

//   if (!isLoggedIn) {
//     return <LoginScreen onLogin={handleLogin} />;
//   }

//   return (
//     <NavigationContainer>
//       <BottomTabNavigator />
//     </NavigationContainer>
//   );
// }

import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import SplashScreen from "./src/screens/Splash/SplashScreen";
import LoginScreen from "./src/screens/Login/LoginScreen";
import SignupScreen from "./src/screens/Signup/SignupScreen";

type AuthScreen = "login" | "signup";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authScreen, setAuthScreen] = useState<AuthScreen>("login");

  const handleSplashFinish = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const handleSignup = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  if (isLoading) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  if (!isLoggedIn) {
    if (authScreen === "signup") {
      return (
        <SignupScreen
          onSignup={handleSignup}
          onLoginPress={() => setAuthScreen("login")}
        />
      );
    }

    return (
      <LoginScreen
        onLogin={handleLogin}
        onSignupPress={() => setAuthScreen("signup")}
      />
    );
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
