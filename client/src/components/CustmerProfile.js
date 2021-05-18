import react, { Component } from "react";

class CustomerProfile extends Component {
    render() {
        const { id, name, image } = this.props;
        return (
            <div>
                <img src={image} alt="profile"></img>
                <h2>{name}({id})</h2>
            </div>
        )
    }
}

export default CustomerProfile;