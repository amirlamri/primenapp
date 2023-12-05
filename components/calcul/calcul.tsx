import { View, Text,Pressable,Image } from 'react-native'
import React from 'react';
import styles from './calcul.style';
import { TextInput } from 'react-native-gesture-handler';

const Calculjob = () => {
  return (
    <View style={[styles.primary]}>
      <View style ={{marginTop : '10%', marginBottom : '5%'}}>
      <TextInput
        style = {styles.input}
        placeholder='insert number'
      />
      </View>
      <View style={[styles.inline]}>
        <Pressable style={[styles.button,{backgroundColor : '#90EE90'}]}>
          <Text style ={[styles.text]}>calculate</Text>
        </Pressable>
        <Pressable style={[styles.button,{backgroundColor : '#FF6B6B'}]} >
          <Text style ={[styles.text]}>clear</Text>
        </Pressable>
      </View>
      <View style={[styles.inline, styles.results]} >
      <Image  style = {{marginRight : 20, marginTop : '4%'}}source={require('../../assets/icons/Polyicon.png')} />
      <View style={[styles.card]}>

      </View>

      </View>
      
        
    </View>
  )
}

export default Calculjob;