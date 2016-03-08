import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';

const propTypes = {
    body: PropTypes.string,
    favicon: PropTypes.string,
    title: PropTypes.string
};

const DocHtml = props => {
    const title = props.title
        ? props.title
        : DocumentTitle.rewind();

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
                <title>{title}</title>
                {props.favicon && <link rel="shortcut icon" href={props.favicon} />}
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </head>
            <body>
                <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
                <script src={link('/bundle.js')} />
            </body>
        </html>
    );
};

DocHtml.propTypes = propTypes;

export default DocHtml;
