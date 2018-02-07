import {
    setArticles, likeAArticle, loadingArticles, selectTag, setTags, loadingTags,
    loadingLoggedUser, setLoggedUser, changeTab, loadingArticle, setSelectedArticle
} from './actionCreator'
import Api from '../services/api';
import Token from '../services/token';

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
