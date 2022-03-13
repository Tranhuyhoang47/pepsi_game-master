import React from "react";
import SignIn from '../screens/Sign_in';
import SignUp from '../screens/Sign_up';
import commit from "../screens/commit";
import OtpNotification from "./OTP/OtpNotification";

import {createStackNavigator} from '@react-navigation/stack';
import App from "../../../App";
import Home_Screens from "../screens/Home_screen";
import gamePlay from "../screens/gamePlay";
import Congratulation from "../screens/Congratulation";
const Stack = createStackNavigator();

export const AuthencationNavigator: React.FC = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Sign_up" component={SignUp}/>
            <Stack.Screen name="Sign_in" component={SignIn}/>
            <Stack.Screen name="Commit" component={commit}/>
            <Stack.Screen name="OtpNotification" component={OtpNotification}/>
            <Stack.Screen name="Home_Screens" component={Home_Screens}/>
            <Stack.Screen name="gamePlay" component={gamePlay}/>
            <Stack.Screen name="Congratulation" component={Congratulation}/>
        </Stack.Navigator>
    );
};