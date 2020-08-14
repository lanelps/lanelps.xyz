import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function SEO({ title, url }) {
  const {
    site: {
      siteMetadata: {
        title: siteTitle,
        description,
        author,
        siteUrl,
        phone,
        email,
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          phone
          email
        }
      }
    }
  `)
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={`${title} | ${siteTitle} `}
      meta={[
        {
          name: 'google-site-verification',
          content: '',
        },
        { name: 'description', content: description },
        { name: 'author', content: author },
        {
          name: 'keywords',
          content:
            'Freelance, Graphic Design, Web Development, Auckland, New Zealand',
        },
        { name: 'phone', content: phone },
        { name: 'email', content: email },
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'googlebot', content: 'noindex, nofollow' },
      ].concat([])}>
      <link rel='canonical' href={`${siteUrl}${url && url}`} />
    </Helmet>
  )
}
