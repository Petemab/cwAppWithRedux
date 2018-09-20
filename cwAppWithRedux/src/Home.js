import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Navigation} from 'react-native-navigation';



// A fairly basic Home Screen. A tap on the button will Naviagte to the listview

class Home extends Component{

  // state = { people: [] };

  static get options() {
    // This allowed me to put a top bar on the screen
    return {
      topBar: {
        title: {
          text: 'Home'
        }
      }
    };
  }


  render(){
    return(
      <View>
        <Text>Home</Text>
      </View>
    );
  }

}

export default Home;
