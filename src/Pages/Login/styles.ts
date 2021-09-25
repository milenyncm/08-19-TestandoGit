import React from 'react';
import { StyleSheet } from 'react-native';

export const styles=StyleSheet.create({
	container:{
		backgroundColor:"#395185",
		alignItems:'center',
		height:'100%'
	},
	header:{
		height:100,
		flexDirection:'row',
		marginTop:180,
		justifyContent:'space-evenly',
	},
	logo:{
		height:40,
		width:60,
		padding:30,
	},
	textoDaLogo:{
		fontSize:42,
		color:'#fff',
		fontWeight:'bold',
		fontFamily:'Roboto',
		marginLeft:10
	},
	Input:{
		marginVertical:25,
		width:'80%',
		backgroundColor:'#fff',
		height:40,
		paddingLeft:15
	},
	form:{
		alignItems:'center',
		justifyContent:'center',
		width:'90%',
	},
	button:{
		width:'70%',
		justifyContent: 'center',
		alignItems: 'center',
		height:48,
		backgroundColor:'#213873',
		paddingVertical:1
	},
	textButton:{
		textAlign:'center',
		color:'white',
		fontSize:20,
		fontWeight:'bold'
	},
	criar:{
		fontSize:18,
		marginVertical:30,
		color:'#fff',
		textDecorationLine:'underline'
	}
})