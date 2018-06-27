import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
} from "../action/moviesActions";
import reducer from '../reducer/moivesReducer'
import mockMovies from './mock/mockMovies'


describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                movies: [],
                loading: false,
                error: null,
                total: null
            }
        )
    })

    it('should handle FETCH_MOVIES_BEGIN', () => {
        expect(
            reducer([], {
                type: FETCH_MOVIES_BEGIN,
                loading: true,
                error: null
            })
        ).toEqual(
            {
                loading: true,
                error: null
            }
        )
    })


    it('should handle FETCH_MOVIES_SUCCESS', () => {
        expect(
            reducer(
                {
                    loading: false,
                    movies: [],
                    total: 0
                },
                {
                    payload: {
                        movies: [],
                        total: 0
                    }
                }
            )
        ).toEqual(
            {
                loading: false,
                movies: [],
                total: 0
            },
            {
                payload: {
                    movies: [],
                    total: 0
                }
            }
        )
    })


    it('should handle FETCH_MOVIES_FAILURE', () => {
        expect(
            reducer(
                {
                    loading: false,
                    total: 0,
                    movies: [],
                },
                {
                    payload: { 
                        error: [],
                    }
                }
            )
        ).toEqual(
            {
                loading: false,
                movies: [],
                total: 0,
            },
            {
                payload: {
                    error: [],
                }
            }
        )
    })

})