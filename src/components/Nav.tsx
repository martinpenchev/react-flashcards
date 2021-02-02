import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// State
import { connect } from 'react-redux';
import { RootState } from '../types/';

class NavigationBar extends Component<any, {}> {
    render() {
        const colorLogo = this.props.quizMode ? "text-warning" : "";

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link to="/" className={`navbar-brand ${colorLogo}`}>FLASHCARDS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {this.props.quizMode
                    ?
                        null
                    :
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link to="/help" className="nav-link">Instructions</Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    quizMode: state.quizMode
});

export default connect(mapStateToProps)(NavigationBar);