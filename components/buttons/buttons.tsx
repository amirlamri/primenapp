import React from 'react';
import { Text, Pressable } from 'react-native';
import { StyleSheet } from "react-native";
import { COLORS,SIZES,FONTS } from '../../constants';

type forstupidprops ={
    label:string;
    color:string;
}


export default function Button(props:forstupidprops) {

  return (
    <Pressable style ={styles.default}>
      <Text style ={styles.primary}>{props.label}</Text>
    </Pressable>
  );

  }

  const styles = StyleSheet.create({

    default : { 
        backgroundColor : COLORS.secondary,
        flexShrink : 0,
        borderStyle: "solid",
        borderWidth: 3,
        width : 272,
        height : 62
      },
     primary : {
        fontFamily : FONTS.thisbold,
        textAlign : 'center',
        fontSize : SIZES.large,
       


      }
    });