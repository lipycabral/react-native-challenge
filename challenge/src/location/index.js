import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Location extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('name')
    })
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInfo}>
                    <Text style={styles.txtInfo}>Nome do local: {this.props.location.name}</Text>
                    <Text style={styles.txtInfo}>Tipo: {this.props.location.type}</Text>
                    <Text style={styles.txtInfo}>Endereço: {this.props.location.address}</Text>
                    <Text style={styles.txtInfo}>Coordenadas: {this.props.location.coordinates}</Text>
                    <Text style={styles.txtInfo}>Notas: {this.props.location.notes}</Text>
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
    viewInfo:{
        flex: 1,
        justifyContent: 'center'
    },
    txtInfo: {
        fontSize: 20,
        marginVertical: 2,
        alignItems: 'baseline',
        textAlign: 'center'

    }
})

const mapStateToProps = state => ({
    location: state.RegisterReducer.location,
})
export default connect(mapStateToProps, null)(Location)
