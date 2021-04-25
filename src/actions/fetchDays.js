export function fetchDays(action) {
    console.log('inside fetch days')
    fetch('http://localhost:3000/api/v1/days')
    .then(response => response.json())
    .then(response => console.log(response))
}
