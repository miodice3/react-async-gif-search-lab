import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component {

    state = {
        firstURL: "https://api.giphy.com/v1/gifs/search?q=",
        secondURL: "&api_key=dc6zaTOxFJmzC&rating=g",
        imageLinks: []
    }

    changeSearchState = (string) => {
        this.setState({
            apiKey: string
        }, this.callAPI())
    }

    // callAPI(){
    //     let url = this.state.firstURL + this.state.apiKey + this.state.secondURL
    //     console.log(url)
    //     fetch(url)
    //     .then(response=>response.json())
    //     .then(data => {
    //         this.setState({
    //             imageLinks: data.data.images.original.url
    //         }, () => console.log(this.state.imageLinks))
    //     })
    // }

    // callAPI(){
    //     let url = this.state.firstURL + this.state.apiKey + this.state.secondURL
    //     console.log(url)
    //     fetch(url)
    //     .then(response=>response.json())
    //     .then(data => {
    //         this.setState({
    //             imageLinks: data.data.images.original.url
    //         }, () => console.log(this.state.imageLinks))
    //     })
    // }

    callAPI(){
        let url = this.state.firstURL + this.state.apiKey + this.state.secondURL
        console.log(url)
        fetch(url)
        .then(response=>response.json())
        .then(data => {
            console.log(data.data.images)
        })
    }

    render(){
        return(
        <div>
            <div>
                <GifList 
                    url1={this.state.firstURL}
                    url2={this.state.apiKey}
                    url3={this.state.secondURL}
                />
                <GifSearch updateParentState={this.changeSearchState} />
            </div>
        </div>
        )
    }

}