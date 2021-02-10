import React from 'react'

export default class GifSearch extends React.Component{

    state = {
        searchedTerm: ""
    }

    handleChange = event =>{      
        this.setState({
            searchedTerm: event.target.value
        })
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.updateParentState(this.state.searchedTerm)
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.searchedTerm}
                />
                <input type="submit"></input>
            </form>
        </div>
        )
    }

}