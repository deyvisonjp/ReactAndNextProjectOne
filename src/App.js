import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'O título',
        body: 'O Corpo'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O Corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O Corpo 3'
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1> { post.title } </h1>
            <p> {post.body} </p>
          </div>
        )
      )}
      </div>
    );
  }

}
export default App;