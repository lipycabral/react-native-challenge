import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Keyboard
} from 'react-native'

import { connect } from 'react-redux'

import {
    changeNameCity,
    changeCountry,
    registerCity
} from '../actions/registerActions'

class AddCities extends Component {
    constructor(props) {
        super(props)
    }

    _registerCity() {
        const { city, country } = this.props

        this.props.registerCity({ city, country })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtMain}>Cidades</Text>
                    <TextInput
                        style={styles.txtInput}
                        placeholder='Cidade'
                        value={this.props.city}
                        onChangeText={
                            text => this.props.changeNameCity(text)
                        }
                    />
                    <TextInput
                        style={styles.txtInput}
                        placeholder='País'
                        value={this.props.country}
                        onChangeText={
                            text => this.props.changeCountry(text)
                        }
                    />
                <TouchableHighlight
                    style={styles.btnSubmit}
                    onPress={
                        () => {
                            this._registerCity()
                            Keyboard.dismiss()
                        }
                    }
                >
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
    txtMain: {
        fontSize: 30,
        color: '#FFF',
        marginVertical: 10,
    },
    txtInput: {
        height: 50,
        width: '90%',
        marginVertical: 10,
        backgroundColor: '#FFF'
    },
    txtBtn: {
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

const mapStateToProps = state => ({
    city: state.RegisterReducer.nameCity,
    country: state.RegisterReducer.countryCity,
})

export default connect(
    mapStateToProps,
    {
        changeNameCity,
        changeCountry,
        registerCity
    }
)(AddCities)