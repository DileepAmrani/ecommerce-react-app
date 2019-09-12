import React from 'react';
import PersistentDrawerLeft from '../../Component/NavBar/SideNav'
import Paper from '@material-ui/core/Paper';
import { InputPage } from '../../Component/Inputs/Input'
import TextButtons from '../../Component/Button/Button'
import { firebaseApp } from '../../Config/Firebase/firbase'


class AddProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      prize: '',
      description: '',
      imageUrl: '',
      category: "",
    }
  }


  async imageUpload(e) {
    let fileName = e.target.files[0].name
    let ref = firebaseApp.storage().ref('/').child(`images/${fileName}`)
    await ref.put(e.target.files[0])
    ref.getDownloadURL().then( (url)=>{
      console.log(url);
     let productUrl = url
     this.setState({
       imageUrl: productUrl
     })
    });
  }

  sendProduct = ()=>{
    alert('Product Sent')
    console.log(this.state)
    firebaseApp.firestore().collection('product').add(this.state)
  }


  render() {
    let { name, prize, description, file, category } = this.state
    console.log(this.state)
    return (

      <div>
        <PersistentDrawerLeft history={this.props.history}/>
        <Paper style={{ color: 'black', margin: "80px 30% 20px 30%", padding: '40px' }}>
          <h3 className='App'> Add Product </h3>

          <InputPage type='text' name='Product Name' value={name} onchange={(e) => { this.setState({ name: e.target.value }) }} />
          <InputPage type='number' name='Prize' value={prize} onchange={(e) => { this.setState({ prize: e.target.value }) }} />
          <InputPage type='text' name='Description' value={description} onchange={(e) => { this.setState({ description: e.target.value }) }} />
          <InputPage type='text' name='Category' value={category} onchange={(e) => { this.setState({ category: e.target.value }) }} />
          <InputPage type='file' name='Image URL' value={file} onchange={this.imageUpload.bind(this)} />

          <TextButtons name='Send' onclick={this.sendProduct} />

        </Paper>
      </div>
    );
  }
}

export default AddProduct;