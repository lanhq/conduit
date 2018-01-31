import {
    LOADING_ACTICLES, LOADING_TAGS, LOADING_ACTICLE, LOADING_COMMENTS, LOADING_USER, SET_TAGS,
    SET_TABS, CHANGE_TAB, SET_ACTICLES, LIKE_A_ACTICLE, SET_SELECTED_ACTICLE, SET_COMMENTS, ADD_COMMENT,
    DELETE_COMMENT, SET_SELECTED_USER
} from "../actions/actionTypes"
import * as actionCreators from "../actions/actionCreator"
import { combineReducers } from 'redux'

const initialState = {
    articles: {
        acticleList: [],
        acticleCount: 0,
        isLoading: false
    },
    tabs: {
        tabList: [],
        activeTab: null,
    },
    tags: {
        tagList: [],
        isLoading: false
    },
    selectedActicle: {
        acticle: {},
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
        case LOADING_ACTICLES: 
            return Object.assign({}, state, {
                isLoading: true
            })
        case SET_ACTICLES:
            return action.acticles
        case LIKE_A_ACTICLE:
            return Object.assign({}, state, {
                acticleList: state.acticleList.map((curActicle) => {
                    if (curActicle.slug === action.acticle.slug) {
                        return action.acticle
                    }
                    return curActicle
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
            return Object.assign({}, state, {
                activeTab: action.activeTab
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

function selectedActicle (state = initialState.selectedActicle, action) {
    switch (action.type) {
        case LOADING_ACTICLE:
            return Object.assign({}, state, {
                isLoading: true
            })
        case SET_SELECTED_ACTICLE:
            if (action.isNew) {
                return {
                    acticle: {},
                    isNew: true,
                    isLoading: false
                }
            }
            return {
                isLoading: false,
                acticle: action.acticle,
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
    selectedActicle,
    comments,
    selectedUser
});

export default rootReducer
