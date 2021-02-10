import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends React.Component {

    state = {
        firstURL: "https://api.giphy.com/v1/gifs/search?q=",
        secondURL: "&api_key=dc6zaTOxFJmzC&rating=g",
        apiKey: "",
        imageLinks: []
    }

    changeSearchState = (string) => {
        console.log("start changesearchstate", this.state.apiKey)
        console.log(string)
        this.setState({
            apiKey: string
        }, this.clearStateImages)
    }

    clearStateImages(){
        console.log("start clearstateimages", this.state.apiKey)
        this.setState({
            imageLinks: []
        }, this.callAPI)
    }

    callAPI(){
        let url = this.state.firstURL + this.state.apiKey + this.state.secondURL
        console.log(this.state.apiKey)
        fetch(url)
        .then(response=>response.json())
        .then(data => {
                data.data.forEach(object => {
                    this.setState({
                            imageLinks: this.state.imageLinks.concat([object.images.original.url])
                        })
                })
    })
}

    render(){
        return(
        <div>
            <div>
                <GifList 
                    url1={this.state.imageLinks[0]}
                    url2={this.state.imageLinks[1]}
                    url3={this.state.imageLinks[2]}
                />
                <GifSearch updateParentState={this.changeSearchState} />
            </div>
        </div>
        )
    }

}