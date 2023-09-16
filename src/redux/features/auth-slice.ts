import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
}

interface InitialState {
    value: AuthState;
}

const initialState: InitialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    }
}

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: new Date().getTime().toString(),
                    isModerator: false,
                }
            }
        },
        toggleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator;
        }
    }
})

export const { logIn, logOut, toggleModerator } = auth.actions;
export default auth.reducer;