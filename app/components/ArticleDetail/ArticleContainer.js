import { connect } from 'react-redux'
import { fectchArticle } from '../../actions/thunkActionCreator'
import { setSelectedArticle } from '../../actions/actionCreator'
import Article from './Article'

const mapStateToProps = state => {
    return {
        article: state.selectedArticle.article,
        isLoading: state.selectedArticle.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fectchArticle: articleId => {
            dispatch(fectchArticle(articleId))
        },
        setSelectedArticle: article => {
            dispatch(setSelectedArticle(article, false))
        }
    }
}

const ArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Article)
  
export default ArticleContainer
