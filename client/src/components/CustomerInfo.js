import React, { Component } from 'react';

class CustomerInfo extends Component {
    render() {
        const { birthday, gender, job } = this.props;
        return (
            <div>
                <p>{birthday}</p>
                <p>{gender}</p>
                <p>{job}</p>
            </div>
        );
    }
}

export default CustomerInfo;