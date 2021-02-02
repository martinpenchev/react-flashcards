import React from 'react';

class DragAndDrop extends React.Component<{handleDrop: Function}, {dragging: boolean}> {
    private dragCounter: number = 0;
    private dropRef = React.createRef<HTMLDivElement>();

    state = {
        dragging: false
    }

    handleDrag = (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
    }
    
    handleDragIn = (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        this.dragCounter++;
        if (event.dataTransfer) {
            if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
                this.setState({dragging: true});
            }
        }
    }

    handleDragOut = (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        this.dragCounter--;
        if (this.dragCounter > 0) return;
        this.setState({dragging: false});
    }

    handleDrop = (event: DragEvent) => {    
        event.preventDefault();
        event.stopPropagation();

        if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            this.props.handleDrop(event.dataTransfer.files[0]);
            this.setState({dragging: false});
        }
    }

    componentDidMount() {
        this.dragCounter = 0;

        let divElement = this.dropRef.current;
        if(divElement) {
            divElement.addEventListener('dragenter', this.handleDragIn);
            divElement.addEventListener('dragleave', this.handleDragOut);
            divElement.addEventListener('dragover', this.handleDrag);;
            divElement.addEventListener('drop', this.handleDrop);
        }
    }

    componentWillUnmount() {
        let div = this.dropRef.current;
        if(div) {
            div.removeEventListener('dragenter', this.handleDragIn);
            div.removeEventListener('dragleave', this.handleDragOut);
            div.removeEventListener('dragover', this.handleDrag);;
            div.removeEventListener('drop', this.handleDrop);
        }
    }

    render() {
        return (
            <div
                style={{display: 'inline-block', position: 'relative'}}
                ref={this.dropRef}
            >
                {this.state.dragging &&
                <div 
                    style={{
                    border: 'dashed grey 2px',
                    backgroundColor: 'rgba(255,255,255,.8)',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0, 
                    right: 0,
                    zIndex: 9999
                    }}
                >
                    <div 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        left: 0,
                        textAlign: 'center'
                    }}
                    >
                    </div>
                </div>
                }
                {this.props.children}
            </div>
        );
    }
}

export default DragAndDrop;