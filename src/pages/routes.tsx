//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Aluno from "./Aluno";
//Components
import Login from "./Login";
import Monitor from "./Monitor";

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          headerStyle: {
            backgroundColor: '#003B71',
          },
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Monitor"
        component={Monitor}
      />
      <Stack.Screen 
        name="Aluno"
        component={Aluno}
      />
    </Stack.Navigator>
  )
}

export default Routes