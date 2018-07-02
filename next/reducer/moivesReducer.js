import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE
} from "../action/moviesActions";

const intialState = {
    movies: [],
    loading: false,
    error: null,
    total: null
};

export default function moviesReducer(state = intialState, action) {
    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.movies,
                total: action.payload.total
            }
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                movies: [],
                total: null
            }
        default:
            return state;
    }
}

