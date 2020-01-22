function fetchRequest(username) {
    fetch('https://api.github.com/users/:' + username + '/repos')
    .then(response =>{
        if(response.ok){
            response.json()
        } else{
            throw new Error(response.statusText);
        }
    })
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log("Oh No! Something went wrong! Try again later I guess?"))
}

function displayResults() {
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