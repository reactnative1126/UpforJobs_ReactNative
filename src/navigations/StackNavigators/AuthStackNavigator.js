import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Start, Select, SignUp, SignIn, Verify, Step1, Step2, Linkedin, Forgot, Success, Verify1, Password} from '@screens';
import { navOptionHandler } from '@utils/functions';

const StackAuth = createStackNavigator();
export default function AuthStack() {
  return (
    <StackAuth.Navigator initialRouteName="Splash">
      <StackAuth.Screen name="Splash" component={Splash} options={navOptionHandler} />
      <StackAuth.Screen name="Start" component={Start} options={navOptionHandler} />
      <StackAuth.Screen name="Select" component={Select} options={navOptionHandler} />
      <StackAuth.Screen name="SignUp" component={SignUp} options={navOptionHandler} />
      <StackAuth.Screen name="SignIn" component={SignIn} options={navOptionHandler} />
      <StackAuth.Screen name="Verify" component={Verify} options={navOptionHandler} />
      <StackAuth.Screen name="Step1" component={Step1} options={navOptionHandler} />
      <StackAuth.Screen name="Step2" component={Step2} options={navOptionHandler} />
      <StackAuth.Screen name="Linkedin" component={Linkedin} options={navOptionHandler} />
      <StackAuth.Screen name="Forgot" component={Forgot} options={navOptionHandler} />
      <StackAuth.Screen name="Verify1" component={Verify1} options={navOptionHandler} />
      <StackAuth.Screen name="Password" component={Password} options={navOptionHandler} />

      <StackAuth.Screen name="Success" component={Success} options={navOptionHandler} />
    </StackAuth.Navigator>
  )
}