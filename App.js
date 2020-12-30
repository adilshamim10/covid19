import axios from 'axios';
import * as React from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import World from './components/world';
import Country from './components/country';
import Favorite from './components/fav';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Homescreen =({navigation})=>{
   navigation.setOptions({
    headerRight: () => (
      <Button
        color="black"
        title="history"
        onPress={() => {
          navigation.navigate('Fav');}}
        >
        </Button>
    ),
  });
}
//function Myscreen(){
  //return(
  //<NavigationContainer>
      //<Stack.Navigator initialRouteName={"home"} >
      //<Stack.Screen name="Home" component={World} 
      //options={{
        //headerTitleAlign: "centre",
        //headerTintColor: 'white',
        //headerStyle:{
          //backgroundColor: 'orange',
          //borderColor: 'white',
          //borderWidth: 5
        //}
      //}} />
      //</Stack.Navigator>
      //</NavigationContainer>
  ///);

//}


function MyDrawer() {
  return (

    <Drawer.Navigator
      //openByDefault={true}
      
      drawerType="slide"
      drawerStyle={{
        backgroundColor: 'white',
        width: 240,
      }}>
      <Drawer.Screen
        name="World"
        component={World}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="globe-outline"
              size={28}
              color="orange"></Ionicons>
          ),
          drawerLabel: 'World Screen',
        }}
      />
      <Drawer.Screen
        name="Country"
        component={Country}
        options={{
          drawerIcon: () => (
            <Ionicons
              name="navigate-outline"
              size={28}
              color="orange"></Ionicons>
          ),
          drawerLabel: 'Country Screen',
        }}
      />

      <Drawer.Screen
        name="Favorite"
        component={Favorite}
        options={{
          drawerIcon: () => (
            <Ionicons name="star" size={28} color="orange"></Ionicons>
          ),
          drawerLabel: 'Favorite Screen',
        }}
      />
    </Drawer.Navigator>

    
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    
    </NavigationContainer>
  );
}
