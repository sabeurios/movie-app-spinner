import React from 'react';
import './App.css';
import MoviePage from './page/movie-page';
import Spinner from './components/Spinner/spinner';


class App extends React.Component {
  
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading:false})
  }, 5000);
    }

  render(){
    if (this.state.loading) 
      return <Spinner loading={this.state.loading}/>;
    return (
      <div className="App">
          <MoviePage />
      </div>
    );
  }  
}

export default App;
