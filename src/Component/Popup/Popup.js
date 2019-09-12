import React from "react";
import Popup from "reactjs-popup";
import '../../Component/Popup/Popup.css'
import { FaShoppingCart } from "react-icons/fa";


const ToolTipPositions = (props) => (
  <div className="example-warper" style={{ float: 'right' }}>
    <Popup
      trigger={<button className="button" style={{ background: 'none', color: "#fff", border: 'none'}}> <FaShoppingCart /> </button>}
      position="bottom right"
      on="hover"
    >
{
props.myCart.length ? 
props.myCart.map((v,i)=>{
  return (
    <div style={{ color: 'black', display: 'flex', textAlign: 'center' }}>
      <table>
        <tr>
          <td><img src={v.image} width="50px" /></td>
          <td><h5 style={{ fontSize: '15px' }}>{v.name}</h5></td>
          <td><h5 style={{ fontSize: '15px' }}>Rs: {v.prize}</h5></td>
          <td ><h5 style={{ fontSize: '15px' }}>{v.count}</h5></td>
        </tr>
      </table>
    </div>
    )
}
  )
    :
    <div >
    <h5 style={{ fontSize: '20px', color: 'black' }}>Your Cart is Empty</h5>
    </div>
}


    </Popup>

  </div>
);

export default ToolTipPositions