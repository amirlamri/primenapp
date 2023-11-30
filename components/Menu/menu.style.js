import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS } from "../../constants/theme";
const styles = StyleSheet.create({

    container : {
        height: '100%',
        width: '100%',
        backgroundColor : COLORS.primary,
    },
    card : {
        backgroundColor: "#fff",
        width : 272,
        height : 465,
        borderStyle : "solid",
        borderWidth : 3,
        marginTop : 10,

    } ,

    text : {
            padding : 10, 
            fontFamily : FONTS.normal,
        
            
    },
    button :{
        paddingTop: 20,
    }
})
export default styles;