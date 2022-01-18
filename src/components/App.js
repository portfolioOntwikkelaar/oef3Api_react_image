import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios'
import ImageList from './ImageList';
// import './style.css'


class App extends React.Component {
  constructor(props){
    
    super(props)
    this.state = {images: [] }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
}
  async onSearchSubmit(entry) {
    // console.log(entry)
    const response = await axios.get(`https://pixabay.com/api/?key=20727856-d52644f8c0aa870aa808665f1&q=${entry}&image_type=photo`)
    console.log(response.data.hits)
    this.setState({images: response.data.hits})
  }
  render() {
 
    return (
      <div className='ui container' style={{marginTop: '30px'}}><SearchInput onSearchSubmit={this.onSearchSubmit} />
      <ImageList className="forexample" images= {this.state.images} /></div>
      
      )}
  }

    export default App;