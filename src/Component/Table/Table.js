import React from 'react';
import Paper from '@material-ui/core/Paper';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import TextButtons from '../../Component/Button/Button'
import '../../Component/Table/Table.css'
import { Link } from "react-router-dom";


class BasicTable extends React.Component {
    constructor(){
        super()
        this.state={
            totalPrize : 0
        }
    }


    
    order = () => {
        let uid = localStorage.getItem('id')

        if(uid){
            this.props.path.history.push('/checkout')
        }
        else{
            this.props.path.history.push('/login',{check:true})
        }

    }
    render(){
        return (
            <div style={{ margin: "20px" }}>
            <Paper >
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Prize</th>
                            <th>Quantity</th>
                            <th>Total Prize</th>
                            <th>Remove</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {this.props.myCart.length ? this.props.myCart.map((v, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={v.image} alt='Product' width='50px'/></td>
                                <td>{v.name}</td>
                                <td>{v.prize}</td>
                                <td>{v.count}</td>
                                <td>{v.prize * v.count}</td>
                                <td style={{cursor: 'pointer'}} onClick={()=> this.props.onClick(index)}>x</td>
                            </tr>
                        )
                        :
                            <h1 style={{ textAlign: 'center' }}>
                                Your Cart is Empty
                            </h1>
                        }

                    </MDBTableBody>
                    <MDBTableHead>
                        <tr style={{borderTop:'2px solid black'}}>
                            <th colSpan="3"></th>
                            <th>Prize</th>
                            <th>Quantity</th>
                            <th colSpan='2'>Total Prize</th>
                        </tr>
                    </MDBTableHead>
                </MDBTable>
                <TextButtons name='Check Out' className="checkoutBtn" onclick={this.order}/>
            </Paper>
        </div>
    );
}
}

export default BasicTable;