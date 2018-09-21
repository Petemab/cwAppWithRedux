import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import reducers from './reducers';

const store = configureStore();



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

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>A Full Stack Project for CW by Pete Bennett</Text>
          <Text>Using React Native, Node.js, Express and Firebase</Text>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => {
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'NameList'
                }
              });
            }}
          >
            <Text style={styles.buttonTextStyle}>Tap Here To start</Text>
          </TouchableOpacity>

        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    height: 45,
    backgroundColor: '#007aff',
    borderRadius: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
