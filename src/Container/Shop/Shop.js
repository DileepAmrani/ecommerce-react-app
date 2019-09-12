import React from 'react';
import PrimarySearchAppBar from '../../Component/NavBar/AppBar'
import FooterPage from '../../Container/Footer/Footer'
import EcommercePage from '../../Component/Product/Product'
import { firebaseApp } from '../../Config/Firebase/firbase'
import Paper from '@material-ui/core/Paper';
import OutlinedChips from '../../Component/Chips/Chips'
import '../../Container/Shop/Shop.css'

class Shop extends React.Component {
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
                    products.push(getproducts)
                    this.setState({
                        products: products
                    })
                })
            })

    }

    filter = (category) => {
        console.log(category)
        let myLocalCart = localStorage.getItem("MyCart")
        if (myLocalCart) {
            this.setState({
                myCart: JSON.parse(myLocalCart)
            })
        }

        let { products } = this.state
        products = []
        firebaseApp.firestore().collection("product").where( 'category', '==', category ).get()
            .then((snapshot) => {
                console.log(snapshot)
                snapshot.forEach(doc => {
                    let getproducts = doc.data()
                    console.log(getproducts)
                    products.push(getproducts)
                    this.setState({
                        products: products
                    })
                })
            })
    }

    render() {
        let { myCart, products } = this.state

        return (
            <div>
                <PrimarySearchAppBar myCart={myCart}  path={this.props}/>
                <div className='product_container'>
                    <div className='category'>
                        <Paper>
                            <div className='App categories'>
                                <OutlinedChips name='Jhumar &amp; Mathapatti' onclick={()=> this.filter('Jhumar & Mathapatti')}/>
                                <OutlinedChips name='Bangles &amp; Bracelets'  onclick={()=> this.filter('Bangles & Bracelets')} />
                                <OutlinedChips name='Necklace Sets, Sets'  onclick={()=> this.filter('Necklace Sets, Sets')} />
                                <OutlinedChips name='Rings'  onclick={()=> this.filter('Rings')}/>
                            </div>
                        </Paper>
                    </div>
                    <div className='product_container' >
                        {
                            products.map((val, index) => {
                                return <div className='products'>
                                    <EcommercePage key={index} history={this.props.history} name={val.name} image={val.imageUrl} prize={val.prize} description={val.description} />
                                </div>
                            })
                        }
                    </div>
                </div>
                <FooterPage />
            </div>

        )
    }
}


export default Shop

