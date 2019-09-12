
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import HalfRating from '../../Component/Rating/Rating'
import Button from '@material-ui/core/Button';
import { MdShoppingCart } from 'react-icons/md';
import PrimarySearchAppBar from "../../Component/NavBar/AppBar"


class CardExample extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            myCart : []
        }
    }


    addtoCart = () =>{
        let { myCart, count } = this.state
        let cart = {
            image: this.props.location.state.image,
            name: this.props.location.state.name,
            prize: this.props.location.state.prize,
            count: count
        }

        myCart.push(cart)
        this.setState({
            myCart : myCart
        })

        localStorage.setItem('MyCart', JSON.stringify(myCart))
    }
    componentDidMount(){
      let myLocalCart = localStorage.getItem("MyCart")
      if(myLocalCart){
          this.setState({
              myCart: JSON.parse(myLocalCart)
          })
      }
    }
    render() {
        let { count , myCart } = this.state
        console.log(myCart)
        return (

            <div>
                {console.log(this.props.location)}
                <PrimarySearchAppBar myCart={myCart} path={this.props}/>
                <div style={{ margin: "20px" }}>
                    <Paper style={{ padding: 20, display: "flex" }}>
                        <div style={{ marginRight: "10px" }}>
                            <img src={this.props.location.state.image} width="450px" />
                        </div>

                        <div style={{ marginTop: '10px' }}>
                            <h2>{this.props.location.state.name}</h2>
                            <HalfRating />
                            <p style={{ maxWidth: '300px' }}>{this.props.location.state.description}</p>
                            <h3 style={{ color: "#2c4160" }}>  Rs: ${this.props.location.state.prize}</h3>
                            <h3>Quantity:</h3>
                            <div style={{ display: 'flex', border: '1px solid', justifyContent: "space-between", width: "25%" }}>
                                <button onClick={() => count > 1 && this.setState({ count: count -1})} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                                <h5 style={{ color: "#9C27B0", marginTop: "2px", padding: '0px 5px' }}>{count}</h5>
                                <button onClick={() => this.setState({ count: count + 1 })} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                            </div>
                            <Button size="large" style={{ color: "#fff", backgroundColor: "#2c4160", marginTop: "30px" }} onClick={()=>this.addtoCart()}>
                                <MdShoppingCart />Add to Cart
                           </Button>
                        </div>
                    </Paper>
                </div>


            </div>
        )
    }
}

export default CardExample;