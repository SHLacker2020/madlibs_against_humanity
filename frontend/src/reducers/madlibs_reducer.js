import { RECEIVE_MADLIB, RECEIVE_MADLIBS, REMOVE_MADLIB } from '../actions/madlib_actions';
  
  const MadlibsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_MADLIBS:
        action.madlibs.map( madlib => {
          return newState[madlib._id] = madlib
        });
        return newState;
      case RECEIVE_MADLIB:
        newState[action.madlib._id] = action.madlib
        return newState;
      case REMOVE_MADLIB:
        delete newState[action.madlibId]
        return newState;
      default:
        return state;
    }
  };
  
  export default MadlibsReducer;