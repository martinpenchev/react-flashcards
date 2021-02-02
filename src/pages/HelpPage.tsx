import React from 'react';

class HelpPage extends React.Component<{}, {}> {
    render() {
        return (
            <div className="container">
                <div className="h1">Instructions</div>
                <div className="h3 text-muted my-3">
                    1. Create a json file from your flashcards using any online editor.
                </div>
                <div className="h3 text-muted my-3">
                    2. The file must consist of a list of flashcard objects:
                    <code className="d-block my-3">
                        {"{"}
                            "front" : "text",
                            "back" : "text"
                        {"}"}
                    </code>
                </div>
                <div className="h3 text-muted my-3">
                    3. Drop your file or upload it.
                </div>
                <div className="h3 text-muted my-3">
                    4. Test you knowledge and learn!
                </div>
            </div>
        );
    }
}

export default HelpPage;