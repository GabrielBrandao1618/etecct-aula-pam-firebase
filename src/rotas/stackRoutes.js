import { createStackNavigator } from "@react-navigation/stack";
import Home from "../paginas/home";
import Cadastro from '../paginas/detalhes'

const Stack = createStackNavigator()

export default function (){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="home"
                component={Home}
            />
            <Stack.Screen 
                name="detalhes"
                component={Cadastro}
            />
        </Stack.Navigator>
    )
}