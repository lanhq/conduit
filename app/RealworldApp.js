import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

// pages
import RealHome         from './RealHome';
import Register     from './Register';
import SignIn       from './SignIn';
import Profile      from './Profile';
import Article      from './Article';
import Settings     from './Settings';
import EditArticle  from './EditArticle';

import Token from './services/token';
import Api from './services/api';
import withProps from './hocs/withProps';

class RealworldApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
            loading: true
        };

        this.setUser = this.setUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
    }

    setUser(user) {
        this.setState({user});
    }

    removeUser() {
        this.setState({user: undefined});
    }

    componentDidMount() {
        let token = Token.get();
        if (token) {
            Api
                .currentUser(token)
                .then(user => {
                    this.setState({
                        user,
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {

        console.log('RealApp render');

        const   {user, loading} = this.state,
                setUser = this.setUser,
                removeUser = this.removeUser;

        return (
            <div>
                <Header user={user} loading={loading}/>
                <div className="content">
                    <Switch>
                        <Route path="/" exact   component={RealHome} />
                        <Route path="/login" exact   component={withProps({setUser})(SignIn)} />
                        <Route path="/settings" exact component={withProps({user, removeUser})(Settings)} />
                        <Route path="/profile/:username" exact component={Profile} />
                        <Route path="/register" component={Register} />

                        <Route path="/article/view/:id"     component={Article} />
                        <Route path="/article/new"          component={EditArticle} />
                        <Route path="/article/edit/:id"     component={EditArticle} />

                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default RealworldApp;
