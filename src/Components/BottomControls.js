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
                <div className='buttonBox'>
                    <button className='previousButton scrollButton' onClick={this.props.previous}>&#60; Previous</button>
                    <button className='blueButton'>Edit</button>
                    <button className='blueButton'>Delete</button>
                    <button className='blueButton'>New</button>
                    <button className='nextButton scrollButton' onClick={this.props.next}>Next &#62;</button>
                </div>
            </nav>
        )
    }


}

export default BottomControls