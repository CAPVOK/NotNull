import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        requests: [],
        response: null,
        isConnected: false,
        messageId: 0,
    },
    reducers: {
        saveConnect: (state, action) => {state.isConnected = action.payload},
        saveRequests: (state, action) => {state.requests = action.payload},
        saveResponse: (state, action) => {state.response = action.payload},
        addRequests: (state, action) => {
            state.requests.push(action.payload);
        },
        cleanRequests: (state) => {
            state.requests = null;
            state.isConnected = false;
            state.messageId = 0;
        },
        incrementMessage: (state) => {state.messageId = state.messageId + 1 }
    }
})

export const { saveConnect, saveRequests, cleanRequests, incrementMessage, addRequests, saveResponse} = profileSlice.actions

export default profileSlice.reducer