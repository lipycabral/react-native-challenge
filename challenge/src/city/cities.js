import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'

import AntDesign from 'react-native-vector-icons/AntDesign'

class Cities extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                {this.props.cities.map((city) => (
                    <TouchableHighlight 
                        key={city.id}
                        onPress={() => {
                            this.props.navigation.push('city', {nameCity: city.name, idCity: city.id})
                        }}
                    >
                        <View style={styles.viewCities}>
                            <Text style={styles.txtNameCity}>{city.name}</Text>
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

const mapStateToProps = state => ({
    cities: state.RegisterReducer.cities
})

export default connect(mapStateToProps, null)(Cities)
