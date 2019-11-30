import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { MaxFollowers } from './components/MaxFollowers';
import { TweetsGroup } from './components/TweetsGroup';
import { TweetsHashtag } from './components/TweetsHashtag';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/max-followers' component={MaxFollowers} />
        <Route path='/tweets-group' component={TweetsGroup} />
        <Route path='/tweets-hashtag' component={TweetsHashtag} />
      </Layout>
    );
  }
}
