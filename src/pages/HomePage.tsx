import React, { Component } from 'react';
import FileTransfer from '../components/FileTransfer';

class HomePage extends Component<{}, {}> {
    render() {
        return (
            <div className="container">
                <FileTransfer />
            </div>
        );
    }
}

export default HomePage;