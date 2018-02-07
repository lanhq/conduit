import {
    setArticles, likeAArticle, loadingArticles, selectTag, setTags, loadingTags,
    loadingLoggedUser, setLoggedUser, changeTab, loadingArticle, setSelectedArticle
} from './actionCreator'
import Api from '../services/api';
import Token from '../services/token';

const LIMIT = {
    limit: 10
};

export function fetchArticles () {
    return function (dispatch, getState) {
        let state = getState(),
            activeTab = state.tabs.activeTab,
            tabs = state.tabs.tabList;

        let getArticles;
        dispatch(loadingArticles())

        if (activeTab === tabs[0] || !activeTab) {
            getArticles = Api.articlesFeed(LIMIT);
        } else if (activeTab === tabs[1]) {
            getArticles = Api.articlesList(LIMIT)
        } else {
            getArticles = Api.articlesList({
                ...LIMIT,
                tag: activeTab.substring(1,activeTab.length)
            });
        }

        getArticles.then(response => {
            dispatch(setArticles(response))
        }).catch (() => {
            dispatch(changeTab(tabs[1]))
        })
    }
}

export function fetchTags () {
    return (dispatch) => {
        dispatch(loadingTags())
        Api.getTags().then(tags => {
            dispatch(setTags(tags))
        });
    }
}

export function fetchLoggedUser () {
    return (dispatch) => {
        let token = Token.get();
        dispatch(loadingLoggedUser())
        if (token) {
            Api.currentUser(token).then(user => {
                dispatch(setLoggedUser(user))
            });
        } else {
            dispatch(setLoggedUser(null))
        }
    }
}

export function fectchArticle (articleId) {
    return (dispatch) => {
        dispatch(loadingArticle())
        Api.getArticle(articleId).then(article => {
            dispatch(setSelectedArticle(article, false))
        });
    }
}
