import * as React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';


export default class App extends React.Component{
  goToAtaScreen =()=>{
    this.props.navigation.navigate('AtaScreen')
  }
  render(){
    return(
      <View>
      <View style={{alignItems:'center'}}>
      <View style={{backgroundColor:'lightgrey', height:40, width: 300, borderRadius:10, alignItems:'center', marginTop:50}}>
        <Text style={{padding:10}}>
        Temas e Provas
        </Text>
      </View>
        <Text style={{padding:20}}>
          Temas:inglês pags 39 a 59,português pags 7 a 20, Provas: Matemática:30/02
        </Text>
      </View>
        <View>
          <TouchableOpacity  
            style={{backgroundColor:'lightgrey',width:100,padding:4,alignItems:'center',alignSelf:'center',marginTop:600,height:50}}
            onPress={()=>{
              this.goToAtaScreen('AtaScreen')
            }}
          >
            <Text style={{fontSize:15, alignItems:'center'}}>Última Ata</Text>
          </TouchableOpacity>
        </View>
      </View>


    )
  }
}
