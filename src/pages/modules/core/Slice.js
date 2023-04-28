import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        requests: [],
        isConnected: false,
        stompClient: null,
    },
    reducers: {
        saveConnect: (state, action) => {state.isConnected = action.payload},
        saveStompClient: (state, action) => {state.stompClient = action.payload},
        saveRequests: (state, action) => {
            state.requests.push(action.payload)
        },
        cleanRequests: (state) => {state.requests = []},
    }
})

export const { saveConnect, saveStompClient, saveRequests, cleanRequests} = profileSlice.actions

export default profileSlice.reducer