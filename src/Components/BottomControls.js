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
                    <button className='previousButton scrollButton' onClick={() => this.onClickPrevious()}>&#60; Previous</button>
                    <button className='blueButton'>Edit</button>
                    <button className='blueButton'>Delete</button>
                    <button className='blueButton'>New</button>
                    <button className='nextButton scrollButton' onClick={() => this.onClickNext()}>Next &#62;</button>
                </div>
            </nav>
        )
    }


}

export default BottomControls