export function fetchDays(action) {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/days')
        .then(response => response.json())
        .then(response => dispatch({
            type: 'FETCH_DAYS',
            payload: response
        }))
    }
}
