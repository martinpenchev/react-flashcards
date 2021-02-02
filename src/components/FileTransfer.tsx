import React from 'react';

// Components
import DragAndDrop from './DragAndDrop';

// State
import { connect } from 'react-redux';
import { UploadContent, StartQuiz } from '../actions/';

// Types
import { JsonObj } from '../types/';

class FileTransfer extends React.Component<any, {}> {
    private FileInputRef = React.createRef<HTMLInputElement>();

    // Shuffling array algorithm
    shuffleArray(arr: Array<JsonObj>) {
        let array = [...arr];
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    ReadFile = (file: File): Promise<any> => new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    handleDrop = async (file: File) => {
        if (file.type === 'application/json') {
            const result = await this.ReadFile(file);
            const obj: Array<JsonObj> = JSON.parse(result);
            const shuffled = this.shuffleArray(obj);

            // Save to state
            this.props.UploadContent(shuffled);
            this.props.StartQuiz();
        }
    };

    handleFileInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        if(event.currentTarget.files && event.currentTarget.files.length > 0) {
            // File type check
            if (event.currentTarget.files[0].type === "application/json") {
                this.ReadFile(event.currentTarget.files[0]).then(
                    result => {
                        // TODO : check content format
                        // Updating state
                        const obj: Array<JsonObj> = JSON.parse(result);
                        const shuffled = this.shuffleArray(obj);

                        this.props.UploadContent(shuffled);
                        this.props.StartQuiz();
                    }
                );
            } else {
                // TO DO : handle different file type upload!
            }
        }
    }

    handleFileUploadClick = () => {
        if(this.FileInputRef.current) {
            this.FileInputRef.current.click();
        }
    }

    render() {
        return (
            <DragAndDrop handleDrop={this.handleDrop}>
                <div className="row no-gutters" style={{height: 400, width: 500, border: "2px solid #e1e1e1"}}>
                    <div className="col-12 h4 align-self-end mb-0">Drag and drop your file here</div>
                    <div className="col-12 h4 align-self-center mb-0">or</div>
                    <div className="col-12 align-self-start mb-0">
                        <input 
                            type="file"
                            id="fileInput"
                            ref={this.FileInputRef}
                            onChange={this.handleFileInputChange}
                            hidden
                        />
                        <button 
                            className="btn btn-secondary px-5"
                            onClick={this.handleFileUploadClick}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </DragAndDrop>
        );
    }
}

export default connect(null, { UploadContent, StartQuiz })(FileTransfer);