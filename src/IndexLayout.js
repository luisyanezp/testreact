import React, { Component } from 'react';
import fire from './fire';
import NavigationBar from './NavigationBar';

class IndexLayout extends Component {
  constructor(props) {
    super(props);
    this.state = { logedin: true }; // <- set up react state
  }
  componentWillMount(){
      //Nothing now
  }

  render() {
    return (
      <div className="IndexLayout">
        <NavigationBar></NavigationBar>
      </div>
    );
  }
}

export default IndexLayout;
