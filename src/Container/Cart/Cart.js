import React from "react";
import BasicTable from '../../Component/Table/Table'
import PrimarySearchAppBar from "../../Component/NavBar/AppBar"


class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
        count: 0,
        myCart : []
    }
}
componentDidMount(){
    let myLocalCart = localStorage.getItem("MyCart")
    if(myLocalCart){
        this.setState({
            myCart: JSON.parse(myLocalCart)
        })
    }
  }

  deleteProduct=(i)=>{
    let {myCart} = this.state;
    myCart.splice(i,1);
    this.setState({
      myCart:myCart,
    })

    console.log(i)
    let myLocalCart = JSON.parse(localStorage.getItem("MyCart"))
    myLocalCart.splice(i, 1)
    localStorage.setItem('MyCart', JSON.stringify(myLocalCart))

}
  render(){
    let {  myCart } = this.state
    {console.log(this.props.location.state)}
    return(
      <div>
        <PrimarySearchAppBar myCart={myCart} path={this.props}/>
        <BasicTable myCart={myCart} onClick={this.deleteProduct} path={this.props}/>
      </div>
    )
  }
}
export default Cart