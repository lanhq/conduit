import { connect } from 'react-redux'
import { selectTag, setTags, loadingTags } from './actions/actionCreator'
import Tags from './Tags'

const mapStateToProps = state => {
    return {
        tags: state.tags.tagList,
        isLoading: state.tags.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectTag: tag => {
            dispatch(selectTag(tag))
        },
        setTags: tags => {
            dispatch(setTags(tags))
        },
        loadingTags: () => {
            dispatch(loadingTags())
        }
    }
}

const VisibleTags = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tags)
  
export default VisibleTags
