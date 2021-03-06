//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//Components
import Login from "./Login";
//Monitor pages
import MonitorHome from "./Monitor/Home";
import MonitorPerfil from "./Monitor/Perfil";
import Monitorias from "./Monitor/Monitorias";
import MonitoriaInfo from "./Aluno/Home/MonitoriaInfo";
//Student pages
import AlunoHome from "./Aluno/Home";
import AlunoPerfil from "./Aluno/Perfil";
import CriarSolicitacao from "./Aluno/CriarSolicitacao";
import Agenda from "./Monitor/Agenda";
import AgendarHorario from "./Aluno/Home/AgendarHorario";
import DetalhesMonitoria from "./Monitor/Monitorias/DetalhesMonitoria";
import Solicitacao from "./Monitor/Home/Solicitacao";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MonitorHomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" 
      screenOptions={{
        tabBarStyle: {
          height: 90,
          backgroundColor: '#003B71',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          color: 'white'
        },
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Tab.Screen name="Monitorias" component={Monitorias} 
        options={{
          tabBarIcon: () => <Ionicons name="newspaper" size={24} color="white" />
        }}
      />
      <Tab.Screen name="Home" component={MonitorHome} 
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="white" />
        }}
      />
      <Tab.Screen name="Perfil" component={MonitorPerfil} 
        options={{
          tabBarIcon: () => <Ionicons name="settings" size={24} color="white" />
        }}
      />
      <Tab.Screen name="Agenda" component={Agenda} 
        options={{
          tabBarIcon: () => <Ionicons name="calendar" size={24} color="white" />
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
          height: 90,
          backgroundColor: '#003B71',
          borderTopWidth: 0,
          paddingTop: 5
        },
        tabBarLabelStyle: {
          fontSize: 16,
          color: 'white'
        }, 
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Tab.Screen name="Solicita????o" component={CriarSolicitacao} 
        options={{
          tabBarIcon: () => <Ionicons name="add-circle"  size={28} color="white" />
        }}
      />
      <Tab.Screen name="Home" component={AlunoHome} 
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="white" />
        }}
      />
      <Tab.Screen name="Perfil" component={AlunoPerfil} 
        options={{
          tabBarIcon: () => <Ionicons name="settings" size={24} color="white" />
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
      <Stack.Screen name="Solicitation" component={Solicitacao}
        options={{
          headerTitleStyle: {
            color: '#f2f2f2'
          },
          headerTitle: 'Solicita????o',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#003B71',
          },
        }}
      />
       <Stack.Screen name="Monitoria" component={MonitoriaInfo}
        options={{
          headerTitleStyle: {
            color: '#f2f2f2'
          },
          headerTitle: 'Monitoria',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#003B71',
          },
        }}
      />
      <Stack.Screen name="MonitoriaDetails" component={DetalhesMonitoria}
        options={{
          headerTitleStyle: {
            color: '#f2f2f2'
          },
          headerTitle: 'Detalhes',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#003B71',
          },
        }}
      />
      <Stack.Screen name="AgendarHorario" component={AgendarHorario} 
        options={{
          headerTitleStyle: {
            color: '#f2f2f2'
          },
          headerTitle: 'Agendamento',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#003B71',
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default Routes