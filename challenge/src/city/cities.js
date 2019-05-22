import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [
                { id: 1, nameCity: 'Austin', nameCountry: 'Estados Unidos' },
                { id: 2, nameCity: 'Rio De Janeiro', nameCountry: 'Brasil' },
            ]
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.state.cities.map((city) => (
                    <TouchableHighlight 
                        key={city.id}
                        onPress={() => {
                            this.props.navigation.push('city', {nameCity: city.nameCity})
                        }}
                    >
                        <View style={styles.viewCities}>
                            <Text style={styles.txtNameCity}>{city.nameCity}</Text>
                            <AntDesign name='right' size={24} />
                        </View>
                    </TouchableHighlight>
                ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewCities: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 0.5,
        borderColor: '#D6D7DA',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    txtNameCity: {
        fontSize: 20
    }
})
