import axios from 'axios'

const initialState = {
    folder: {}
}

const GET_FOLDER = 'GET_FOLDER'


export function getFolder(category_id) {
    const payload = axios.get(`/api/folder/get/${category_id}`)
    

    return {
        type: GET_FOLDER,
        payload: payload
    }
}

export default function folderReducer (state = initialState, action) {
    switch(action.type){
        case GET_FOLDER + '_PENDING':
            return {...state}
        case GET_FOLDER + '_FULFILLED':
            return {...state, folder: action.payload.data}
        case GET_FOLDER + '_REJECTED':
            return initialState
        default:
            return state
    }
}
