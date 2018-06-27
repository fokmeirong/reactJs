import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    fetchMoviesBegin,
    fetchMoviesSucess,
    fetchMoviesFailure,
    fetchMovies
} from "../action/moviesActions";
// import 'cross-fetch/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import mockMovies from './mock/mockMovies'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

    it('should create an action to fetch Movies Begin', () => {
        const expectedAction = {
            type: FETCH_MOVIES_BEGIN
        }
        expect(fetchMoviesBegin()).toEqual(expectedAction)
    })

    it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
        fetchMock
            .mock('*', mockMovies);



        const store = mockStore(mockMovies)

        return store.dispatch(fetchMovies()).then(() => {
            const expectedAction = [
                { type: FETCH_MOVIES_BEGIN },
                {
                    type: FETCH_MOVIES_SUCCESS,
                    payload: {
                        movies: mockMovies.data,
                        total: mockMovies.total
                    }
                }
            ];
            // return of async actions
            expect(store.getActions()).toEqual(expectedAction)
        })

        fetchMock.restore();
    })



});
