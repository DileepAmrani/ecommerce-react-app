import React from 'react'
import PrimarySearchAppBar from '../../Component/NavBar/AppBar'
import Paper from '@material-ui/core/Paper';
import '../../Container/CheckOut/CheckOut.css'
import { InputPage } from '../../Component/Inputs/Input'
import TextButtons from '../../Component/Button/Button'
import { firebaseApp } from '../../Config/Firebase/firbase';

class CheckOut extends React.Component {
    constructor() {
        super()
        this.state = {
            // count: 0,
            myCart: []
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
                    userName : val.displayName,
                    phoneNumber : val.phoneNumber,
                    email : val.email,
                })
            })
        }
    }

    proccedToOrder =()=>{
        console.log(this.state)
        try{
            firebaseApp.firestore().collection('orders').add(this.state)
            alert('Order is Sumbited');
            localStorage.removeItem('MyCart')
            this.state.product.splice(0)
        }
        catch(err){
          alert("Please Fill All Fields Data")
        }
    }

    render() {
        let { myCart, userName , email , phoneNumber, address, zipCode, state} = this.state
        console.log(this.state)
        return (
            <div>
                <PrimarySearchAppBar myCart={myCart} />

                <div style={{ float: 'left', display: 'flex', margin: '20px' }}>
                    <Paper className='checkOutPaper'>
                        <h2 >Check Out Form</h2>
                        <InputPage type='text' name='Name' value={userName} onchange={(e) => { this.setState({ userName: e.target.value }) }}/>
                        <InputPage type='email' name='Email' value={email} onchange={(e) => { this.setState({ email: e.target.value }) }}/>
                        <InputPage type='text' name='Adress' value={address} onchange={(e) => { this.setState({ address: e.target.value }) }}/>
                        <InputPage type='number' name='Phone No.' value={phoneNumber} onchange={(e) => { this.setState({phoneNumber : e.target.value }) }}/>
                        <InputPage type='text' name='State' value={state} onchange={(e) => { this.setState({state : e.target.value }) }}/>
                        <InputPage type='number' name='Area Zip Code' value={zipCode} onchange={(e) => { this.setState({zipCode : e.target.value }) }}/>
                        <TextButtons name='Place Order'  onclick={this.proccedToOrder}/>
                    </Paper>
                </div>
                <div style={{ display: 'flex', margin: '20px' }}>
                    <Paper className='checkOutPaper'>
                        <h2 className='App'>Your Items</h2>
                                <tr>
                                    <th style={{padding: '20px'}}>No.</th>
                                    <th style={{padding: '20px'}}>Image</th>
                                    <th style={{padding: '20px'}}>Name</th>
                                    <th style={{padding: '20px'}}>Prize</th>
                                    <th style={{padding: '20px'}}>Quantity</th>
                                    <th style={{padding: '20px'}}>Total Prize</th>
                                </tr>
                        {
                            myCart.map((v, i) =>
                                <tr>
                                    <td style={{padding: '20px'}}>{i + 1}</td>
                                    <td style={{padding: '20px'}}><img src={v.image} alt='Product' width='50px' /></td>
                                    <td style={{padding: '20px'}}>{v.name}</td>
                                    <td style={{padding: '20px'}}>{v.prize}</td>
                                    <td style={{padding: '20px'}}>{v.count}</td>
                                    <td style={{padding: '20px'}}>{v.prize * v.count}</td>
                                </tr>
                            )

                        }


                    </Paper>
                </div>
            </div>
        )
    }
}

export default CheckOut