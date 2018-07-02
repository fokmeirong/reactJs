import {
    FETCH_DETAILS_BEGIN,
    FETCH_MOVIES_DETAILS_SUCCESS,
    FETCH_MOVIES_DETAILS_FAILURE
} from "../action/movieDetailsAction";

const intialState = {
    details: [],
    loading: false,
    error: null
};

export default function moviesReducer(state = intialState, action) {
    switch (action.type) {
        case FETCH_DETAILS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_MOVIES_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                details: action.payload.data
            }
        case FETCH_MOVIES_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                details: []
            }
        default:
            return state;
    }
}

