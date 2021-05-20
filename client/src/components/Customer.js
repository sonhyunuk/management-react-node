import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CustomerDelete from '../components/CustomerDelete';
class Customer extends Component {
    render() {
        const { id, image, name, birthday, gender, job } = this.props;
        return (
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell><img src={image} alt="props image url"></img></TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{birthday}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={id} /></TableCell>
            </TableRow>
        )
    }
}

export default Customer;
