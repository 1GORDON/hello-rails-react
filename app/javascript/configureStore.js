import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";

import { GET_THINGS_SUCCESS } from "./components/HelloWorld";

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    messages: "test"
};

function rootReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type){
    case GET_THINGS_SUCCESS:
      return { messages: action.json.msg.name };
  }
  return state;
}

const reducers = combineReducers({
  rootReducer
});

export default function configureStore(){
  const store = createStore(
    reducers,
    applyMiddleware(
      thunk
    )
  );
  return store;
}