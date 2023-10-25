function jsonData(url){
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

async function getAPI() {
    const data = await jsonData('https://jsonplaceholder.typicode.com/users')
    console.log(data)
}

getAPI()

