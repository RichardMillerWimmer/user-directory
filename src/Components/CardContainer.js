import React, { Component } from 'react';
import data from '../data'
import BottomControls from './BottomControls'

class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            // selectedProfile: data[0],
            pageNumber: 0
        }
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
    }



    next() {
        let newPageNumber = this.state.pageNumber;

        // console.log(this.state.pageNumber)
        // this.diplayProfile(this.state.pageNumber)

        if (newPageNumber >= 0 && newPageNumber < (this.state.data.length - 1)) {
            newPageNumber++
        } else {
            newPageNumber = 0
        }
        this.setState({ pageNumber: newPageNumber })
        console.log(this.state.pageNumber)
    }

    previous() {
        let newPageNumber = this.state.pageNumber;
        // this.diplayProfile(this.state.pageNumber)
        if (newPageNumber > 0 && newPageNumber <= (this.state.data.length - 1)) {
            newPageNumber--
        } else {
            newPageNumber = this.state.data.length - 1
        }
        this.setState({ pageNumber: newPageNumber })
        console.log(this.state.pageNumber)
    }

    // diplayProfile(pageNumber) {
    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i].id === pageNumber) {
    //             this.setState({ selectedProfile: data[i] })
    //         }
    //     }
    //     // console.log(this.state.selectedProfile)
    // }


    render() {
        const profile = data[this.state.pageNumber]
        // console.log(this.state.pageNumber)
        return (
            <>
                < section className="cardContainer" >
                    <div>
                        <h2 className='indexCount'>{profile.id} / 25</h2>
                        <h2>{profile.name.first} {profile.name.last}</h2>
                        {/* <h2 className='name'>Name LastName</h2> */}
                        <h4>From: {profile.city}, {profile.country} </h4>
                        <h4>Job Title: {profile.title} </h4>
                        <h4>Employer: {profile.employer} </h4>
                    </div>
                    <div>
                        <h4> Favorite Movies:</h4>
                        <ol>
                            <li>{profile.favoriteMovies[0]}</li>
                            <li>{profile.favoriteMovies[1]}</li>
                            <li>{profile.favoriteMovies[2]}</li>
                        </ol>
                        {/* <div className='buttonBox'>
                        <button className='previousButton scrollButton' onClick={this.previous}>&#60; Previous</button>
                        <button className='blueButton'>Edit</button>
                        <button className='blueButton'>Delete</button>
                        <button className='blueButton'>New</button>
                        <button className='nextButton scrollButton' onClick={this.next}>Next &#62;</button>
                    </div> */}
                    </div >
                </section >
                < BottomControls previous={this.previous} next={this.next} />
            </>
        )
    }
}


export default CardContainer