import React, { Component } from 'react';

export class TweetsHashtag extends Component {
    static displayName = TweetsHashtag.name;

    constructor(props) {
        super(props);
        this.state = { hashtags: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/tweet/TweetCountByHashtag')
            .then(response => response.json())
            .then(data => {
                this.setState({ hashtags: data });
            })
            .catch(console.log)
    }

    static renderHashtagsTable(hashtags) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Hashtag</th>
                        <th>Language</th>
                        <th>Posts count</th>
                    </tr>
                </thead>
                <tbody>
                    {hashtags.map(hashtags =>
                        <tr>
                            <td>key={hashtags.Hashtag}></td>
                            <td>key={hashtags.Language}></td>
                            <td>{hashtags.Count}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : TweetsHashtag.renderHashtagsTable(this.state.hashtags);

        return (
            <div>
                <h1 id="tabelLabel">Post count by hour</h1>
                <p>Showing post count by hashtag/language.</p>
                {contents}
            </div>
        );
    }
}
