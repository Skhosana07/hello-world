import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ResturantsScreen } from "./src/features/screens/resturant.screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="auto" />
      <ResturantsScreen />
    </SafeAreaProvider>
  );
}
