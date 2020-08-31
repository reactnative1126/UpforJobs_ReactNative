import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import authReducer from "./auth/reducers";

const peresistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: null,
  whitelist: ["auth"],
  blacklist: [],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(peresistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

let persistor = persistStore(store);

export { store, persistor };
