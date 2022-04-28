import { Dispatch } from "redux";
import { authApi } from "../../api/todolists-api";

const initialState = {
    isLoggedIn: false
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state;
    }
}

export const setIsLoggedInAC = (value: boolean) =>
   ({type: 'login/SET-IS-LOGGED-IN', value} as const);

//type
 type ActionType = ReturnType<typeof setIsLoggedInAC>

 export const initializeAppTC = () => {
     return (dispatch: Dispatch) => {

     }
 }