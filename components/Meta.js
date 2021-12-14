import React from 'react'

const Meta = ( {title, keyword, description }) => {
    return (
        <head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keyword} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </head>
    )
}

Meta.defaultProps = {
    title: "Article's Den",
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev',
}

export default Meta
