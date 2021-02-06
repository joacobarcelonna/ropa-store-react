import userTypes from './user.types'

const INITIAL_STATE ={
    currentUser: null,
    signInSuccess: false
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.playload
        }
        case userTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                singInSuccess: action.playload
            }

        default:
            return state;
    }
};

export default userReducer;