export const fetchDays = action => {
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/days')
        .then(response => response.json())
        .then(response => dispatch({
            type: 'FETCH_DAYS',
            payload: response
        }))
    }
}

export const addDay = data => {
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/days', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST', 
            body: JSON.stringify(data)
        })
    }
}

// export const removeDay = 