import React from 'react';
import Paper from '@material-ui/core/Paper';
import { InputPage } from '../../Component/Inputs/Input'
import '../../Container/AdminPanel/AdminPanel.css'
import TextButtons from '../../Component/Button/Button'
import {login} from '../../Config/Function/function'
// import history from '../../history'

class AdminPage extends React.Component {
  constructor(){
    super()
    this.state={
      login : false,
      email : "",
      password : ''
    }
  }

   login= async()=>{
     console.log(this.props)
     try{
       let user = await login(this.state);
       console.log(user);
       this.props.history.push('/dashboard')
    }
    catch(err){
      alert(err.message)
    }
  }

  render() {
  console.log(this.props)
  return (
      <div>
        <h3 style={{backgroundColor:"#2c4160", color: '#fff', padding: '10px', fontWeight: 'bolder', textAlign: 'center'}}>Welcome to Admin Panel</h3>
      <div>

      <div>
      <Paper className='Admin'>
      <h2 style={{fontWeight: 'bolder', textAlign: 'center', marginBottom: '50px', color: '#37474F', fontWeight: 'bolder'}}>Log In</h2>
      <InputPage name='Email' type='text' onchange={(e)=>{this.setState({email : e.target.value})}}/>
      <InputPage name='Password' type='password' onchange={(e)=>{this.setState({password : e.target.value})}}/>
      <TextButtons name='Log In' onclick={this.login}/> 
      </Paper>
      </div> 
     
      </div>
      </div>
    );
  }
}

export default AdminPage;