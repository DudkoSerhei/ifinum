import React, { Component } from 'react';
import PageContent from '../../page-content/components/page-content.component';
import './app.component.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <PageContent />
      </div>
    );
  }
}

export default App;
