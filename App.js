import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import EventList from "./EventList";
import EventForm from './EventForm';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" headerTitle="Your Events" component={EventList} />
        <Stack.Screen name="Form" headerTitle="Add an event" component={EventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
