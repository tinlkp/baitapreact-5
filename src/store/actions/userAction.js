import { ADD_USER, SET_SELECTED_USER, UPDATE_USER } from "../types/userType"



export const addUserAction = (data) => {
    return {
        type: ADD_USER,
        payload: data
    }
}
export const setSelectedUserAction = (data) => {
    return {
        type: SET_SELECTED_USER,
        payload: data
    }
}
export const updateUserAction = (data) => {
    return {
        type: UPDATE_USER,
        payload: data
    }
}
export const deletelUserAction = (data) => {
    return {
        type: "DELETEL_USER",
        payload: data
    }
}