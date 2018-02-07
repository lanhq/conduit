import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

// pages
import RealHome         from '../home/RealHome';
import Register     from '../Register';
import SignIn       from '../SignIn';
import Profile      from '../Profile';
import ArticleContainer from '../ArticleDetail/ArticleContainer';
import Settings     from '../Settings';
import EditArticleContainer  from '../EditArticle/EditArticleContainer';

import Api from '../../services/api';
import withProps from '../../hocs/withProps';

class RealworldApp extends Component {

    constructor(props) {
        super(props);

        this.setUser = this.setUser.bind(this);
        this.removeUser = this.removeUser.bind(this);
    }

    setUser(user) {
        this.props.setLoggedUser(user)
    }

    removeUser() {
        this.props.setLoggedUser({
            bio: null,
            following: false,
            image: '',
            username: ''
        })
    }

    componentDidMount() {
        this.props.fetchLoggedUser();
    }

    render() {

        console.log('RealApp render');

        const   {user, isLoading} = this.props,
                setUser = this.setUser,
                removeUser = this.removeUser;

        return (
            <div>
                <Header user={user} loading={isLoading}/>
                <div className="content">
                    <Switch>
                        <Route path="/" exact   component={RealHome} />
                        <Route path="/login" exact   component={withProps({setUser})(SignIn)} />
                        <Route path="/settings" exact component={withProps({user, removeUser})(Settings)} />
                        <Route path="/profile/:username" exact component={Profile} />
                        <Route path="/register" component={Register} />

                        <Route path="/article/view/:id"     component={ArticleContainer} />
                        <Route path="/article/new"          component={EditArticleContainer} />
                        <Route path="/article/edit/:id"     component={EditArticleContainer} />

                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default RealworldApp;
