import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Cities extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewCities}>
                    <Text style={styles.txtNameCity}>Austin</Text>
                    <AntDesign name='right' size={24}/>
                </View>
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
        borderColor: '#D6D7Da',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    txtNameCity:{
        fontSize: 20
    }
})
