import React, { Component } from 'react';

class ClassTodo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputdata: '',
            item: []
        }

    }

    addTod = (e) => {

        this.setState({
            item: [...this.state.item, this.state.inputdata]
        })
        this.setState({
            inputdata: ''
        })

    }

    removeItem = (id) => {
        const results = this.state.item.filter((val, ind) => {
            return ind !== id
        })
        this.setState({
            item: results
        })

    }


    componentDidMount(e) {

        this.setState({
            inputdata: this.state.inputdata
        })
    }
    render() {
        return (
            <div>
                <h1>ClaaTodo</h1>
                <input
                    type="text"
                    value={this.state.inputdata}
                    onChange={(e) => this.setState({
                        inputdata: e.target.value
                    })}
                />
                <button onClick={this.addTod}>addTod</button><br />
                {this.state.inputdata}
                {this.state.item.map((val, ind) => {
                    return (<div key={ind}>{val}
                        <button onClick={() => this.removeItem(ind)}>X</button>
                    </div>)
                })}


            </div>
        );
    }
}

export default ClassTodo;