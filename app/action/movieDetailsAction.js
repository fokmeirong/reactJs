export const FETCH_DETAILS_BEGIN = "FETCH_DETAILS_BEGIN";
export const FETCH_MOVIES_DETAILS_SUCCESS = "FETCH_MOVIES_DETAILS_SUCCESS";
export const FETCH_MOVIES_DETAILS_FAILURE = "FETCH_MOVIES_DETAILS_FAILURE";
const fetch_movies_url = "http://react-cdp-api.herokuapp.com/movies";
import QueryStringManager from "../../client/js/QueryStringManager";

export const fetchDetailsBegin = () => ({
    type: FETCH_DETAILS_BEGIN
});

export const fetchMoviesDetailsSuccess = response => ({
    type: FETCH_MOVIES_DETAILS_SUCCESS,
    payload: {
        data: response
    }
});

export const fetchMoviewsDetailFailure = error => ({
    type: FETCH_MOVIES_DETAILS_FAILURE,
    payload: {
        error
    }
});


export function fetchMoviesDetailsById(id) {
    const url = fetch_movies_url + "/" + id;
    return dispach => {
        dispach(fetchDetailsBegin());
        return fetch(url)
            .then(resp => resp.json())
            .then(response => {
                dispach(fetchMoviesDetailsSuccess(response));
                return response
            })
            .catch(error => dispach(fetchMoviewsDetailFailure(error)));
    };
}
