/*
 * action creators
 */

import {
    LOADING_ARTICLES, LOADING_TAGS, LOADING_ARTICLE, LOADING_COMMENTS, LOADING_USER, SET_TAGS, SET_TABS,
    CHANGE_TAB, SET_ARTICLES, LIKE_A_ARTICLE, SET_SELECTED_ARTICLE, SET_COMMENTS, ADD_COMMENT,
    DELETE_COMMENT, SET_SELECTED_USER, SELECT_TAG
} from "./actionTypes"

export function loadingArticles () {
    return { type: LOADING_ARTICLES }
}

export function loadingTags () {
    return { type: LOADING_TAGS }
}

export function loadingArticle () {
    return { type: LOADING_ARTICLE }
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

export function selectTag (tag) {
    return {
        type: SELECT_TAG,
        tag: tag
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

export function setArticles (jsonArticle) {
    return {
        type: SET_ARTICLES,
        articles: {
            articleList: jsonArticle.articles,
            articleCount: jsonArticle.articlesCount,
            isLoading: false
        }
    }
}

export function likeAArticle (article) {
    return {
        type: LIKE_A_ARTICLE,
        article: article
    }
}

export function setSelectedArticle (article, isNew) {
    return {
        type: SET_SELECTED_ARTICLE,
        article: article,
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
