import {firebaseApp, provider} from '../Firebase/firbase'


function login(data){
    return new Promise((resolve,reject)=>{
        firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password).then(user=>{
            resolve("user ==>",user.emailVerified)
        }).catch(function(error) {
            reject(error.message);
            // ...
          });
    })
}

function loginWithFacebook() {
    return new Promise((resolve, reject) => {
      provider.setCustomParameters({
        'display': 'popup'
      });
      firebaseApp.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user;
        console.log(user)
        resolve(user)
      }).catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage)
        reject(errorMessage)
      });
  
    })
  
  }

  // let authFunc = () => {

  //   return new Promise((resolve, reject) => {
  //     firebaseApp.auth().onAuthStateChanged(function (user) {
  //       if (user) {
  //         resolve(user)
  //       } else {
  //         reject(false)
  //       }
  
  //     })
  
  //   });
  // }


  let logout= ()=>{
    return new Promise ((resolve,reject)=>{
        firebaseApp.auth().signOut().then((res)=>resolve(res)).catch((err)=>reject(err))
    })
  
  }

export {
    login, loginWithFacebook, logout
}