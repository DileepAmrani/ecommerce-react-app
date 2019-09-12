import React from 'react';
import PrimarySearchAppBar from '../../Component/NavBar/AppBar'
import Slider from '../../Component/Slider/Slider'
import Banner from '../../Images/BANNER.jpg'
import '../../Container/Home/Home.css'
import EcommercePage from '../../Component/Product/Product'
import FooterPage from '../../Container/Footer/Footer'
import { firebaseApp } from '../../Config/Firebase/firbase'

class Home extends React.Component {
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

        let uid = localStorage.getItem('id')

        if(uid){
            firebaseApp.firestore().collection('users').doc(JSON.parse(uid)).get().then(data=>{
                let val = data.data()
                console.log(val)

            })
        }

    }
    render() {
        let { myCart, products } = this.state
        console.log("====>", products)
        return (
            <div>
                <PrimarySearchAppBar myCart={myCart} path={this.props} />
                <Slider />
                <div style={{ margin: '10px auto' }}>
                    <img src={Banner} alt='Banner' className="bannerImage" />
                </div>

                {/* <div className='App categories'>
                    <OutlinedChips name='Pakistani Jewellery' />
                    <OutlinedChips name='Indian Jewellery' />
                    <OutlinedChips name='American Jewellery' />
                    <OutlinedChips name='Austraian Jewellery' />
                </div> */}

                <div >
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


export default Home