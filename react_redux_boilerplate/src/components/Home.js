import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUsers, setUser } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

let filteredItems = [];
class Home extends Component {
    constructor() {
        super();
        this.state = { searchText: "" }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ searchText: e.target.value.toLowerCase() });

    }
    componentDidMount() {
        this.props.getUsers();
        //dispatch(actions.getUsers());
    }
    render() {
        filteredItems = [];
       // let {dispatch}=this.props;
        if (this.props.users != null) {
            filteredItems = this.props.users.filter((user) => {
                return user.name.toLowerCase().indexOf(this.state.searchText) !== -1;
            });
        }
        console.log(filteredItems);

        return (
            <div className="Home">
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.searchText}
                        ref="filterTextInput"
                        onChange={this.handleChange.bind(this)}
                    />
                </form>
                <div>
                    {filteredItems.map(user => {
                        return (
                            <Link
                                to='/user'
                                key={user.id}
                                onClick={() => this.props.setUser(user)}>
                                <h4>{user.name}</h4>
                            </Link>
                        )
                    })
                    }
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers, setUser }, dispatch);

}

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Home);