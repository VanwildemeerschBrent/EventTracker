import React, { Component } from "react";
import { View, Text, TouchableHighlight,StyleSheet } from "react-native";

class EventForm extends Component {
  handleAddPress = () => {
    this.props.navigation.navigate('List')
  };

  
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handleAddPress}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop:20,
  }
})

export default EventForm;
