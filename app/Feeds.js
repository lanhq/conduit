import React, {PureComponent, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import moment from 'moment';
import Api from './services/api';
import Handle from './services/handle';

import {YOUR_FEED_UNI_ID, GLOBAL_FEED_UNI_ID} from './Tabs';

const LIMIT = {
    limit: 10
};

class Feeds extends Component {

    constructor (props) {
        super(props);
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    componentDidMount () {
        this._getArticles(this.props);
    }

    componentWillReceiveProps ({activeTab}) {
        if (this.props.activeTab === activeTab) return;

        this._getArticles({ activeTab });
    }

    _getArticles ({ activeTab }) {
        if (!activeTab) return;

        let getArticles;
        this.props.loadingArticles()

        if (activeTab === this.props.tabs[0]) {
            getArticles = Api.articlesFeed(LIMIT);
        } else if (activeTab === this.props.tabs[1]) {
            getArticles = Api.articlesList(LIMIT)
        } else {
            getArticles = Api.articlesList({
                ...LIMIT,
                tag: activeTab.substring(1,activeTab.length)
            });
        }

        getArticles.then(response => {
            this.props.setArticles(response)
        })
    }

    handleFavorite (e, a) {
        let likeAArticle = this.props.likeAArticle
        Handle.favorite(e, this.props.history.push, a, article => {
            likeAArticle(article)
        });
    }

    render () {
        let { isLoading, articleList } = this.props
        if (isLoading) {
            return (
                <div className="article-preview">
                    Loading articles...
                </div>
            );
        }

        if (!articleList.length) {
            return (
                <div className="article-preview">
                    No articles are here... yet.
                </div>
            );
        }

        return (
            <div>
                {
                    articleList.map(article => (
                        <div className="article-preview" key={article.slug}>
                            <div className="article-meta">
                                <Link to={`/profile/${article.author.username}`} className="author">
                                    <img src={article.author.image} />
                                </Link>
                                <div className="info">
                                    <Link to={`/profile/${article.author.username}`} className="author">{article.author.username}</Link>
                                    <span className="date">{moment(article.createdAt).format('MMMM DD, YYYY')}</span>
                                </div>
                                <button className={`btn btn-sm pull-xs-right ${article.favorited ? 'btn-primary' : 'btn-outline-primary'}`} onClick={(e) => this.handleFavorite(e, article)}>
                                    <i className="ion-heart"></i> {article.favoritesCount}
                                </button>
                            </div>
                            <Link to={`/article/view/${article.slug}`} className="preview-link">
                                <h1>{article.title}</h1>
                                <p>{article.description}</p>
                                <span>Read more...</span>
                                <ul className="tag-list">
                                    {
                                        article.tagList.map((tag, index) => (
                                            <li key={index} className="tag-default tag-pill tag-outline">{tag}</li>
                                        ))
                                    }
                                </ul>
                            </Link>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(Feeds);
