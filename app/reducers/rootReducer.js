import {
    LOADING_ARTICLES, LOADING_TAGS, LOADING_ARTICLE, LOADING_COMMENTS, LOADING_USER, SET_TAGS,
    SET_TABS, CHANGE_TAB, SET_ARTICLES, LIKE_A_ARTICLE, SET_SELECTED_ARTICLE, SET_COMMENTS, ADD_COMMENT,
    DELETE_COMMENT, SET_SELECTED_USER, SELECT_TAG
} from "../actions/actionTypes"
import * as actionCreators from "../actions/actionCreator"
import { combineReducers } from 'redux'

const initialState = {
    articles: {
        articleList: [],
        articleCount: 0,
        isLoading: false
    },
    tabs: {
        tabList: ['your feed'],
        activeTab: null,
    },
    tags: {
        tagList: [],
        isLoading: false
    },
    selectedArticle: {
        article: {},
        isNew: true,
        isLoading: false
    },
    comments: {
        commentList: [],
        commentCount: 0,
        isLoading: false
    },
    selectedUser: {
        user: {},
        isLoading: false
    }
}

function articles(state = initialState.articles, action) {
    switch (action.type) {
        case LOADING_ARTICLES: 
            return Object.assign({}, state, {
                isLoading: true
            })
        case SET_ARTICLES:
            return Object.assign({}, state, {
                articleList: action.articles.articleList,
                isLoading: false,
                articleCount: action.articles.articleCount
            })
        case LIKE_A_ARTICLE:
            return Object.assign({}, state, {
                articleList: state.articleList.map((curArticle) => {
                    if (curArticle.slug === action.article.slug) {
                        return action.article
                    }
                    return curArticle
                }),
                isLoading: false
            })
        default:
            return state
    }
}

function tabs (state = initialState.tabs, action) {
    switch (action.type) {
        case SET_TABS:
            return Object.assign({}, state, {
                tabList: action.tabs
            })
        case CHANGE_TAB:
            let newTabList = [...state.tabList];    
            if (state.tabList.length >= 3 && action.activeTab !== state.tabList[2]) {
                newTabList = newTabList.slice(0,2)
            }
            return Object.assign({}, state, {
                activeTab: action.activeTab,
                tabList: newTabList
            })
        case SELECT_TAG:
            return Object.assign({}, state, {
                tabList: [state.tabList[0], state.tabList[1], '#' + action.tag],
                activeTab: '#' + action.tag
            })
        default:
            return state
    }
}

function tags (state = initialState.tags, action) {
    switch (action.type) {
        case LOADING_TAGS:
            return Object.assign({}, state, {
                isLoading: true
            })
        case SET_TAGS:
            return Object.assign({}, state, {
                tagList: action.tags,
                isLoading: false
            })
        default: 
            return state
    }
}

function selectedArticle (state = initialState.selectedArticle, action) {
    switch (action.type) {
        case LOADING_ARTICLE:
            return Object.assign({}, state, {
                isLoading: true
            })
        case SET_SELECTED_ARTICLE:
            if (action.isNew) {
                return {
                    article: {},
                    isNew: true,
                    isLoading: false
                }
            }
            return {
                isLoading: false,
                article: action.article,
                isNew: false
            }
        default:
            return state
    }
}

function comments (state = initialState.comments, action) {
    switch (action.type) {
        case LOADING_COMMENTS:
            return Object.assign({}, state, {
                isLoading: true
            })
        case SET_COMMENTS: 
            return action.comments
        case ADD_COMMENT:
            return Object.assign({}, state, {
                commentList: [action.comment, ...state.comments],
                isLoading: false
            })
        case DELETE_COMMENT:
            return Object.assign({}, state, {
                commentList: state.comments.filter((comment) => {
                    return comment.id !== action.commentId
                }),
                isLoading: false
            })
        default:
            return state
    }
}

function selectedUser (state = initialState.selectedUser, action) {
    switch (action.type) {
        case LOADING_USER:
            return Object.assign({}, state, {
                isLoading: true
            })
        case SET_SELECTED_USER:
            return {
                user: action.user,
                isLoading: false
            }
        default:
            return state
    }
}


var rootReducer = combineReducers({
    articles,
    tabs,
    tags,
    selectedArticle,
    comments,
    selectedUser
});

export default rootReducer
