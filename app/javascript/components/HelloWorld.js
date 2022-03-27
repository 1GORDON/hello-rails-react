import React, { useEffect } from "react"
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';


export const GET_THINGS_REQUEST = "GET_THINGS_REQUEST";
export const GET_THINGS_SUCCESS = "GET_THINGS_SUCCESS";

function getThings() {
  return (dispatch) => {
    return fetch(`v1/messages.json`)
      .then((response) => response.json())
      .then((json) => dispatch(getThingsSuccess(json)))
      .catch((error) => console.log(`Fetching Error ${error}`));
  };
}

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json,
  };
}

const HelloWorld = () => {
  const dispatch = useDispatch();
  let message = useSelector((state) => state.rootReducer);

  useEffect(() => {
    dispatch(getThings());
  }, []);
  
    return (
      <React.Fragment>
        <h1>Greeting</h1>
        <div>
          {message.messages}
        </div>
      </React.Fragment>
    );
  }

const structuredSelector = createStructuredSelector({
  messages: (state) => state.messages,
});

const mapDispatchToProps = { getThings };

HelloWorld.propTypes = {
  message: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);