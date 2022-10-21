import React, { Component } from 'react'
import GrandChild from './GrandChild';

class Child2 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    minBeli = 2;
    render() {
        return (
            <div>
                <h3>Child Component 2</h3>
                <GrandChild data={this.props.stock} />
                {/* <button onClick={() => this.props.fungsi(this.minBeli)}>Beli</button> */}
            </div>
        )
    }
}

export default Child2;