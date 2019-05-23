import React, { Component } from 'react'

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'

import {
    changeNameLocation,
    changeTypeLocation,
    changeAddressLocation,
    changeCoordinatesLocation,
    changeNotesLocation,
    registerLocation,
    cleanTxtInput
} from '../actions/registerActions'

class AddLocations extends Component {
    constructor(props){
        super(props)
    }
    _registerLocation(){
        const { name, type, address, coordinates, notes } = this.props
        const cityId = this.props.navigation.getParam('idCity')
        this.props.registerLocation({ cityId, name, type, address, coordinates, notes})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTop}>
                    <Text style={styles.txtTop}>Nova localização em {this.props.navigation.getParam('nameCity')}</Text>
                    <TextInput 
                        placeholder='Nome'
                        style={styles.txtInput} 
                        value={this.props.name}
                        onChangeText={
                            (text) => {this.props.changeNameLocation(text)}
                        }
                    />
                    <TextInput
                        placeholder='Tipo'
                        style={styles.txtInput}
                        value={this.props.type}    
                        onChangeText={
                            (text) => {this.props.changeTypeLocation(text)}
                        }
                    />
                    <TextInput
                        placeholder='Endereço' 
                        style={styles.txtInput} 
                        value={this.props.address}    
                        onChangeText={
                            (text) => {this.props.changeAddressLocation(text)}
                        }
                    />
                    <TextInput
                        placeholder='Coordenadas' 
                        style={styles.txtInput} 
                        value={this.props.coordinates}    
                        onChangeText={
                            (text) => {this.props.changeCoordinatesLocation(text)}
                        }
                    />
                    <TextInput 
                        multiline = {true}
                        numberOfLines = {4}
                        placeholder='Notas'
                        style={[styles.txtInput, { height: 100 }]} 
                        value={this.props.notes}
                        onChangeText={
                            (text) => {this.props.changeNotesLocation(text)}
                        }
                    />
                    <TouchableHighlight 
                        style={styles.btnAdd}
                        onPress={()=> this._registerLocation()}    
                    >
                        <Text style={styles.txtBtn}>Adicionar localização</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.viewBottom}>
                    <TouchableHighlight
                        style={styles.btnClose}
                        onPress={() => {
                            this.props.cleanTxtInput()
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
        backgroundColor: '#F2F2F2',
        justifyContent: 'space-between'
    },
    viewTop:{
        alignItems: 'center',
        paddingTop: 5
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

const mapStateToProps = state => ({
    name: state.RegisterReducer.nameLocation,
    type: state.RegisterReducer.typeLocation,
    address: state.RegisterReducer.addressLocation,
    coordinates: state.RegisterReducer.coordinatesLocation,
    notes: state.RegisterReducer.notesLocation
})
export default connect(
    mapStateToProps,{ 
        changeNameLocation,
        changeTypeLocation, 
        changeAddressLocation, 
        changeNotesLocation, 
        changeCoordinatesLocation,
        registerLocation,
        cleanTxtInput
    }
)(AddLocations)