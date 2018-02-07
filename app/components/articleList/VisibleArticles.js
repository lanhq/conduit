import { connect } from 'react-redux'
import { setArticles, likeAArticle, loadingArticles } from '../../actions/actionCreator'
import { fetchArticles } from '../../actions/thunkActionCreator'
import Feeds from './Feeds'

const mapStateToProps = state => {
    return {
        activeTab: state.tabs.activeTab,
        isLoading: state.articles.isLoading,
        articleCount: state.articles.articleCount,
        articleList: state.articles.articleList,
        tabs: state.tabs.tabList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setArticles: articles => {
            dispatch(setArticles(articles))
        },
        likeAArticle: article => {
            dispatch(likeAArticle(article))
        },
        loadingArticles: () => {
            dispatch(loadingArticles())
        },
        fetchArticles: () => {
            dispatch(fetchArticles())
        }
    }
}

const VisibleArticles = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feeds)
  
export default VisibleArticles
