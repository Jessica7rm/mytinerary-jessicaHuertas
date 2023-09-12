import { createReducer } from "@reduxjs/toolkit";
import getUsersAction  from "../actions/usersActions"

const initialState = {
    user: null
}

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getUsersAction.sign_in.fulfilled, (state, action) => {
            return {...state, user: action.payload }
        })
        .addCase(getUsersAction.sign_up.fulfilled, (state, action) => {
            return {...state, user: action.payload}
        })
        .addCase(getUsersAction.authenticate.fulfilled, (state, action) => {
            return {...state, user: action.payload }
        })
       /* .addCase(getUsersAction.sign_out.fulfilled, (state, action) => {
            return initialState

        });*/
        .addCase( getUsersAction.sign_out, (stateActual, action) => {
            return  {
                ...stateActual,
                user : null,
            }
});
})

export default userReducer