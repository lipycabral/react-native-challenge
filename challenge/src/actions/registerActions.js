import {
    CHANGE_NAME_CITY,
    CHANGE_COUNTRY_CITY,
    CHANGE_NAME_LOCATION,
    CHANGE_TYPE_LOCATION,
    CHANGE_ADDRESS_LOCATION,
    CHANGE_COORDINATES_LOCATION,
    CHANGE_NOTES_LOCATION,
    CLEAN_TXT_INPUT,
    REGISTER_CITY_SUCCESS,
    REGISTER_LOCATION_SUCCESS,
    CHANGE_LOCATION
} from './index'

let id = 0
let idLocation = 0

export const changeNameCity = text => {
    return {
        type: CHANGE_NAME_CITY,
        payload: text
    }
}

export const changeCountry = text => {
    return {
        type: CHANGE_COUNTRY_CITY,
        payload: text
    }
}

export const changeNameLocation = text => {
    return {
        type: CHANGE_NAME_LOCATION,
        payload: text
    }
}

export const changeTypeLocation = text => {
    return {
        type: CHANGE_TYPE_LOCATION,
        payload: text
    }
}

export const changeAddressLocation = text => {
    return {
        type: CHANGE_ADDRESS_LOCATION,
        payload: text
    }
}

export const changeCoordinatesLocation = text => {
    return {
        type: CHANGE_COORDINATES_LOCATION,
        payload: text
    }
}

export const changeNotesLocation = text => {
    return {
        type: CHANGE_NOTES_LOCATION,
        payload: text
    }
}

export const cleanTxtInput = () => {
    return {
        type: CLEAN_TXT_INPUT,
    }
}

export const registerCity = ({ city, country }) => {
    return dispatch => {
        if (city !== '' && country !== '') {
            registerCitySuccess({ city, country }, dispatch)
        } else {
            registerCityError('Todos os dados são necessários para cadastrar', dispatch)
        }
    }
}


const registerCitySuccess = ({ city, country }, dispatch) => {
    alert('Cidade adicionada com sucesso')
    dispatch(
        {
            type: REGISTER_CITY_SUCCESS,
            id: id++,
            city,
            country
        }
    )
}

const registerCityError = (error, dispatch) => {
    alert(error)
    dispatch(
        {
            type: 'error'
        }
    )
}

export const registerLocation = ({ cityId, name, type, address, coordinates, notes }) => {
    return dispatch => {
        if (name !== '' && type !== '' && address !== '') {
            registerLocationSuccess({ cityId, name, type, address, coordinates, notes }, dispatch)
        } else {
            registerLocationError('Todos os dados são necessários para cadastrar', dispatch)
        }
    }
}

const registerLocationSuccess = ({ cityId, name, type, address, coordinates, notes }, dispatch) => {
    alert('Localidade adicionada com sucesso')
    dispatch(
        {
            type: REGISTER_LOCATION_SUCCESS,
            payload: {
                id: idLocation++,
                cityId,
                name,
                type,
                address,
                coordinates,
                notes
            }
        }
    )
}

const registerLocationError = (error, dispatch) => {
    alert(error)
    dispatch(
        {
            type: 'error'
        }
    )
}

export const changeLocation = ({id, cityId, name, type, address, coordinates, notes}) => {
    return {
        type: CHANGE_LOCATION,
        payload: {
            id,
            cityId,
            name,
            type,
            address,
            coordinates,
            notes
        }
    }
}