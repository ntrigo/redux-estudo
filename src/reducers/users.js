import {
    FETCH_USERS,
    GET_USER_BY_ID
} from '../actions/types';

var ObjectAssign = require('object-assign');


    //   street: '',
    //   suite: '',
    //   city: '',
    //   zipcode: '',
    //   geo: {
    //     lat: '',
    //     lng: ''
    //   }


const usersInfo = [];
const address = {};

export default function(state={}, action){
    switch (action.type) {
        case FETCH_USERS:    
            //console.log("state: ", ObjectAssign({}, state,  action.payload ))        
            return ObjectAssign({}, state, [action.payload] );
            

        // case GET_USER_BY_ID:
        //     console.log("reducer: ", action.payload.address);
        //     // return state
        //     //return state, action.payload.address
        //     console.log( "get: ", Object.assign({}, state.address, {address: action.payload.address}));
        //     return Object.assign({}, state.address,  action.payload.address);


        //     return [...state, ...action.payload]
        // case GET_USER_BY_ID:
        //     console.log("reducer: ", action.payload.address);
        //     // return state
        //     //return state, action.payload.address
        //     return Object.assign({}, state.address, action.payload.address);
            
    }

    return state;
}