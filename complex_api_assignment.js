function fetchRequest(username) {
    fetch('https://api.github.com/users/' + username + '/repos')
    .then(response =>{
        if(response.ok){
            response.json()
            .then(responseJson => console.warn(responseJson))
            .then(responseJson => displayResults(responseJson))
        } else{
            throw new Error(response.statusText)
        }
    })
    .catch(error => console.log("Oh No! Something went wrong! Try again later I guess?"))
}

function displayResults(responseJson) {
    for (let i = 0; i < responseJson.message.length; i++){
        console.log(responseJson.message[i])
    }
    $(".section").replaceWith(
        `<section class="results"></section>`
    )
}

function testing() {
    $(".submit_button").click(function(event){
        event.preventDefault()
        let username = $(".username").val()
        console.log(username)
        fetchRequest(username)
    })
}

testing()