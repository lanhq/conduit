import React, {Component, PureComponent} from 'react';
import Api from './services/api';

class Tags extends PureComponent {

    constructor(props) {
        super(props);

        // this._selectTag = this._selectTag.bind(this);
    }

    // _selectTag (tag) {
    //     this.props.selectTag(tag)
    // }

    componentWillMount() {
        this.props.loadingTags()
        Api
            .getTags()
            .then(tags => {
                this.props.setTags(tags)
            });
    }

    render () {
        var tags = this.props.tags,
            isLoading = this.props.isLoading;
        if (isLoading) {
            return (
                <div className="col-md-3">
                    <div className="sidebar">
                        <p>Popular Tags</p>
                        <div className="tag-list">
                            Loading articles...
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="col-md-3">
                <div className="sidebar">
                    <p>Popular Tags</p>
                    <div className="tag-list">
                        {
                            tags.map(
                                (tag, index) => (
                                    <a id={tag} key={index} href="#" className="tag-pill tag-default" onClick={() => { this.props.selectTag(tag)}}>{tag}</a>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Tags;
