import S from '@sanity/desk-tool/structure-builder';
import { DocumentIcon } from '@sanity/icons';

const generateDeskStructure = ({title, type}) => {
  return S.listItem()
  .title(title)
  .icon(DocumentIcon)
  .schemaType(type)
  .child(
    S.documentTypeList(type)
      .defaultOrdering([{ field: 'title', direction: 'asc'}])
  )
}

const documents = [
  {
    title: `Projects`,
    type: `projects`
  },
]

export default documents.map(document => {
  return generateDeskStructure(document);
})