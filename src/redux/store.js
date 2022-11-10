
import { configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/auth-slice'
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-reducer';

const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistor = persistStore(store);