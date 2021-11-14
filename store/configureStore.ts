import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper } from 'next-redux-wrapper'


import rootReducer from '../models/reducer'

const state = {}

function configureStore(initState:any = state) {
  const middleware:any = [];
  const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(...middleware)));

  return store;
}

export default configureStore;
export const wrapper = createWrapper(configureStore)
