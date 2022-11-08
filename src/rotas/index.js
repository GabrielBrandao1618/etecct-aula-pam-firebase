import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cadastrar from '../paginas/cadastro'
import StackRoutes from './stackRoutes'

const Tab = createBottomTabNavigator();

export default function Rotas (){

    return(

        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name = 'homeStack' component={StackRoutes} />
            <Tab.Screen name = 'cadastrar' component={Cadastrar} />
        </Tab.Navigator>

    );
}