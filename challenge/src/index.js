import React from 'react'

import Cities from './city/cities'
import AddCities from './city/addCities'

import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const CitiesStack = createStackNavigator({
    cities: {
        screen: Cities,
        navigationOptions: () => ({
            title: 'Cidades',
            headerStyle: {
                backgroundColor: '#9400D3',
            },
        }),

    }
})

const Routes = createAppContainer(
    createBottomTabNavigator({
        cities: {
            screen: CitiesStack,
            navigationOptions: () => ({
                tabBarLabel: 'Cidades',
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name='city' color={focused ? '#0000FF' : '#808080'} size={24} />
                ),
            })
        },
        addCities: {
            screen: AddCities,
            navigationOptions: () => ({
                tabBarLabel: 'Adicionar cidade',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name='ios-add' color={focused ? '#0000FF' : '#808080'} size={24} />
                )
            })
        }
    })
)

export default Routes