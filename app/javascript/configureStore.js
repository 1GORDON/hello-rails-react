import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";

import { GET_THINGS_SUCCESS } from "./components/HelloWorld";

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    messages: [
      {
        name: "test",
        guid: "123"
      },
    ],
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type){
    case GET_THINGS_SUCCESS:
      return { messages: action.json.messages };
  }
  return state;
}

export default function configureStore(){
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}