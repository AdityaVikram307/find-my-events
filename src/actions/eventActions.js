import {
    GET_EVENTS,
    ADD_EVENT,
    DELETE_EVENT,
    GET_EVENT
  } from './types';
  import axios from 'axios';
  
  export const getEvents = () => async dispatch => {
    const res = await axios.get('https://my-json-server.typicode.com/AdityaVikram307/mockjson/events');
  
    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  };
  
  export const getEvent = id => async dispatch => {
    const res = await axios.get(
      `https://my-json-server.typicode.com/AdityaVikram307/mockjson/events/${id}`
    );
  
    dispatch({
      type: GET_EVENT,
      payload: res.data
    });
  };
  
  export const addEvent = event => async dispatch => {
    const res = await axios.post(
      `https://my-json-server.typicode.com/AdityaVikram307/mockjson/events/`,
      event
    );
  
    dispatch({
      type: ADD_EVENT,
      payload: res.data
    });
  };
  
  export const deleteEvent = id => async dispatch => {
    try {
      await axios.delete(`https://my-json-server.typicode.com/AdityaVikram307/mockjson/events/${id}`);
  
      dispatch({
        type: DELETE_EVENT,
        payload: id
      });
    } catch (e) {
      dispatch({
        type: DELETE_EVENT,
        payload: id
      });
    }
  };
  
  
  