import { StyleSheet } from "react-native";
import { COLORS,FONTS,SIZES } from "../../constants";


const styles = StyleSheet.create({
    
    primary :{

        height: '100%',
        width: '100%',
        backgroundColor : COLORS.primary,
        alignItems: 'center',
        
    },
    input :{
        backgroundColor:'#fff',
        height : 60,
        width : 250,
        borderStyle : "solid",
        borderColor : '#000',
        borderWidth : 3,
        padding : 15
        
    },
    card : {
        backgroundColor: "#fff",
        width : '80%',
        height : 400,
        borderStyle : "solid",
        borderWidth : 3,
        marginTop : 10,

    } ,
    button : {
        flexShrink : 0,
        borderStyle: "solid",
        borderWidth: 3,
        width : 123,
        height : 49,
        margin : 10,
        
    },
    
    text : {
        fontFamily : FONTS.thisbold,
        fontSize : SIZES.normal,
        alignSelf:"center",
        marginTop : '5%'
    },
    inline :{
        flexDirection : "row",
        flexWrap : 'wrap',
    },
    results :{
        marginRight : '10%',
        marginTop : '5%'
    }


});

export default styles; 