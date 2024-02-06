const React = require('react');

const Default = (html) => {
    return (
        <html>
            <head>
                <title>Title</title>
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
                    integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN'
                    crossOrigin='anonymous'
                />
                <link rel='stylesheet' href='/css/style.css' />
                <script
                    src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js'
                    integrity='sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+'
                    crossOrigin='anonymous'
                ></script>
            </head>
            <body>{html.children}</body>
        </html>
    );
};

module.exports = Default;
