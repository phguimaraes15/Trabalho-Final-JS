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
let spans = document.querySelector('span')

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
        console.log(select.value)
        //let findData = data.find(item => item.name === select.value)
        //spans[0].textContent = findData.id
    })
}

