import { registerRootComponent } from 'expo';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from './config/gluestack-ui.config';


import Login from '@/pages/Login';
import Home from '@/pages/Home';
import { ROUTE_SCREEN } from '@/const/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync(Entypo.font);
      } catch(e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [])
  if (!appIsReady) {
    return null;
  }
  SplashScreen.hideAsync();
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ROUTE_SCREEN.LOGIN}>
          <Stack.Screen name={ROUTE_SCREEN.LOGIN} component={Login} options={{ headerShown: false }} />
          <Stack.Screen name={ROUTE_SCREEN.HOME} component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

registerRootComponent(App);
