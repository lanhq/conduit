import React, { Component, PureComponent } from 'react';
import Token from '../../services/token';
import VisibleArticles from '../articleList/VisibleArticles';
import VisibleTags from '../popularTags/VisibleTags';
import VisibleTabs from '../tabList/VisibleTabs'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {
        var setTabs = this.props.setTabs,
            changeTab = this.props.changeTab;
        setTabs(['Your Feed', 'Global Feed'])
        changeTab('Your Feed')
    }

    render() {
        let activeTab = this.props.activeTab,
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
                            <VisibleArticles/>
                        </div>

                        <VisibleTags/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
