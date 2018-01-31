/*
 * action types
 */

// LOADING ACTIONS
export const LOADING_ACTICLES = 'LOADING_ACTICLES'
export const LOADING_TAGS = 'LOADING_TAGS'
export const LOADING_ACTICLE = 'LOADING_ACTICLE'
export const LOADING_COMMENTS = 'LOADING_COMMENTS'
export const LOADING_USER = 'LOADING_USER'

export const SET_TAGS = 'SET_TAGS'

export const SET_TABS = 'SET_TABS'
export const CHANGE_TAB = 'CHANGE_TAB'
export const SET_ACTICLES = 'SET_ACTICLES'
export const LIKE_A_ACTICLE = 'LIKE_A_ACTICLE'

export const SET_SELECTED_ACTICLE = 'SET_SELECTED_ACTICLE'
export const SET_COMMENTS = 'SET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export const SET_SELECTED_USER = 'SET_SELECTED_USER'

/**
 * Some end user actions
 * go to home page
 *  - LOADING_TAGS -> SET_TAGS
 *  - SET_TABS -> CHANGE_TAB -> LOADING_ACTICLES -> SET_ACTICLES
 * 
 * like/unlike a acticle
 *  - LIKE_A_ACTICLE
 * 
 * view a acticle
 *  - LOADING_ACTICLE -> SET_SELECTED_ACTICLE
 *  - LOADING_COMMENTS -> SET_COMMENTS
 * 
 * POST A COMMENT
 *  - ADD_COMMENT
 * 
 * DELETE A COMMENT
 *  - DELETE_COMMENT
 * 
 * like/unlike selected acticle
 *  - SET_SELECTED_ACTICLE
 * 
 * FOLOW USER IN SELECTED ACTICLE
 *  - SET_SELECTED_ACTICLE
 * 
 * delete acticle -> go to hom page
 * 
 * edit owned acticle
 *  - LOADING_ACTICLE -> SET_SELECTED_ACTICLE
 * 
 * add new acticle
 *  - SET_SELECTED_ACTICLE
 * 
 * VIEW USER PROFILE
 *  - LOADING_USER -> SET_SELECTED_USER
 *  - SET_TABS -> CHANGE_TAB -> LOADING_ACTICLES -> SET_ACTICLES
 * 
 * edit profile
 *  - state didn't change
 * 
 * FOLOW USER IN PROFILE
 *  - SET_SELECTED_USER
 * 
 * select a tag
 *  - SET_TABS -> CHANGE_TAB -> LOADING_ACTICLES -> SET_ACTICLES
 * 
 */

/**
 * shap of state
 */
/**
{
    articles: {
        acticleList: [{
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
        acticleCount: 1,
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
    selectedActicle: {
        acticle: {
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
