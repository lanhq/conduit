import React, {PureComponent} from "react";
import Token from "../../services/token";

const HIDDEN = {
    display: 'none'
};

const Tabs = (props) => {
    let activeTab = props.activeTab,
        tabs = props.tabs;
    let changeTab = props.changeTab;

    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                {
                    tabs.map((tab, index) => {
                        let tabClass = tab === activeTab ? 'active' : '';
                        return (
                            <li className="nav-item" key={index}>
                                <a id={`tab-${tab}`} className={`nav-link ${tabClass}`} href="#" onClick={() => changeTab(tab)}>{tab}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Tabs;