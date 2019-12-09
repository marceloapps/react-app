import React, { Component } from 'react';

export class MaxFollowers extends Component {
    static displayName = MaxFollowers.name;

    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/tweet/maxfollowers')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
            })
            .catch(console.log)
    }

    static renderUsersTable(users) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Followers Count</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(users =>
                        <tr>
                            <td>{users.User}</td>
                            <td>{users.Followers}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : MaxFollowers.renderUsersTable(this.state.users);

        return (
            <div>
                <h1 id="tabelLabel" >Users with most followers</h1>
                <p>Showing top 5 users in database with most followers.</p>
                {contents}
            </div>
        );
    }
}
