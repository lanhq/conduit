import React, {PureComponent, Fragment} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import Storage from  '../../services/storage';
import {FavoriteButtonWithRouter, FollowButtonWithRouter, RemoveButtonWithRouter, EditButton} from '../Buttons'

class ArticleMeta extends PureComponent {

    constructor (props) {
        super(props);
    }

    render () {
        let {createdAt, author = {}} = this.props.article,
            {image = '', username = ''} = author,
            groupButtonEle;

        if (Storage.get('currentUsername') === username) {
            groupButtonEle = (
                <Fragment>
                    <EditButton article={this.props.article}/>
                    &nbsp;&nbsp;
                    <RemoveButtonWithRouter article={this.props.article}/>
                </Fragment>
            );
        } else if (username !== '') {
            groupButtonEle = (
                <Fragment>
                    <FollowButtonWithRouter article={this.props.article} onClick={this.props.onChange}/>
                    &nbsp;&nbsp;
                    <FavoriteButtonWithRouter article={this.props.article} onClick={this.props.onChange}/>
                </Fragment>
            );
        }

        return (
            <div className="article-meta">
                <Link to={`/profile/${username}`}><img src={image} /></Link>
                <div className="info">
                    <Link to={`/profile/${username}`} className="author">{username}</Link>
                    <span className="date">{moment(createdAt).format('MMMM DD, YYYY')}</span>
                </div>
                {this.props.article && groupButtonEle}
            </div>
        );
    }
}

export default ArticleMeta;
