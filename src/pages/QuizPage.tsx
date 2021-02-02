import React from 'react';

// State
import { connect } from 'react-redux';
import { HideBackSide, StartTimer, StopTimer, AddPoints, newQuiz } from '../actions/';
import { RootState, JsonObj } from '../types/';

// Components
import Flashcard from '../components/Flashcard';
import Sidebar from '../components/Sidebar';
import { Redirect } from 'react-router-dom';


class QuizPage extends React.Component<any, {counter: number, length: number}> {
    constructor(props: any) {
        super(props);

        this.state = {
            counter: 0,
            length: 0,
        }
    }

    NextCard = (response: string) => {
        if(this.state.counter < this.state.length - 1) {

            // Adding points based on the result
            switch(response) {
                case 'Easy':
                    this.props.AddPoints(10);
                    break;
                case 'Again':
                    this.props.AddPoints(5);
                    break;
                case 'Difficult':
                    this.props.AddPoints(0);
                    break;
            }

            this.props.HideBackSide();
            this.setState({counter: this.state.counter + 1});

        } else {
            // Stop the timer when all flashcards have been shown
            this.props.StopTimer();
        }
    }

    restartQuiz = () => {
        this.props.newQuiz();
        this.setState({counter: 0});
    }

    componentDidMount() {
        this.props.StartTimer();
        this.setState({length: this.props.cards.length});
    }

    render() {
        const CardComponents = this.props.cards.map((card: JsonObj, idx: number) => {
            return <Flashcard id={idx} front={card.front} back={card.back} nextCard={this.NextCard} />;
        });

        return (
            <>
                {this.props.quizMode ? null : <Redirect to="/" />}
                <Sidebar 
                    current={this.state.counter+1}
                    total={this.state.length}
                    timer={this.props.timer}
                    points={this.props.points}
                    done={!this.props.timer}
                />
                {this.props.timer
                ?
                    CardComponents[this.state.counter]
                :
                    <>
                    <div className="h1 text-dark px-5 mx-auto">
                        Final score {`${this.props.points} / ${this.state.length * 10}`}
                    </div>
                    <button 
                        className="btn btn-secondary btn-sm px-5"
                        onClick={() => this.restartQuiz()}
                    >
                        Try again ?
                    </button>
                    </>
                }
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    cards: state.cards,
    quizMode: state.quizMode,
    timer: state.timer,
    points: state.points
});

export default connect(mapStateToProps, { HideBackSide, StartTimer, StopTimer, AddPoints, newQuiz })(QuizPage);