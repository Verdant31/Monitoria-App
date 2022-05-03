//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Aluno from "../pages/Aluno/Home";
//Components
import Login from "./Login";
import Home from "../pages/Monitor/Home";
import Perfil from "./Monitor/Perfil";
import Monitorias from "./Monitor/Monitorias";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MonitorHomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" 
      screenOptions={{
        tabBarStyle: {
          height: 90
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
        }}
      />
      <Tab.Screen name="Monitorias" component={Monitorias} 
        options={{
          tabBarIcon: () => <Ionicons name="newspaper" size={24} color="black" />
        }}
      />
      <Tab.Screen name="Perfil" component={Perfil} 
        options={{
          tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  )
}

const AlunoHomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" 
      screenOptions={{
        tabBarStyle: {
          height: 90
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
        }}
      />
      <Tab.Screen name="Monitorias" component={Monitorias} 
        options={{
          tabBarIcon: () => <Ionicons name="newspaper" size={24} color="black" />
        }}
      />
      <Tab.Screen name="Perfil" component={Perfil} 
        options={{
          tabBarIcon: () => <Ionicons name="settings" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  )
}

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} 
        options={{
          headerStyle: {
            backgroundColor: '#003B71',
          },
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen name="Monitor" component={MonitorHomeTabs}
        options={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen name="Aluno"component={AlunoHomeTabs}
        options={{
          headerShadowVisible: false,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default Routes