import { createStackNavigator } from "@react-navigation/stack";
import Home from "../paginas/home";

const Stack = createStackNavigator()

export default function (){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="home"
                component={Home}
            />
        </Stack.Navigator>
    )
}