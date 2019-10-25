import axios from "axios"
import { API_KEY as KEY } from '../SECRET/secret'

// action types
export const FETCH_HPCHAR_START = "FETCH_HPCHAR_START"
export const FETCH_HPCHAR_SUCCESS = "FETCH_HPCHAR_SUCCESS"
export const FETCH_HPCHAR_FAILURE = "FETCH_HPCHAR_FAILURE"

// action creators
const URL = 'https://www.potterapi.com/v1/characters'
// const promise = axios.get(`${URL}` + `${KEY}`)

export const getHPChars = () => dispatch => {
    // const dispatch = useDispatch()
    dispatch({ type: FETCH_HPCHAR_START })
    axios
        .get(`${URL}${KEY}`)
        .then(res => {
            console.log("RES", res)
            dispatch({ type: FETCH_HPCHAR_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_HPCHAR_FAILURE, payload: err.response })
        })
}