import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import axios from 'axios';
import './App.css';

class App extends Component {
  // api.get('/').then(res => {
  //     console.log('inja')
  //     console.log(res.data)
  //     console.log(res.data)
  //     setdoctors(res.data);
  //     console.log(doctors);
  // })
  

  constructor() {
    super()
    this.state = {
      listDr: [],
      searchfield: ''
    }
    }
  componentDidMount() {
    // fetch('https://thdev.atiehhospital.ir/odata/PhysicianDto')
    //   .then(response=> console.log(response))
    //   .then(users => {this.setState({ listDr: users});});
    this.testFunction();
  }

  async testFunction(){
    let data =await axios.create({baseURL: 'https://thdev.atiehhospital.ir'}).get('/odata/PhysicianDto').then(({data}) => data);
    this.setState({listDr: data.value});
    // console.log('data:');
    // console.log(data);
    // console.log('value:');
    // console.log(data.value);
    console.log(this.groupBy(data.value,dr=>dr.BeneficiaryGroupName));


  }



 groupBy=(list, keyGetter)=> {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}





  


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    
    
    
    
    //

    

    //

    const { listDr, searchfield } = this.state;
    console.log(listDr);

    var elements = [];
    // for (var i = 0; i < this.groupBy(listDr,dr=>dr.BeneficiaryGroupName).keys.length; i++) 
    // {

    // }
    const filteredDrList =listDr.filter(drList =>{
      return drList.UserFullName.toLowerCase().includes(searchfield.toLowerCase());
    });
    this.groupBy(filteredDrList,dr=>dr.BeneficiaryGroupName).forEach((value, key) => {
      console.log('yalda')
      console.log(value);

              elements.push(
          <div >
          <span>
            <h2>{value[0].BeneficiaryGroupName}</h2>
          </span>
             <CardList listDr={value} /> 
             
          </div>
        );
    console.log(key, value);
});



    return !listDr.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>hospital Dream</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
    
            {/* <CardList listDr={filteredDrList} /> */}
           {elements}
          </Scroll>
        </div>
      );
  }
}

export default App;