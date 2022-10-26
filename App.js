import * as React from 'react';
import { View } from 'react-native';
import AtaScreen from './screen/AtaScreen'
import TemaScreen from './screen/TemaScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  AtaScreen:AtaScreen,
  TemaScreen:TemaScreen,
})

const AppContainer = createAppContainer(AppNavigator)
