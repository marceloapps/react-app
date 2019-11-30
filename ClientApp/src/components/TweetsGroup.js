import React, { Component } from 'react';

export class TweetsGroup extends Component {
    static displayName = TweetsGroup.name;

    constructor(props) {
        super(props);
        this.state = { hours: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/tweet/TweetsGroup')
            .then(response => response.json())
            .then(data => {
                this.setState({ hours: data });
            })
            .catch(console.log)
    }

    static renderHoursTable(hours) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Hour</th>
                        <th>Posts count</th>
                    </tr>
                </thead>
                <tbody>
                    {hours.map(hours =>
                        <tr>
                            <td>key={hours.Hora}></td>
                            <td>{hours.Count}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : TweetsGroup.renderHoursTable(this.state.hours);

        return (
            <div>
                <h1 id="tabelLabel">Post count by hour</h1>
                <p>Showing post count by the hours of the day.</p>
                {contents}
            </div>
        );
    }
}
