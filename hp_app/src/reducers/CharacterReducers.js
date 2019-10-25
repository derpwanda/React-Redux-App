import { FETCH_HPCHAR_START } from '../actions/CharactersActions'
import { FETCH_HPCHAR_SUCCESS } from '../actions/CharactersActions'
import { FETCH_HPCHAR_FAILURE } from '../actions/CharactersActions'


const initialState = {
    characters: [],
    error: '',
    isFetching: false
};

export const charReducer = (state = initialState, action) => {
    // console.log('reducer', action)
    switch (action.type) {
        case FETCH_HPCHAR_START:
            return Object.assign({}, state, { isFetching: true, error: '' });

        case FETCH_HPCHAR_SUCCESS:
            return Object.assign({}, state, {
                characters: [...state.characters, ...action.payload],
                isFetching: false,
                error: ''
            });

        case FETCH_HPCHAR_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload
            });
        default:
            return state;
    }
}

console.log("CharacterREducer", charReducer)