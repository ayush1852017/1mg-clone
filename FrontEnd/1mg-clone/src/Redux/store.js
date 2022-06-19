import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { productReducer } from "./products/reducer";
const rootReducer = combineReducers({
  productStore: productReducer,
  authStore: authReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
