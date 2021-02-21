import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

// State
import { connect } from 'react-redux';
import { RootState } from '../types';

// components
import NavigationBar from './Nav';

// pages
import HomePage from '../pages/HomePage';
import HelpPage from '../pages/HelpPage';
import QuizPage from '../pages/QuizPage';

class App extends Component<any> {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        {this.props.quizMode ? <Redirect to="/quiz" /> : null}
        <NavigationBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/help" component={HelpPage} />
        <Route exact path="/quiz" component={QuizPage} />
      </Router>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  quizMode: state.quizMode
});

export default connect(mapStateToProps)(App);
