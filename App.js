import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import EventList from "./EventList";
import EventForm from "./EventForm";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={EventList}
          options={{
            title: "Your Events",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Form"
          component={EventForm}
          options={{ title: "Add an event", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
