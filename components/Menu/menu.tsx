import { View, Text,Image, Pressable } from 'react-native';
import React from 'react';
import styles from '../Menu/menu.style';
import Button from '../buttons/buttons';
import { FONTS,COLORS} from '../../constants';


const Menu = () => {
  return (
    <View style={{alignItems: 'center',marginTop:35}}>
   
        <Button  label='Prime Numbers' color='FONTS.secondary'/>
        <View style ={[styles.card]}>
        <View style={[styles.inline]}>
          <Image style={[styles.icon]} source={require('../../assets/icons/what.png')} />
          <Text style ={[ styles.text]}>
              A prime number is a number that can only be divided by itself and 1 without remainders.
          </Text>
        </View>
       
        <View style={[styles.inline]}>
        <Image style={[styles.icon]}  source={require('../../assets/icons/right.png')} />
        <Text style ={[ styles.text]}>
      
          What are the prime numbers from 1 to 100?
          The prime numbers from 1 to 100 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 
          47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.
        </Text>
        </View>
        <View style={[styles.inline]}>
        <Image style={[styles.icon]} source={require('../../assets/icons/wrong.png')} />
        <Text style ={[ styles.text]}>
    
          Is 51 a prime number?
          51 is not a prime number because it has 3 and 17 as divisors, 
          as well as itself and 1. In other words, 51 has four factors.
        </Text>
        </View>
        </View>
        <Pressable style = {[styles.button]}>
        <Image source={require('../../assets/icons/PolygonR.png')} />
        </Pressable>
    </View>
  )
}

export default Menu;