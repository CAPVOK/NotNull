import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        requests: [],
        isConnected: false,
        stompClient: null,
        messageId: 0,
    },
    reducers: {
        saveConnect: (state, action) => {state.isConnected = action.payload},
        saveStompClient: (state, action) => {state.stompClient = action.payload},
        saveRequests: (state, action) => {
            state.requests.push(action.payload)
        },
        cleanRequests: (state) => {
            state.requests = [];
            state.isConnected = false;
            state.messageId = 0;
            state.stompClient = null;
        },
        incrementMessage: (state) => {
            state.messageId = state.messageId + 1;
        }
    }
})

export const { saveConnect, saveStompClient, saveRequests, cleanRequests, incrementMessage} = profileSlice.actions

export default profileSlice.reducer