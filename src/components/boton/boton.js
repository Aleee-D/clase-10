import React from 'react'

//import 'boton.css'

export default class Boton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isActive: false,
            hidden: false,
        }
    }
    
    handleClick(){
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        return (
            <button 
            onClick={this.handleClick.bind(this)}
            className={this.state.isActive ? 'active': ''}
            >
            {this.props.children}
            </button>
        )
    }
    
}