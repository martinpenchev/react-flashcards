import * as React from 'react';
import FileTransfer from '../components/FileTransfer';

// Store management
import { connect } from 'react-redux';
import { UploadContent, StartQuiz } from '../actions/';

// Types
import { JsonObj } from '../types';

class HomePage extends React.Component<any, {}> {

    sampleQuiz = (cards: Array<JsonObj>) => {
        this.props.UploadContent(cards);
        this.props.StartQuiz();
    }

    render() {
        const SAMPLE_CARDS = [
            {
              "front": "What are the different data types present in javascript?",
              "back": "String, Number, BigInt, Boolean, Undefined, Null, Symbol, Object"
            },
            {
              "front": "What is hoisting in javascript?",
              "back": "Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top."
            },
            {
              "front": "What is the difference between “ == “ and “ === “ operators?",
              "back": "The latter checks also for the same type."
            },
            {
              "front": "What is Implicit Type Coercion in javascript?",
              "back": "Implicit type coercion in javascript is automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types."
            },
            {
              "front": "Is javascript a statically typed or a dynamically typed language?",
              "back": "JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time."
            },
            {
              "front": "What is NaN property in JavaScript?",
              "back": "NaN property represents “Not-a-Number” value. It indicates a value which is not a legal number."
            },
            {
              "front": "What is an Immediately Invoked Function in JavaScript?",
              "back": "An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined."
            },
            {
              "front":"What is currying in JavaScript?",
              "back":"Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments."
            },
            {
              "front":"What are object prototypes?",
              "back":"A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object."
            },
            {
              "front": "What are callbacks?",
              "back": "Functions that are used as an argument to another function are called callback functions."
            }
        ]

        return (
            <div className="container">
                <FileTransfer />
                <div className="row my-4">
                    <button
                        className="btn btn-warning px-4 mx-auto"
                        onClick={() => this.sampleQuiz(SAMPLE_CARDS)}
                    >Try sample cards!</button>
                </div>
            </div>
        );
    }
}

export default connect(null, { UploadContent, StartQuiz })(HomePage);