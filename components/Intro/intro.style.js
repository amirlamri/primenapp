import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    frame: {
      height: 296,
      paddingLeft: 44,
      paddingRight: 43,
      paddingBottom: 17,
      justifyContent: "center",
      alignItems: "center",
    },
    shadow : {
        shadowOpacity:1.0,
        shadowOffset : {
            width:6,
            height:4,
          }
      
    },
  
    primenappWrapper: {
      backgroundColor: "#fff",
      borderStyle: "solid",
      borderWidth: 3,
      width: 276,
      height: 104,
     // overflow: "hidden",     
    },
    frameSpaceBlock: {
      marginTop: 195,
      alignSelf: "stretch",
      overflow: "hidden",
    },
    primenapp: {
      position: "absolute",
      marginTop: -19.5,
      top:"50%",
      left: 2,
      fontSize:30,
      fontFamily:FONTS.thisbold,
      color: "#000",
      textAlign: "center",
      display: "flex",
      width: 273,
    },
   
    introFlexBox: {
      justifyContent: "center",
      alignItems: "center",
    },
  

  })

  export default styles;