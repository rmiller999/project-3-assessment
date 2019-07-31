import React from 'react';
import logo from './logo.svg';
import Posts from './Posts';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      title: '',
      body: '',
      posts: [],
      page: 1

    }
  }


  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.page}`).then(result => {
      this.setState({
        userId: result.data.userId,
        title: result.data.title,
        body: result.data.body,
        posts: result.data,
        // page: this.state.page = 1
      })
    })
  }

  pageForward = () => {
    // if (this.state.page > 10) {
    //   this.state.page = 1
    // }

    var newPage = this.state.page;
    newPage++;
    // this.state.page ++
    if (newPage >= 11) {
      newPage = 1
    }
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${newPage}`).then(result => {
      this.setState({
        userId: result.data.userId,
        title: result.data.title,
        body: result.data.body,
        posts: result.data,
        page: newPage
      })
    })

    // if (this.state.page >= 11) {
    //   this.state.page = 1
    // }

  }


  pageBack = () =>{
    // if (this.state.page < 1) {
    //   this.state.page = 10
    // }
    var newPage = this.state.page;
    newPage--;
    // this.state.page ++
    if (newPage <= 0) {
      newPage = 10
    }
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${newPage}`).then(result => {
      this.setState({
        userId: result.data.userId,
        title: result.data.title,
        body: result.data.body,
        posts: result.data,
        page: newPage
      })
    })
    // if (this.state.page <= 1) {
    //   this.state.page = 10
    // }

  }


  render() {

    console.log(this.state.page)
    return (
      <>

      <div className="app">
        <h1>Cycle Through Users:</h1>
        <button onClick={()=> {this.pageBack()}}> back </button>
        <button onClick={()=> {this.pageForward()}}> forward </button>
      </div>
        <Posts posts={this.state.posts}/>
        <div>
          
        </div>
      </>
    )
  }
}

export default App;
