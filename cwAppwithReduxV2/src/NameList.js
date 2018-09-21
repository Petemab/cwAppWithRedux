

// will make axios request to backend and fetch list of names
import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as stuffActions from './actions/stuffActions';
import PropTypes from 'prop-types';



class NameList extends Component {

// Initially I have set state using hard coded dummy data here
  state = { people: [
  ]};
  //the top bar
  static get options() {
    return {
      topBar: {
        title: {
          text: 'People'
        }
      }
    };
  }

  // add axios request here to fetch the data from api when back end ready
  //tried calling my '/api/people' but it's not working
  componentDidMount(){
    return fetch('https://cwbackend.herokuapp.com/api/people/')
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          people: resJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }





  //I put each of the names in a buttom which triggered the Navigation.push
  // function to move to the detail screen

  renderList() {
    console.log('render', this.state);
    return this.state.people.map(person =>
      <View style={styles.viewStyle} key={ person.docID  }>
        <TouchableOpacity style={styles.listItemStyle}
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'NameShow',
                passProps: { person }
              }
            });
          }}>
          <Text style={styles.textStyle}>{ person.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }



  render(){
    console.log(this.state);
    return(
      <ScrollView >
        {this.renderList()}
      </ScrollView>
    );
  }



}

const styles = {
  viewStyle: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  listItemStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 350,
    margin: 3,
    height: 70,
    backgroundColor: '#F8F0F2',
    borderRadius: 2
  },
  textStyle: {
    marginLeft: 20,
    fontSize: 25,
    color: '#000'
  }
};


export default NameList;
