function onPageLoad(){

    fetch("https://randomuser.me/api/?results=50")
    .then(function response(data){
        

        data.json().then(response =>{
            insertUser(response.results)
        })

    })

    loadComponents()

}

function insertUser(data){
    console.log(data)
}

function loadComponents(){
    console.log("loadComponents")
}