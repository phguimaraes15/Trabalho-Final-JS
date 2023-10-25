function jsonData(url){
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

async function getAPI() {
    const data = await jsonData('https://jsonplaceholder.typicode.com/users')
    userSelection(data)
}

getAPI()

function userSelection(data){
    let select = document.getElementById("users")
    
    data.map((item) =>{
        let option = document.createElement('option')
        option.textContent = item.name
        select.appendChild(option)
    })
}

