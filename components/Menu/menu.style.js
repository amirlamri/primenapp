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
        width : 300,
        height : 465,
        borderStyle : "solid",
        borderWidth : 3,
        marginTop : 10,

    } ,

    text : {
            padding : 5, 
            fontFamily : FONTS.normal,
            width : 250,         
    },
    button :{
        paddingTop: 20,

    },
    inline :{
        flexDirection : "row",
        flexWrap : 'wrap',
        width : 600,
        marginTop:25,
    },
    icon :{
        margin : 5,
        
    }
})
export default styles;