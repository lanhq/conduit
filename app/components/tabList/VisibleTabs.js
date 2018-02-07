import { connect } from 'react-redux'
import { changeTab } from '../../actions/actionCreator'
import Tabs from './Tabs'

const mapStateToProps = state => {
    return {
        tabs: state.tabs.tabList,
        activeTab: state.tabs.activeTab
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeTab: tab => {
            dispatch(changeTab(tab))
        }
    }
}

const VisibleTabs = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs)
  
export default VisibleTabs
