import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';
import {styles} from './styles';
type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>;

const Login=()=>{
	const navigation = useNavigation<LoginProps>();
	function irParaTelaDeHome() {
		navigation.navigate('Home');
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.f} source={
                    require("../../assets/facebook.png")}>
                </Image>
				<Text style={styles.textface}>Facebook</Text>
			</View>
			<View style={styles.texts}>
				<TextInput 
                    placeholder="Email" 
                    placeholderTextColor="#A19FA1"
                    style={styles.Input}>
                </TextInput>
				<TextInput 
                    placeholder="Password"
                    placeholderTextColor="#A19FA1"
                    style={styles.Input}>
                </TextInput>
				<View style={styles.login}>
					<TouchableOpacity style={styles.login} onPress={irParaTelaDeHome}>
						<Text style={styles.textLogin}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
				<Text style={styles.cadastrar}>Sign Up for FaceBook</Text>
			</View>
	
	);
}
export default Login;