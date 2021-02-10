import React from 'react'
// import { render } from 'react-dom'

export default class GifList extends React.Component {

    render(){
        return (
            <ul>
                <li>{this.props.url1}</li>
                <li>{this.props.url2}</li>
                <li>{this.props.url3}</li>
            </ul>
        )
    }

}