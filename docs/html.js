import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';

const propTypes = {
    body: PropTypes.string,
    favicon: PropTypes.string,
    title: PropTypes.string
};

const DocHtml = props => {
    const title = props.title
        ? props.title
        : DocumentTitle.rewind();

    const cssLink = (process.env.NODE_ENV === 'production')
        ? <link rel="stylesheet" href={prefixLink('/styles.css')} />
        : null;

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
                <title>{title}</title>
                {props.favicon && <link rel="shortcut icon" href={props.favicon} />}
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <script src="https://npmcdn.com/dialog-polyfill/dialog-polyfill.js"></script>
                <link rel="stylesheet" type="text/css" href="https://npmcdn.com/dialog-polyfill/dialog-polyfill.css" />
                {cssLink}
            </head>
            <body>
                <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
                <script src={prefixLink('/bundle.js')} />
                <script
                    dangerouslySetInnerHTML={{ __html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-73434705-1', 'auto');
ga('send', 'pageview');` }}
                />
            </body>
        </html>
    );
};

DocHtml.propTypes = propTypes;

export default DocHtml;
