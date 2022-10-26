import * as React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';


export default class App extends React.Component{
  goToTemaScreen =()=>{
    this.props.navigation.navigate('TemaScreen')
  }
  render(){
    return(
      <View>
      <View style={{alignItems:'center'}}>
      <View style={{backgroundColor:'lightgrey', height:40, width: 300, borderRadius:10, alignItems:'center', marginTop:50}}>
        <Text style={{padding:10}}>
        Última Ata
        </Text>
      </View>
        <Text style={{padding:20}}>
          Na ultima reuniao blabla bla foi muito legal porque sim é isso aí...
        </Text>
      </View>
        <View>
          <TouchableOpacity  
            style={{backgroundColor:'lightgrey',width:100,padding:4,alignItems:'center',alignSelf:'center',marginTop:600}}
            onPress={()=>{
              this.goToTemaScreen('TemaScreen')
            }}
          >
            <Text style={{fontSize:15, alignItems:'center'}}>Temas e Provas</Text>
          </TouchableOpacity>
        </View>
      </View>


    )
  }
}
