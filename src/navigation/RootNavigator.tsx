import { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Overpass_700Bold,
  Overpass_300Light,
} from '@expo-google-fonts/overpass';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Auth from './auth/Auth';

SplashScreen.preventAutoHideAsync();

export default function RootNavigator() {
  const navigationRef = useNavigationContainerRef();
  const [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_300Light,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <Auth />
      </NavigationContainer>
    </View>
  );
}
