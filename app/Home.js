import React, { Component, PureComponent } from 'react';
import Token from './services/token';
import Feeds from './Feeds';
import Tags from './Tags';
import {YOUR_FEED_UNI_ID, GLOBAL_FEED_UNI_ID}  from './Tabs';
import VisibleTabs from './VisibleTabs'

class Home extends Component {
    constructor(props) {
        super(props);
    }
    //     this.handleTagClick = this.handleTagClick.bind(this);
    // }

    // handleTagClick (activeFeed) {
    //     this.setState({
    //         activeFeed
    //     });
    // }

    componentDidMount () {
        var setTabs = this.props.setTabs,
            changeTab = this.props.changeTab;
        setTabs(['Your Feed', 'Global Feed'])
        changeTab('Your Feed')
    }

    render() {
        let activeFeed = 'Your Feed',
            token = Token.get();
        return (
            <div className="home-page">
                {
                    !token &&
                    <div className="banner">
                        <div className="container">
                            <h1 className="logo-font">conduit</h1>
                            <p>A place to share your knowledge.</p>
                        </div>
                    </div>
                }

                <div className="container page">
                    <div className="row">

                        <div className="col-md-9">
                            <VisibleTabs/>
                            <Feeds activeFeed={activeFeed}/>
                        </div>

                        <Tags/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
