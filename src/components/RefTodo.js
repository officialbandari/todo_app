import React, { Component } from 'react'

export default class RefTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            item: []
        }
    }

    handlChange = (e) => {
        this.setState(
            {
                name: e.target.value
            }
        )

    }

    handlAdd = (e) => {

        this.setState({
            item: [this.state.item, this.state.name]
        })
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <h1>RefTodo App</h1>
                <input type="text" value={this.state.name} onChange={this.handlChange} />
                <button disabled={this.state.name.length ? false : true} onClick={this.handlAdd}>submit</button>
                {this.state.item.map((val, ind) => {
                    return (<div key={ind}>
                        {val}
                    </div>)
                })}
            </div>
        )
    }
}
