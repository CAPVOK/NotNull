import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        request:{
            header: {
                messageNum: "",
                timestamp: "",
                sender: "",
                receiver: "",
                messageNumAnswer: ""
            },
            request: {
                supportedCommands: []
            }
        }
    },
    reducers: {
        saveRequest: (state, action) => {state.request = action.payload},
    }
})

export const {saveRequest} = profileSlice.actions

export default profileSlice.reducer