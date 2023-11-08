const promiseOne = new Promise(function(reslove,reject){
    //Do an async task
    //DB calls, cryptograph
    setTimeout(function(){
        console.log("Async JS task Completed.");
        reslove();
    },1000)
})

//The callback to execute when the Promise is resolved.Attaches callbacks for the resolution and/or rejection of the Promise.
//@returns — A Promise for the completion of which ever callback is executed.
//then is connected to reslove
promiseOne.then(function(){
    console.log("Promise consumed")
})

//simplifed code

new Promise(function(reslove,reject){
    setTimeout(()=>{
        console.log("Async task 2")
        reslove();
    },1000)
}).then(()=>{
    console.log("Async 2 resloved.")
})


const promiseThree = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove({username:"Ranga",email:"oak.T@mail.com"})

    },1000)
})

promiseThree.then((user)=>{
    console.log(user)

})

const promiseFour = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            reslove({username:"Ranga",password:"@1232"})
        }else{
            reject('ERROR: Something went Wrong')
        }
    },1000)

})

// This below scenario will give the error triggerUncaughtException(err, true /* fromPromise */);
// Because of [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went Wrong".] { code: 'ERR_UNHANDLED_REJECTION'}
// const userName = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })

// console.log(userName)

promiseFour
.then((user)=>{
    console.log(user);
    return  user.username
})
.then((myname)=>{
    console.log(myname)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("The Promise is either resloved or rejected."))

const promiseFive = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        let err = true;
        if(!err){
            reslove({programming:"JavaScript",FileExtension: "js"})
        }else{
            reject("ERROR: JS Went Wrong!!")
        }
    },1000)

})

//async await 

// This below method give error since we didn't handle reject -> i.e., rejection (error)

async function consumePromiseFive(){
     const response = await promiseFive;
     console.log(response);
}

//consumePromiseFive()

// To Avoid Above Problem we can use try and catch

async function consumePromise(){
    
    try{
        const response = await promiseFive;
        console.log(response);
    }catch(err){
        console.log(err);
    }
}

consumePromise()

// Since we used asynchronous Javascript we got output of try and catch , even we have error in before consumePromiseFive() is before to it.

//gettodos()

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log("E:",err))

 async function gettodoLists(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("We can't fetch data of todoLists")
    }

 }