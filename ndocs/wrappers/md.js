import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

const propTypes = {
    route: PropTypes.object
};

const MarkdownWrapper = props => {
    const post = props.route.page.data;

    const title = post.title === config.siteTitle || !post.title
        ? config.siteTitle
        : `${post.title} | ${config.siteTitle}`;

    return (
        <DocumentTitle title={title}>
            <div className="markdown">
                {post.title && <h1>{post.title}</h1>}
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
        </DocumentTitle>
    );
};

MarkdownWrapper.propTypes = propTypes;

export default MarkdownWrapper;
