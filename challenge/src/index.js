import React from 'react'

import Cities from './city/cities'
import AddCities from './city/addCities'
import City from './city'
import AddLocations from './location/addLocations'
import Location from './location'

import { createAppContainer, createBottomTabNavigator, createStackNavigator, getActiveChildNavigationOptions } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './reducers'

const CitiesStack = createStackNavigator(
    {
        cities: {
            screen: Cities,
            navigationOptions: () => ({
                title: 'Cidades',
                headerStyle: {
                    backgroundColor: '#9400D3',
                },
                headerTitleStyle: {
                    color: '#FFF'
                }
            }),
            params: {
                showTabBar: true
            }

        },
        city: {
            screen: City,
            navigationOptions: (navigation) => ({
                headerStyle: {
                    backgroundColor: '#9400D3',
                },
                headerTintColor: 'white',
            }),
            params: {
                showTabBar: true
            }
        },
        addLocations: {
            screen: AddLocations,
            navigationOptions: {
                header: null
            },
            params: {
                showTabBar: false
            }
        },
        location: {
            screen: Location,
            params: {
                showTabBar: true
            },
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#9400D3',
                },
                headerTintColor: '#FFF'
            }

        }
    }
)
CitiesStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = navigation.state.routes[navigation.state.index].params.showTabBar;
    return {
        tabBarVisible,
    };
};
const Routes = createAppContainer(
    createBottomTabNavigator({
        cities: {
            screen: CitiesStack,
            navigationOptions: () => ({
                tabBarLabel: 'Cidades',
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name='city' color={focused ? '#0000FF' : '#808080'} size={24} />
                )
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
    }, {
            navigationOptions: ({ navigation, screenProps }) => ({
                ...getActiveChildNavigationOptions(navigation, screenProps),
            })
        }
    )
)

export default props => (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
    </Provider>
)