import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
}
const stylesLink = StyleSheet.create({
    text:{
        //backgroundColor:"red",
        marginTop:50,
        color: '#FFFFFF',
        fontSize: 13.71,
        alignItems: 'center',
        flex:1,
        height:40,
    }
});

const LinksImportantes = ()=>{
    return(//Aqui dentro ficará o nosso TSX
        <View style={stylesLinkImportantes.container}>
            <LinkItem name="Sign Up for Facebook"/>
        </View>
    );
};
const stylesLinkImportantes = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal:30,
        paddingVertical:10,
        flex:1,

    }
});

const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={
                    require("../../assets/facebook.png")
                }>
            </Image>
            </View>
            <View style={styles.inputTextView}>
                <TextInput
                    placeholder="Facebook"
                    placeholderTextColor="#F5FFFF"
                    style={styles.textInput}
                    >
                </TextInput>
            </View>
            <View style={styles.inputTextViewEmail}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#A19FA1"
                    style={styles.textInput1}
                    >
                </TextInput>
            </View>
            <View style={styles.inputTextViewPassword}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#A19FA1"
                    style={styles.textInput2}
                    >
                </TextInput>
            </View>
            <View style={styles.inputTextViewLogin}>
                <TextInput
                    placeholder="Log In"
                    placeholderTextColor="#FFFFFF"
                    style={styles.textInput3}
                    >
                </TextInput>
            </View>
            <LinksImportantes />    
            <StatusBar style="auto"/>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#4369B0',

    },

    header: {
        minHeight:93,
        paddingTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:30,
        width: 'auto',
        height: 'auto',
        maxHeight:200,
        maxWidth:100,

    },

    inputTextView:{
        //flex:1,
        //backgroundColor:"#213873",
        height:40,
        marginHorizontal:10,
        alignItems: "center",
    },
    textInput:{
        //color:"#F5FFFF",
        //maxWidth:200,
        //flex:1,
        //paddingRight:10,
    },
    inputTextViewEmail:{
        //flex:1,
        backgroundColor:"#FFFFFF",
        height:50,
        marginHorizontal:20,
        //alignItems: "center"
    },
    inputTextViewPassword:{
        //flex:1,
        backgroundColor:"#FFFFFF",
        height:50,
        marginHorizontal:20,
        //alignItems: "center"
    },
    inputTextViewLogin:{
        //flex:1,
        backgroundColor:"#213873",
        height:50,
        marginHorizontal:20,
        alignItems: "center"
    },
    textInput1:{
        //color:"#A19FA1",
        //maxWidth:200,
        flex:1,
        //paddingRight:10,
    },
    textInput2:{
        //color:"#F5FFFF",
        //maxWidth:200,
        flex:1,
        //paddingRight:10,
    },
    textInput3:{
        color:"#213873",
        //maxWidth:200,
        flex:1,
        //paddingRight:10,
    },
});

export default Login;