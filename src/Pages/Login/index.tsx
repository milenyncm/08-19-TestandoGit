import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
    return(
        <View style={styles.container}>
            <Text>Facebook</Text>
            <Text>Email</Text>
            <Text>Password</Text>
            <Text>Log In</Text>
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
});

export default Login;