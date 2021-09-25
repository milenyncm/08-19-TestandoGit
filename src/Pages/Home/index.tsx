import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { stylesLink,  stylesLinkImportantes, styles} from './styles';

const LinkItem = (props:any)=>{
    return(
        <Text style={stylesLink.text}>{props.name}</Text>
    );
}

const LinksImportantes = ()=>{
    return(//Aqui dentro ficará o nosso TSX
        <View style={stylesLinkImportantes.container}>
            <LinkItem name="Home"/>
            <LinkItem name="Post"/>
            <LinkItem name="Videos"/>
            <LinkItem name="Photos"/>
            <LinkItem name="Community"/>
        </View>
    );
};

const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={
                    require("../../assets/arrow-left.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/ei_search.png")
                        }>
                    </Image>
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        style={styles.textInput}
                        >

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/share.png")
                    }>
                </Image>  
            </View>
            <LinksImportantes />
            <StatusBar style="auto"  />
            <View style={styles.conteudoFacebook}>
                <TouchableOpacity style={styles.meubotao}>
                    <Text style={styles.meubotaoTexto}>Ir para segunda tela</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home;