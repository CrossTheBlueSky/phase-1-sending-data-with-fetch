// Add your code here




function submitData(name, email){

    const userData = {
        name: `${name}`,
        email: `${email}`
    }

    const postObject = {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", postObject)
    .then((res)=>{
        
        return res.json()
    })
    .then((data)=>{
        putOnScreen(data.name, data.email, data.id)})
        .catch((err)=>{
            const docBody = document.getElementById("body")
            docBody.innerHTML = `
            <h1>Someone fucked up </h1>
            <h2>${err}`
        })
}

function putOnScreen(name, email, id){
   
    const docBody = document.getElementById("body")
    docBody.innerHTML = `
    <h1>${name}</h1>
    <h2>${email}</h2>
    <h3>${id}</h3>
    `
}
