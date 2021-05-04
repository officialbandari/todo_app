import React, { Component } from 'react';
import { MyContext } from '../App'




class Footer extends Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {
                        (data) => {
                            return (<div>{data}</div>)
                        }
                    }

                </MyContext.Consumer>
            </div>
        );
    }
}

export default Footer;