import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'

export default class AddLocations extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <Text style={styles.txtTop}>Nova localização em {this.props.navigation.getParam('nameCity')}</Text>
                    <TextInput placeholder='Nome' style={styles.txtInput} />
                    <TextInput placeholder='Tipo' style={styles.txtInput} />
                    <TextInput placeholder='Endereço' style={styles.txtInput} />
                    <TextInput 
                        multiline = {true}
                        numberOfLines = {4}
                        placeholder='Notas'
                        style={[styles.txtInput, { height: 100 }]} 
                    />
                    <TouchableHighlight style={styles.btnAdd}>
                        <Text style={styles.txtBtn}>Adicionar localização</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewBottom}>
                    <TouchableHighlight
                        style={styles.btnClose}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                        <Text style={styles.txtBtn}>Sair</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    viewTop:{
        flex: 4,
        alignItems: 'center',
        paddingTop: 40
    },
    txtTop:{
        fontSize: 20
    },
    txtInput:{
        height: 50,
        width: '90%',
        marginVertical: 5,
        backgroundColor: '#D3D3D3'
    },
    btnAdd:{
        height: 50,
        width: '90%',
        marginVertical: 5,
        backgroundColor: '#6A6E6C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtn:{
        color: '#FFF'
    },
    viewBottom:{
        flex: 1,
        flexDirection: 'column-reverse',
        padding: 20
    },
    btnClose:{
        height: 40,
        width: 60,
        marginVertical: 5,
        backgroundColor: '#6A6E6C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
