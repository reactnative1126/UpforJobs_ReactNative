import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { 
//   Screens
// } from '@screens';
import AuthStack from './StackNavigators/AuthStackNavigator';
import { navOptionHandler } from '@utils/functions';

const StackApp = createStackNavigator();
class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <StackApp.Navigator initialRouteName={"Auth"}>
          <StackApp.Screen name="Auth" component={AuthStack} options={navOptionHandler} />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}
export default AppContainer;
