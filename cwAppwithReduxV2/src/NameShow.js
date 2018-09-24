
import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from './actions/peopleActions';
import PropTypes from 'prop-types';



class NameShow extends React.Component {

  // state={ loaded: false };

  static get options() {
    return {
      topBar: {
        title: {
          text: 'Detail View'
        }
      }
    };
  }

  componentWillMount(){
    // console.log(this.props);
    // return fetch(`https://cwbackend.herokuapp.com/api/people/${this.props.person.docID}`)
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     this.setState({
    //       name: resJson.personData.name,
    //       dob: resJson.personData.dob,
    //       image: resJson.personData.image,
    //       rating: resJson.personData.rating,
    //       loaded: true
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }


  render(){
    console.log('render props on show page', this.props);
    console.log('render state on show page', this.state);
    return(
      <View>
        <ActivityIndicator />
      </View>
    );

  }


}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameShow);
