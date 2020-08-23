import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import Emoji from 'react-emoji-render'

export default () =>
  S.list()
    .title('Lane Le Prevost-Smith Website')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(() => <Emoji style={{ fontSize: 30 }} text='⚙️' />)
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Contact Details')
        .icon(() => <Emoji style={{ fontSize: 30 }} text='📞' />)
        .child(
          S.editor().schemaType('contactDetails').documentId('contactDetails')
        ),
      S.divider(),
      S.listItem()
        .title('About Page')
        .icon(() => <Emoji style={{ fontSize: 30 }} text='🙋🏽‍♂️' />)
        .child(S.editor().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Projects')
        .icon(() => <Emoji style={{ fontSize: 30 }} text='💻' />)
        .child(S.documentTypeList('projects').title('Projects')),
    ])
