import {
    CHANGE_NAME_CITY,
    CHANGE_COUNTRY_CITY,
    CHANGE_NAME_LOCATION,
    CHANGE_TYPE_LOCATION,
    CHANGE_ADDRESS_LOCATION,
    CHANGE_NOTES_LOCATION,
    CLEAN_TXT_INPUT,
    CHANGE_COORDINATES_LOCATION,
    REGISTER_CITY_SUCCESS,
    REGISTER_LOCATION_SUCCESS,
    UPDATE_LOCATION_SUCCESS,
    CHANGE_LOCATION
} from '../actions'

const INITIAL_STATE = {
    nameCity: '',
    countryCity: '',
    nameLocation: '',
    typeLocation: '',
    addressLocation: '',
    notesLocation: '',
    coordinatesLocation: '',
    cities: [
    ],
    locations: [
    ]
    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_NAME_CITY:
            return { ...state, nameCity: action.payload }
        case CHANGE_COUNTRY_CITY:
            return { ...state, countryCity: action.payload }
        case CHANGE_NAME_LOCATION:
            return { ...state, nameLocation: action.payload }
        case CHANGE_TYPE_LOCATION:
            return { ...state, typeLocation: action.payload }
        case CHANGE_ADDRESS_LOCATION:
            return { ...state, addressLocation: action.payload }
        case CHANGE_COORDINATES_LOCATION:
            return { ...state, coordinatesLocation: action.payload }
        case CHANGE_NOTES_LOCATION:
            return { ...state, notesLocation: action.payload }
        case CLEAN_TXT_INPUT:
            return { ...state, nameCity: '', countryCity: '', nameLocation: '', typeLocation: '', addressLocation: '', notesLocation: '', coordinatesLocation: '',  }
        case REGISTER_CITY_SUCCESS:
            return {
                ...state,
                cities: state.cities.concat(
                    {
                        id: action.id,
                        name: action.city,
                        country: action.country,
                    }
                ),
                nameCity: '',
                countryCity: ''
            }
        case CHANGE_LOCATION:
            return {
                ...state,
                location: {
                    id: action.payload.id,
                    cityId: action.payload.cityId,
                    name: action.payload.name,
                    type: action.payload.name,
                    address: action.payload.address,
                    coordinates: action.payload.coordinates,
                    notes: action.payload.notes
                }
            }
        case REGISTER_LOCATION_SUCCESS:
            return {
                ...state,
                locations: state.locations.concat(
                    {
                        id: action.payload.id,
                        cityId: action.payload.cityId,
                        name: action.payload.name,
                        type: action.payload.type,
                        address: action.payload.address,
                        coordinates: action.payload.coordinates,
                        notes: action.payload.notes,
                    }
                ),
                nameLocation: '',
                typeLocation: '',
                addressLocation: '',
                notesLocation: '',
                coordinatesLocation: '',
            }
        
        default:
            return state
    }
}