const getData = () => {
    return fetch('../db/db.json')
        .then((response) => {
            return response.json()
        })
}

export default getData