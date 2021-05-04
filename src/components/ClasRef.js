import React, { Component } from 'react';

class ClasRef extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            item: []
        }
        this.input = React.createRef()
    }
    handleSubmit = () => {
        this.setState({
            name: this.input.current.value,
        })
        this.setState({
            item: [...this.state.name, this.state.name]

        })
    }

    handleAdd = (e) => {
        e.preventDefault()
        this.setState({
            name: this.input.current.value
        })


    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"

                        ref={this.input}

                    />
                    <button onClick={this.handleAdd} >submit</button>
                    {this.state.name}

                </form>
            </div>
        );
    }
}

export default ClasRef;