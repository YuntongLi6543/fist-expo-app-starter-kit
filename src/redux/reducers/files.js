import {
    SAVE_FILE_SUCCESS
} from '../constants/ActionTypes';

const INIT_STATE = {};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SAVE_FILE_SUCCESS: {
            return {
                ...state,
                location: action.payload
            };
        }

        default:
            return state;
    }
};


