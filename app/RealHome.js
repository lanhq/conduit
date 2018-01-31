import { connect } from 'react-redux'
import { changeTab, setTabs } from './actions/actionCreator'
import Home from './Home'

const mapStateToProps = state => {
    return {
        activeTab: state.tabs.activeTab
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTab: tab => {
            dispatch(changeTab(tab))
        },
        setTabs: tabs => {
            dispatch(setTabs(tabs))
        }
    }
}

const RealHome = connect(
    () => {
        return {}
    },
    mapDispatchToProps
)(Home)
  
export default RealHome
