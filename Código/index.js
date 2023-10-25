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

let select = document.getElementById("users")
let spans = document.querySelectorAll('span')

function userSelection(data){
    
    data.map((item) =>{
        let option = document.createElement('option')
        option.textContent = item.name
        select.appendChild(option)
    })

    handleSelectionChange(data)
}

function handleSelectionChange(data){

    select.addEventListener('change', () => {
        let findData = data.find(item => item.name === select.value)
        spans[0].textContent = findData.id
        spans[1].textContent = findData.username
        spans[2].textContent = findData.email
        spans[3].textContent = findData.phone
        spans[4].textContent = findData.website
        spans[5].textContent = findData.company.name
    })
}

