import React, { Component } from 'react';


class BottomControls extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <nav>
                <button>Previous</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                <button>Next</button>
            </nav>
        )
    }


}

export default BottomControls