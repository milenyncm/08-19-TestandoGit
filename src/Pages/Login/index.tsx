import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.inputTextView}>
                <Image source={
                    require("../../assets/facebook.png")
                }>
                </Image>
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
            <Text>Sign Up for Facebook</Text>
            <StatusBar style="auto"/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#4369B0',

    },
    inputTextView:{
        flex:1,
        backgroundColor:"#213873",
        height:40,
        marginHorizontal:10,
        alignItems: "center"
    },
    textInput:{
        //color:"#F5FFFF",
        //maxWidth:200,
        flex:1,
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