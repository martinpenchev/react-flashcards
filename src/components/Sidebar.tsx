import React from "react";
import Timer from "./Timer";

import { connect } from 'react-redux';
import { QuitQuiz } from '../actions/';

class Sidebar extends React.Component<any, {}> {
    render() {
        return(
                <div 
                    className="position-absolute fixed-top vh-100"
                    style={{
                        width: "200px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        paddingTop: "56px"
                    }}
                >
                    <ul className="flex-column list-unstyled">
                        <li className="py-3 mb-3">
                            <div className="h1">
                                <Timer stop={!this.props.timer} />
                            </div>
                            <div className="text-muted">Time elapsed</div>
                        </li>
                        <li className="py-3 mb-3">
                            {this.props.done
                            ?
                                <div className="h1">Done!</div>
                            :
                                <div className="h1">{`${this.props.current}\\${this.props.total}`}</div>
                            }
                            <div className="text-muted">Flashcards</div>
                        </li>
                        <li className="py-3 mb-3">
                            <div className="h1">{this.props.points}</div>
                            <div className="text-muted">Current score</div>
                        </li>
                        <li className="py-3 mb-3">
                            <button 
                                className="btn btn-danger btn-sm px-5"
                                onClick={() => this.props.QuitQuiz()}
                            >
                                Quit
                            </button>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default connect(null, { QuitQuiz })(Sidebar);