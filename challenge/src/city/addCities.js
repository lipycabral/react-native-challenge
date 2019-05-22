import React, { Component } from 'react'
import { 
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'

export default class AddCities extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtMain}>Cidades</Text>
                <TextInput style={styles.txtInput} placeholder='Cidade' />
                <TextInput style={styles.txtInput} placeholder='País' />
                <TouchableHighlight style={styles.btnSubmit}>
                    <Text style={styles.txtBtn}>
                        Salvar
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9400D3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtMain:{
        fontSize: 30,
        color: '#FFF',
        marginVertical: 10,
    },
    txtInput:{
        height: 50,
        width: '90%',
        marginVertical: 10,
        backgroundColor: '#FFF'
    },
    txtBtn:{
        color: '#FFF'
    },

    btnSubmit: {
        height: 50,
        width: '90%',
        marginVertical: 10,
        backgroundColor: '#808080',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
