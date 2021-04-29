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
        .then(response => response.json())
        .then(day => dispatch({type: 'ADD_DAY', payload: day}))
    }
}

// export const removeDay = 