import React, { Component } from 'react';
import data from '../data'


class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: data,
            selectedProfile: {},
            pageNumber: 1
        }
    }

    // handleChange(value) {
    //     this.setState({ pageNumber: +value })
    //     console.log(this.state.pageNumber)
    // }

    componentDidMount() {
        this.setState({ selectedProfile: data[0] })
    }
    onClickNext() {
        this.next()
        // this.diplayProfile(this.state.pageNumber)
    }

    onClickPrevious() {
        this.previous()
        // this.diplayProfile(this.state.pageNumber)
    }

    next() {
        // this.diplayProfile(this.state.pageNumber)
        if (this.state.pageNumber >= 1 && this.state.pageNumber <= 25) {
            this.setState({ pageNumber: this.state.pageNumber + 1 })
        } else {
            this.setState({ pageNumber: 1 })
        }
        console.log(this.state.pageNumber)
    }

    previous() {
        // this.diplayProfile(this.state.pageNumber)
        if (this.state.pageNumber >= 1 && this.state.pageNumber <= 25) {
            this.setState({ pageNumber: this.state.pageNumber - 1 })
        } else {
            this.setState({ pageNumber: 25 })
        }
        console.log(this.state.pageNumber)
    }

    diplayProfile(pageNumber) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === pageNumber) {
                this.setState({ selectedProfile: data[i] })
            }
        }
        // console.log(this.state.selectedProfile)
    }


    render() {
        // console.log(this.state.data)
        return (
            < section className="cardContainer" >
                <div>
                    <h2 className='indexCount'>{this.state.selectedProfile.id} / 25</h2>
                    {/* <h2>{this.state.selectedProfile.name[0]} {this.state.selectedProfile.name[1]}</h2> */}
                    <h2 className='name'>Name LastName</h2>
                    <h4>From: {this.state.selectedProfile.city}, {this.state.selectedProfile.country} </h4>
                    <h4>Job Title: {this.state.selectedProfile.title} </h4>
                    <h4>Employer: {this.state.selectedProfile.employer} </h4>
                </div>
                <div>
                    <h4> Favorite Movies:</h4>
                    <ol>
                        <li>___</li>
                        <li>___</li>
                        <li>___</li>
                        {/* <li>{this.state.selectedProfile.favoriteMovies[0]}</li>
                        <li>{this.state.selectedProfile.favoriteMovies[1]}</li>
                        <li>{this.state.selectedProfile.favoriteMovies[2]}</li> */}
                    </ol>
                    <div className='buttonBox'>
                        <button className='previousButton scrollButton' onClick={() => this.onClickPrevious()}>&#60; Previous</button>
                        <button className='blueButton'>Edit</button>
                        <button className='blueButton'>Delete</button>
                        <button className='blueButton'>New</button>
                        <button className='nextButton scrollButton' onClick={() => this.onClickNext()}>Next &#62;</button>
                    </div>
                </div >
            </section >
        )
    }
}


export default CardContainer