import React, { Component } from 'react';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

class App extends Component {

  state = {
    customers: ""
  }
  componentDidMount() {
    this.callApi()
      .then((res) => (this.setState({ customers: res })))
      .catch((error) => console.log(errror))
  }
  callApi = async () => {
    const responce = await fetch('/api/customers');
    console.log(responce)
    const body = await responce.json();
    return body;
  }


  render() {
    console.log(this.state.customers)
    const { classes } = this.props;
    const { customers } = this.state;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? customers.map((customer, index) => {
              return (<Customer
                key={index}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job} />
              );
            })
              : ""}
          </TableBody>
        </Table>
      </Paper>

    )
  }
}
export default withStyles(styles)(App);