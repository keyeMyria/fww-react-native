import call from './axiosFunc';
import { AsyncStorage } from 'react-native';
import { GET_PLANS, LOGOUT, } from './constants';

export const fetchPlans = (id) => {
  console.log('*************', id)
  return dispatch => {
    return call('get', `/api/user/${id}/plan`)
      .then(res => res.data)
      .then(plan => {
        dispatch({type: GET_PLANS, plan})
      })
      .catch(err => console.log("***fetchFriendsPlans Err:", err))
  }
}

const friendsPlansReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLANS:
      return [...state, action.plan];
    case LOGOUT:
      return []
    default:
      return state;
  }
};


export default friendsPlansReducer;
