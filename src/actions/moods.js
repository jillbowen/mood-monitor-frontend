export const addMood = (mood, dayId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/days/${dayId}/moods`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mood)
        })
        .then(response => response.json())
        .then(day => {
            if (day.error) {
                alert(day.error)
            } else {
            dispatch({type: 'ADD_MOOD', payload: day})
            }
        }
        )
    }
}

export const deleteMood = (moodId, dayId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/days/${dayId}/moods/${moodId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(response => dispatch({type: 'DELETE_MOOD', payload: response }))
    }
}