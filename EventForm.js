import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "@react-native-community/datetimepicker";
import { formatDate } from "./api";
class EventForm extends Component {
  state = {
    title: "",
    date: "",
    showDatePicker: false,
  };

  handleAddPress = () => {
    console.warn(this.state);
    this.props.navigation.navigate("List");
  };

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  };

  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Event title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          />
          <TextInput
            style={[styles.textInput, styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            value={formatDate(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePickerModal isVisible={this.state.showDatePicker} mode="datetime" />
        </View>
        <TouchableHighlight style={styles.button} onPress={this.handleAddPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "white",
  },
  textInput: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },

  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
  },
  borderTop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.5,
  },
});

export default EventForm;
