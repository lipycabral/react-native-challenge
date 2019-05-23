import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'

import { connect } from 'react-redux'
import {
    changeLocation
} from '../actions/registerActions'

class City extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('nameCity'),
    })
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.props.locations.map(location => {
                            if (location.cityId === this.props.navigation.getParam('idCity')) {
                                return (
                                    <TouchableHighlight
                                        key={location.id}
                                        onPress={() => {
                                            this.props.navigation.push('location', {name:location.name})
                                            const {id, cityId, name, type, address, coordinates, notes} = location
                                            this.props.changeLocation({id, cityId, name, type, address, coordinates, notes})
                                        }}
                                    >
                                        <View style={styles.viewBox}>
                                            <View style={styles.viewBoxHeader}>
                                                <Text style={styles.txtBoxHeader}>{location.name}</Text>
                                            </View>
                                            <View style={styles.viewBoxBody}>
                                                <Text style={styles.txtBoxBody}>Tipo: {location.type}</Text>
                                                <Text style={styles.txtBoxBody}>Endereço: {location.address}</Text>
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                )
                            }
                        })
                    }

                </ScrollView>
                <TouchableHighlight
                    style={styles.btnPlus}
                    onPress={() => {
                        this.props.navigation.push('addLocations', { nameCity: this.props.navigation.getParam('nameCity'), idCity: this.props.navigation.getParam('idCity') })
                    }}
                >
                    <AntDesign name='plus' size={24} color='white' />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        alignItems: 'center'
    },
    btnPlus: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20,
        right: 10,
        borderRadius: 90,
        backgroundColor: '#9400D3',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBox: {
        margin: 15,
        backgroundColor: '#FFF',
        height: 120,
        width: 370,
        borderWidth: 0.5,
        borderColor: '#D6D7DA',
        flex: 1
    },
    viewBoxHeader: {
        flex: 1,
        borderBottomColor: '#D6D7DA',
        borderBottomWidth: 0.5,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBoxHeader: {
        fontWeight: 'bold',
        fontSize: 20
    },
    viewBoxBody: {
        flex: 2,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    txtBoxBody: {
        fontSize: 15,
        marginVertical: 3
    }
})

const mapStateToProps = state => ({
    locations: state.RegisterReducer.locations
})

export default connect(mapStateToProps, { changeLocation })(City)