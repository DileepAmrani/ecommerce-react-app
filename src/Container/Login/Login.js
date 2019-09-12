import React from 'react';
import PrimarySearchAppBar from '../../Component/NavBar/AppBar'
import Paper from '@material-ui/core/Paper';
import '../../Container/Login/Login.css'
import SocialButtonsPage from '../../Component/Button/SocialButton'
import { loginWithFacebook } from '../../Config/Function/function'
import { firebaseApp } from '../../Config/Firebase/firbase';
// import { async } from 'q';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            myCart: [],
            products: [],
            isSignedIn: false,
            userData : ''
        }
    }
    componentDidMount() {
        let myLocalCart = localStorage.getItem("MyCart")
        if (myLocalCart) {
            this.setState({
                myCart: JSON.parse(myLocalCart)
            })
        }
        let uid = localStorage.getItem('id')

        if(uid){
            firebaseApp.firestore().collection('users').doc(JSON.parse(uid)).get().then(data=>{
                let val = data.data()
                console.log(val)
                this.setState({
                    userName : val.userName,
                    imageUrl : val.imageUrl,
                    isSignedIn : true

                })

            })
        }

     
    }

    loginWithFb = async() => {

       alert('Login In Successful')
       let userData = await loginWithFacebook()
       console.log(userData.displayName)
       if(userData){

        this.setState({
            userName : userData.displayName,
            imageUrl : userData.photoURL,
            phoneNumber : userData.phoneNumber,
            email : userData.email,
            isSignedIn : true
        })

        let user = {
            userName : userData.displayName,
            imageUrl : userData.photoURL,
            phoneNumber : userData.phoneNumber,
            email : userData.email,
        }
        console.log(this.state)
        firebaseApp.firestore().collection('users').doc(userData.uid).set(user)
        localStorage.setItem('id',JSON.stringify(userData.uid))
        if(this.props.location.state.check){
            this.props.history.push('/checkout')
        }
        if(this.props.location.state.check===false){
            this.props.history.push('/')
        }

       }
       
    }
    render() {
        let { myCart, userName, isSignedIn , userData, imageUrl} = this.state
        console.log("====>", userData)
        return (
            <div>
                <PrimarySearchAppBar myCart={myCart} path={this.props} />
                {
                    isSignedIn ?
                        <div className='loginDiv' style={{ margin: '50px 30%', minWidth: '300px', maxHeight: '450px' }}>
                            <Paper>
                                <img className='profile' src={imageUrl} alt='Profile' />
                                <h1 className='heading1'> { userName }</h1>
                            </Paper>
                        </div>
                        :
                        <div className='loginDiv' style={{ margin: '50px 30%', minWidth: '300px', maxHeight: '450px' }} >
                            <Paper >
                                <h1 className='heading'>Login With Facebook</h1>
                                <p className='paragraph'>Welocme to the Diamond Store</p>
                                <div style={{ margin: '20px 35%' }}>
                                    <SocialButtonsPage onclick={() => this.loginWithFb()} />
                                </div>
                            </Paper>
                        </div>
                }
            </div>
        )
    }
}



export default Login