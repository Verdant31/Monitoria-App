//React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Components
import Login from "./Login";

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
    </Stack.Navigator>
  )
}

export default Routes