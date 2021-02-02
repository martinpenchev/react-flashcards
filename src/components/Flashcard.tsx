import React from 'react';
import { connect } from 'react-redux';
import { ShowBackSide } from '../actions/';
import { RootState } from '../types';

class Flashcard extends React.Component<any, {}> {
    render() {
        const showBack = this.props.showBackSide ? "" : "invisible";

        return (
            <div className="container w-50">
                <div className="row my-0">
                    <div className="flashcard-side py-5 mx-auto">{this.props.front}</div>
                </div>
                <div className={`row ${showBack}`}>
                    <hr className="w-100" />
                </div>
                <div className={`row my-0 ${showBack}`}>
                    <div className="flashcard-side py-5 mx-auto">{this.props.back}</div>
                </div>
                {this.props.showBackSide
                ?
                    <div className="row d-flex justify-content-center">
                        <button 
                            className="btn btn-danger btn-sm px-5 py-2 mr-3"
                            onClick={() => this.props.nextCard("Difficult")}
                        >
                            Difficult
                        </button>
                        <button 
                            className="btn btn-warning btn-sm px-5 py-2 mr-3"
                            onClick={() => this.props.nextCard("Again")}
                        >
                            Again
                        </button>
                        <button 
                            className="btn btn-success btn-sm px-5 py-2"
                            onClick={() => this.props.nextCard("Easy")}
                        >
                            Easy
                        </button>
                    </div>
                :
                    <div className="row d-flex justify-content-center">
                        <button 
                            className="btn btn-secondary px-5"
                            onClick={() => this.props.ShowBackSide()}
                        >
                            Show backside
                        </button>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    showBackSide: state.showBack,
})

export default connect(mapStateToProps, { ShowBackSide })(Flashcard);