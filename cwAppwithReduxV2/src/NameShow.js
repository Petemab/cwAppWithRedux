
import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from './actions/peopleActions';
import PropTypes from 'prop-types';
import CardSection from './components/CardSection';
import Card from './components/Card';
import RatingSection from './components/RatingSection';



class NameShow extends Component {

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
    this.props.peopleActions.fetchAllPersonData(this.props.person.docID);
    // console.log(this.props);
  }

  renderShow() {
    console.log('props----->', this.props.personData.personData);
    // console.log('state ----->', this.state);
    const { image, name, rating, dob } = this.props.personData.personData;
    const {
      containerStyle,
      imageStyle,
      nameStyle,
      ageStyle,
      birthdayStyle,
      imageContainerStyle
    } = styles;
    return (

      <Card>
        <CardSection>
          <View style={containerStyle}>
            <View style={imageContainerStyle}>
              <Image
                style={imageStyle}
                source={{ uri: image }}
              />
            </View>
          </View>
        </CardSection>
        <CardSection>
          <View style={containerStyle}>
            <Text style={nameStyle}>{name}</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={containerStyle}>
            <Text style={ageStyle}>{dob} years old</Text>
            <Text style={birthdayStyle}> {'6 months and 6 days until next birthday'}</Text>
          </View>
        </CardSection>
        <CardSection>
          <View style={containerStyle}>
            <RatingSection
              rating={rating}
            />
          </View>
        </CardSection>
      </Card>



    );
  }


  render(){
    console.log('render props on show page', this.props.personData.personData);
    // console.log('render state on show page', this.state);
    if(!this.props.personData.personData){
      return(

        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <View style={styles.viewStyle}>
        {this.renderShow()}
      </View>
    );

  }


}


NameShow.propTypes = {
  peopleActions: PropTypes.object,
  personData: PropTypes.object
};

function mapStateToProps(state) {
  // console.log('in mapStateToProps', state);
  return {
    personData: state.NameShow
  };
}

function mapDispatchToProps(dispatch){
  return {
    peopleActions: bindActionCreators(peopleActions, dispatch)
  };
}

const styles = StyleSheet.create({
  containerStyle: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  imageStyle: {
    margin: 5,
    height: 200,
    width: 200,
    borderRadius: 100
  },
  imageContainerStyle: {
    margin: 20,
    height: 212,
    width: 212,
    borderRadius: 106,
    borderWidth: 1,
    borderColor: '#808080'
  },
  nameStyle: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 20
  },
  ageStyle: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10
  },
  birthdayStyle: {
    fontSize: 18,
    color: '#808080',
    marginBottom: 20
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameShow);
