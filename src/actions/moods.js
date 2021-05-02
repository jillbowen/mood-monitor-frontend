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
        .then(response => dispatch({type: 'ADD_MOOD', payload: response}))
    }
}