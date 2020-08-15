import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Navigation')
        .child(S.editor().schemaType('navigation').documentId('navigation')),
      S.listItem()
        .title('Contact Details')
        .child(
          S.editor().schemaType('contactDetails').documentId('contactDetails')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['siteSettings', 'navigation', 'contactDetails'].includes(
            listItem.getId()
          )
      ),
    ])
