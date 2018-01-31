/*
 * action creators
 */

import {
    LOADING_ACTICLES, LOADING_TAGS, LOADING_ACTICLE, LOADING_COMMENTS, LOADING_USER, SET_TAGS, SET_TABS,
    CHANGE_TAB, SET_ACTICLES, LIKE_A_ACTICLE, SET_SELECTED_ACTICLE, SET_COMMENTS, ADD_COMMENT,
    DELETE_COMMENT, SET_SELECTED_USER
} from "./actionTypes"

export function loadingActicles () {
    return { type: LOADING_ACTICLES }
}

export function loadingTags () {
    return { type: LOADING_TAGS }
}

export function loadingActicle () {
    return { type: LOADING_ACTICLE }
}

export function loadingComments () {
    return { type: LOADING_COMMENTS }
}

export function loadingUser () {
    return { type: LOADING_USER }
}

export function setTags (tags) {
    return {
        type: SET_TAGS,
        tags: tags
    }
}

export function setTabs (tabs) {
    return {
        type: SET_TABS,
        tabs: tabs
    }
}

export function changeTab (tab) {
    return {
        type: CHANGE_TAB,
        activeTab: tab
    }
}

export function setActicles (jsonActicle) {
    return {
        type: SET_ACTICLES,
        articles: {
            acticleList: jsonActicle.articles,
            acticleCount: jsonActicle.articlesCount,
            isLoading: false
        }
    }
}

export function likeAActicle (acticle) {
    return {
        type: LIKE_A_ACTICLE,
        acticle: acticle
    }
}

export function setSelectedActicle (acticle, isNew) {
    return {
        type: SET_SELECTED_ACTICLE,
        acticle: acticle,
        isNew: isNew
    }
}

export function setComments (jsonComments) {
    return {
        type: SET_COMMENTS,
        comments: {
            commentList: jsonComments.comments,
            commentCount: -1, // not use now, prepare for paging
            isLoading: false
        } 
    }
}

export function addComment (comment) {
    return {
        type: ADD_COMMENT,
        comment: comment
    }
}

export function deleteComment (commentId) {
    return {
        type: DELETE_COMMENT,
        commentId: commentId
    }
}

export function setSelectedUser (user) {
    return {
        type: SET_SELECTED_USER,
        user: user
    }
}
