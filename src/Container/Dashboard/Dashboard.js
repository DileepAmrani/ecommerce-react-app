import React from 'react'
import PersistentDrawerLeft from '../../Component/NavBar/SideNav'
import '../../Container/Dashboard/Dashboard.css'
import { firebaseApp } from '../../Config/Firebase/firbase'

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            myCart: [],
            products: [],
            orders: [],
            users : []
        }
    }
    componentDidMount() {
        let myLocalCart = localStorage.getItem("MyCart")
        if (myLocalCart) {
            this.setState({
                myCart: JSON.parse(myLocalCart)
            })
        }

        let { products, orders, users } = this.state
        firebaseApp.firestore().collection("product").get()
            .then((snapshot) => {
                snapshot.forEach(doc => {
                    let getproducts = doc.data()
                    products.push(getproducts)
                    this.setState({
                        products: products
                    })
                })
        })

        firebaseApp.firestore().collection("users").get()
            .then((snapshot) => {
                snapshot.forEach(doc => {
                    let getusers = doc.data()
                    users.push(getusers)
                    this.setState({
                        users: users
                    })
                })
        })

        firebaseApp.firestore().collection("orders").get()
        .then((snapshot) => {
            snapshot.forEach(doc => {
                let getorders = doc.data()
                orders.push(getorders)
                this.setState({
                    orders: orders
                })
            })
    })
    }
    render() {
        let { products , orders, users} = this.state
        return (
            <div>
                <PersistentDrawerLeft history={this.props.history}/>
                <div className='product_container1'>
                    <div className='products1'>
                        <h1 className='BoxName'>User</h1>
                        <h1 className='BoxName'>{users.length}</h1>
                    </div>
                    <div className='products1'>
                        <h1 className='BoxName'>Products</h1>
                        <h1 className='BoxName'>{products.length}</h1>
                    </div>
                    <div className='products1'>
                        <h1 className='BoxName'>Sell</h1>
                        <h1 className='BoxName'>0</h1>                    
                    </div>
                    <div className='products1'>
                        <h1 className='BoxName'> Orders</h1>
                        <h1 className='BoxName'>{orders.length}</h1>
                    </div>
                </div>
                <div className='orders'>
                
                        <h1  className='App'>Orders</h1>
                            <div>
                             <table>
                                 <tr>
                                 <th className='td'>Name</th> <th className='td'>Contact</th>
                                 <th className='td'>Email</th><th className='td'>State</th> 
                                 <th className='td'>Zip Code</th><th className='td'>View Detail</th>
                                 
                                 </tr>
                    {
                        orders.map((v,i)=>
                                <tr>
                                    <td  className='td'>{v.userName}</td> <td className='td'>{v.phoneNumber}</td>
                                    <td className='td'>{v.email}</td><td className='td'>{v.state}</td>
                                    <td className='td'>{v.zipCode}</td> 
                                    <td className='td' style={{color: 'blue'}}>Detail</td> 
                                </tr>
                            )
                        }
                        </table>   
                       </div> 
                </div>
            </div>
        )
    }
}

export default Dashboard;