
const handleSubmit= (event) =>{
    event.preventDefault()

    const articleUrl = document.getElementById('article-url').value //getting the article url from the user
    console.log(articleUrl)
    const postData = async (url = '', data={}) => { // getting data from the server and posting it to client
        console.log(data)
        const response = await fetch(url,{
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        try{
            const newData = await response.json()
            console.log(newData)
            
            return newData
        }catch(error){
            console.log(error)
        }
    }
    
    if(Client.checkForURL(articleUrl)){ // checking if it is a valid Url
        document.getElementById('status').innerHTML='Processing'
        postData('/submit',{articleUrl:articleUrl}) // getting the data from the server and post it to the UI
        .then(data=>{
            console.log(data)
            document.getElementById('agree').innerHTML=`Agreement : ${data.agreement}`
            document.getElementById('subject').innerHTML=`Subjectivity: ${data.subjectivity}`
            document.getElementById('conf').innerHTML=`Confidence : ${data.confidence}`
            document.getElementById('iron').innerHTML=`Irony : ${data.irony}`
            document.getElementById('score').innerHTML=`Score : ${checkScore(data.score_tag)}`
            document.getElementById('status').innerHTML=''
        })
    }else{
        document.getElementById('status').innerHTML='Please enter a valid URL'
        document.getElementById('agree').innerHTML=''
        document.getElementById('subject').innerHTML=''
        document.getElementById('conf').innerHTML=''
        document.getElementById('iron').innerHTML=''
        document.getElementById('score').innerHTML=''
    }
    
}
const checkScore = (score) =>{ // check for the score_tag to have a meaningful text
    let newScore
    switch (score) {
        case 'P+':
            newScore = 'VERY POSITIVE'
            break;
        case 'P':
            newScore = 'POSITIVE'
            break;
        case 'NEW':
            newScore = 'NEUTRAL'
            break;
        case 'N':
            newScore = 'NEGATIVE'
            break;
        case 'N+':
            newScore = 'VERY NEGATIVE'
            break;
        case 'NONE':
            newScore = 'NO SENTIMENT'
            break;
        default:
            break;
    }
    return newScore
}

export {
    handleSubmit,
    checkScore
}