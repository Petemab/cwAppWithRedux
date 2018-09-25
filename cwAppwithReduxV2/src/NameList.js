

// will make axios request to backend and fetch list of names
import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Navigation} from 'react-native-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from './actions/peopleActions';
import PropTypes from 'prop-types';


class NameList extends Component {

  static get options() {
    return {
      topBar: {
        title: {
          text: 'People'
        }
      }
    };
  }

  // Calls the action passed through on props tomake api call
  componentDidMount(){
    this.props.peopleActions.fetchNames();

  }

  //I put each of the names in a buttom which triggered the Navigation.push
  // function to move to the detail screen

  renderList() {
    // console.log('render props', this.props.peopleData);
    // console.log('in render list ---->', this.props);
    return this.props.peopleData.map(person =>
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
    console.log('in render --------->', this.props);
    if(!this.props.peopleData){
      return(
        <View style={styles.viewStyle}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <ScrollView >
        {this.renderList()}
      </ScrollView>
    );
  }

}

NameList.propTypes = {
  peopleActions: PropTypes.object,
  peopleData: PropTypes.array
};

function mapStateToProps(state) {
  // console.log('in mapStateToProps', state);
  return {
    peopleData: state.NameList
  };
}

function mapDispatchToProps(dispatch){
  return {
    peopleActions: bindActionCreators(peopleActions, dispatch)
  };
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




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameList);
