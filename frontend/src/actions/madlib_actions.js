// import { getMadlibs, getMadlib, getUserMadlibs, writeMadlib, editMadlib, dumpMadlib } from '../util/madlib_api_util';
import * as MadlibAPIUtil from '../util/madlib_api_util';

export const RECEIVE_MADLIB = "RECEIVE_MADLIB";
export const RECEIVE_MADLIBS = "RECEIVE_MADLIBS";
export const REMOVE_MADLIB = "REMOVE_MADLIB";
export const RECEIVE_MADLIB_ERRORS = "RECEIVE_MADLIB_ERRORS";
export const REMOVE_MADLIB_ERRORS = "REMOVE_MADLIB_ERRORS";

export const receiveMadlibs = response => ({
  type: RECEIVE_MADLIBS,
  madlibs: response.data
});

export const receiveMadlib = response => ({
  type: RECEIVE_MADLIB,
  madlib: response.data
});

export const removeMadlib = madlibId => ({
  type: REMOVE_MADLIB,
  madlibId
})

export const receiveMadlibErrors = errors => ({
  type: RECEIVE_MADLIB_ERRORS,
  errors
})

export const removeMadlibErrors = () => ({
  type: REMOVE_MADLIB_ERRORS,
})


export const fetchMadlibs = () => dispatch => (
  MadlibAPIUtil.getMadlibs()
    .then( response => dispatch(receiveMadlibs(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const fetchMadlib = madlibId => dispatch => (
  MadlibAPIUtil.getMadlib(madlibId)
    .then(response => dispatch(receiveMadlib(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const fetchUserMadlibs = id => dispatch => (
  MadlibAPIUtil.getUserMadlibs(id)
    .then( response => dispatch(receiveMadlibs(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const composeMadlib = data => dispatch => (
  MadlibAPIUtil.writeMadlib(data)
    .then( response => dispatch(receiveMadlib(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const updateMadlib = madlib => dispatch => (
  MadlibAPIUtil.editMadlib(madlib)
    .then( response => dispatch(receiveMadlib(response)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);

export const deleteMadlib = madlibId => dispatch => (
  MadlibAPIUtil.dumpMadlib(madlibId)
    .then(() => dispatch(removeMadlib(madlibId)))
    .catch(err => dispatch(receiveMadlibErrors(err.response.data)))
);
