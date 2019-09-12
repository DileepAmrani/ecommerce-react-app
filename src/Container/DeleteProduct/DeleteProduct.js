import React from 'react'
import PersistentDrawerLeft from '../../Component/NavBar/SideNav'
import '../../Container/Dashboard/Dashboard.css'
import { firebaseApp } from '../../Config/Firebase/firbase'
import TextButtons from '../../Component/Button/Button'

class DeleteProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            myCart: [],
            products: []
        }
    }
    componentDidMount() {
        let myLocalCart = localStorage.getItem("MyCart")
        if (myLocalCart) {
            this.setState({
                myCart: JSON.parse(myLocalCart)
            })
        }

        let { products } = this.state
        firebaseApp.firestore().collection("product").get()
            .then((snapshot) => {
                snapshot.forEach(doc => {
                    let getproducts = doc.data()
                    getproducts.id=doc.id
                    products.push(getproducts)
                    this.setState({
                        products: products
                    })
                })
            })

    }

    delete = async (v,i) => {

        let {products} = this.state
        await firebaseApp.firestore().collection('product').doc(v.id).delete().then(
            products.splice(i,1)          
        )
        this.setState({
            products:products
        })
        
    }
    render() {
        let { products } = this.state
        console.log(products)
        return (
            <div>
                <PersistentDrawerLeft history={this.props.history} />
                <div style={{ marginTop: '100px' }}>
                    <h1 className='App'>Delete Product</h1>
                    <table style={{margin: 'auto'}}>
                        <tr>
                            <th><h3>Image</h3></th><th><h3>Product Name</h3></th><th><h3>Prize</h3></th><th><h3>Description</h3></th><th><h3>Delete</h3></th>
                        </tr>
                        {
                            products.map((v, i) => {
                                return <tr>
                                    <td> <img src={v.imageUrl} width='100px' /></td><td><span>{v.name}</span></td>
                                    <td><span>{v.prize}</span></td><td><span>{v.description}</span></td>
                                    <td><TextButtons onclick={()=> this.delete(v,i)} name='Delete Product'/></td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}

export default DeleteProduct;