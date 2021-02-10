import React from 'react'
// import { render } from 'react-dom'

export default class GifList extends React.Component {

    render(){
        return (
            <ul>
                <li><img src={this.props.url1} alt="first"></img></li>
                <li><img src={this.props.url2} alt="second"></img></li>
                <li><img src={this.props.url3} alt="third"></img></li>
            </ul>
        )
    }

}