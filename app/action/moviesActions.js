export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";
const fetch_movies_url = "http://react-cdp-api.herokuapp.com/movies";
import QueryStringManager from "../../client/js/QueryStringManager";

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSucess = response => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: {
        movies: response.data,
        total: response.total
    }
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: {
        error
    }
});

export function fetchMovies() {
    const stringQuery = QueryStringManager.stringify();
    const url = fetch_movies_url + "?" + stringQuery;
    return dispach => {
        dispach(fetchMoviesBegin());
        return fetch(url)
            .then(resp => resp.json())
            .then(response => {
                dispach(fetchMoviesSucess(response));
                return response
            })
            .catch(error => dispach(fetchMoviesFailure(error)));
    };
}
