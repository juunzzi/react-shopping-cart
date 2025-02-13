import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import productReducer from './product/reducer';

const rootReducer = combineReducers({
  product: productReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
