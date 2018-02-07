import { connect } from 'react-redux'
import { changeTab, setTabs } from '../../actions/actionCreator'
import { fectchArticle } from '../../actions/thunkActionCreator'
import EditArticle from './EditArticle'

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
        setSelectedArticle: (article, isNew) => {
            dispatch(setSelectedArticle(article, isNew))
        }
    }
}

const EditArticleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditArticle)
  
export default EditArticleContainer
