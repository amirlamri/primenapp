import {View, Text } from 'react-native';
import styles from "./intro.style.js";


const Intro = () => {
  
  return (
  
    <View style={[styles.frame, styles.frameSpaceBlock]}>
    <View style={[styles.primenappWrapper,styles.shadow]}>
      <Text style={[styles.primenapp,styles.introFlexBox]}>PrimeNapp</Text>
   
    </View>

 

  </View>
  )


};



export default Intro;

function componentDidMount() {
  throw new Error('Function not implemented.');
}
