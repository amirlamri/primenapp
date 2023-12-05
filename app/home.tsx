import {StyleSheet, SafeAreaView,View } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme.js';
import { Menu } from '../components/index.js';
import { Stack } from 'expo-router';
import { useFonts } from "expo-font";

const Home = () => {
 
  return (
    <SafeAreaView  style={styles.container}>
          <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "PrimeNapp",
        }}
      />

        <Menu/>

        
        
    </SafeAreaView>
    
  )
};
const styles = StyleSheet.create({
    container : {
        backgroundColor : COLORS.primary,
        width : '100%',
        height : '100%',
    },
});


export default Home;