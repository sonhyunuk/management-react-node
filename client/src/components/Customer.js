import React, { Component } from 'react';
import CustomerInfo from './CustomerInfo';
import CustomerProfile from './CustmerProfile';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

class Customer extends Component {
    render() {
        const { id, image, name, birthday, gender, job } = this.props;
        return (
            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell><img src = {image} alt="props image url"></img></TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{birthday}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{job}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;