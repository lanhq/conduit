import { connect } from 'react-redux'
import { fetchLoggedUser } from '../../actions/thunkActionCreator'
import { setLoggedUser } from '../../actions/actionCreator'
import RealworldApp from './RealworldApp'
import { withRouter } from 'react-router'

const mapStateToProps = state => {
    return {
        user: state.loggedUser.user,
        isLoading: state.loggedUser.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLoggedUser: () => {
            dispatch(fetchLoggedUser())
        },
        setLoggedUser: (user) => {
            dispatch(setLoggedUser(user))
        }
    }
}

const RealWorldAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(RealworldApp)
  
export default RealWorldAppContainer
