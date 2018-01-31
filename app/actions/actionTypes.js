/*
 * action types
 */

// LOADING ACTIONS
export const LOADING_ARTICLES = 'LOADING_ARTICLES'
export const LOADING_TAGS = 'LOADING_TAGS'
export const LOADING_ARTICLE = 'LOADING_ARTICLE'
export const LOADING_COMMENTS = 'LOADING_COMMENTS'
export const LOADING_USER = 'LOADING_USER'

export const SET_TAGS = 'SET_TAGS'
export const SELECT_TAG = 'SELECT_TAG'

export const SET_TABS = 'SET_TABS'
export const CHANGE_TAB = 'CHANGE_TAB'
export const SET_ARTICLES = 'SET_ARTICLES'
export const LIKE_A_ARTICLE = 'LIKE_A_ARTICLE'

export const SET_SELECTED_ARTICLE = 'SET_SELECTED_ARTICLE'
export const SET_COMMENTS = 'SET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const SET_SELECTED_USER = 'SET_SELECTED_USER'

/**
 * Some end user actions
 * go to home page
 *  - LOADING_TAGS -> SET_TAGS
 *  - SET_TABS -> CHANGE_TAB -> LOADING_ARTICLES -> SET_ARTICLES
 * 
 * like/unlike a article
 *  - LIKE_A_ARTICLE
 * 
 * view a article
 *  - LOADING_ARTICLE -> SET_SELECTED_ARTICLE
 *  - LOADING_COMMENTS -> SET_COMMENTS
 * 
 * POST A COMMENT
 *  - ADD_COMMENT
 * 
 * DELETE A COMMENT
 *  - DELETE_COMMENT
 * 
 * like/unlike selected article
 *  - SET_SELECTED_ARTICLE
 * 
 * FOLOW USER IN SELECTED ARTICLE
 *  - SET_SELECTED_ARTICLE
 * 
 * delete article -> go to hom page
 * 
 * edit owned article
 *  - LOADING_ARTICLE -> SET_SELECTED_ARTICLE
 * 
 * add new article
 *  - SET_SELECTED_ARTICLE
 * 
 * VIEW USER PROFILE
 *  - LOADING_USER -> SET_SELECTED_USER
 *  - SET_TABS -> CHANGE_TAB -> LOADING_ARTICLES -> SET_ARTICLES
 * 
 * edit profile
 *  - state didn't change
 * 
 * FOLOW USER IN PROFILE
 *  - SET_SELECTED_USER
 * 
 * select a tag
 *  - SET_TABS -> CHANGE_TAB -> LOADING_ARTICLES -> SET_ARTICLES
 * 
 */

/**
 * shap of state
 */
/**
{
    articles: {
        articleList: [{
            title: "Test",
            slug: "test-pv547p",
            body: "This is only test!",
            createdAt: "2018-01-24T08:14:28.512Z",
            updatedAt: "2018-01-24T08:14:28.512Z",
            tagList: [],
            description: "TestingAbout",
            author: {
                username: "MarcisTest",
                bio: null,
                image: "https://static.productionready.io/images/smiley-cyrus.jpg",
                following: true
            },
            favorited: false,
            favoritesCount: 0
        }],
        articleCount: 1,
        isLoading: false
    },
    tabs: {
        tabList: ['Your Feed', 'Global Feed'],
        activeTab: 'Your Feed',
    },
    tags: {
        tagList: ['dragons', 'test'],
        isLoading: false
    },
    selectedArticle: {
        article: {
            title: "Test",
            slug: "test-pv547p",
            body: "This is only test!",
            createdAt: "2018-01-24T08:14:28.512Z",
            updatedAt: "2018-01-24T08:14:28.512Z",
            tagList: [],
            description: "TestingAbout",
            author: {
                username: "MarcisTest",
                bio: null,
                image: "https://static.productionready.io/images/smiley-cyrus.jpg",
                following: true
            },
            favorited: false,
            favoritesCount: 0
        },
        isLoading: false
    },
    comments: {
        commentList: [],
        commentCount: 0,
        isLoading: false
    },
    selectedUser: {
        user: {
            bio: null,
            following: true,
            image: "https://static.productionready.io/images/smiley-cyrus.jpg",
            username: "MarcisTest"
        },
        isLoading: false
    }
}
*/
