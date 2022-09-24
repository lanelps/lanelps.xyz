import S from '@sanity/desk-tool/structure-builder';

const generateDeskStructure = ({title, type}) => {
  return S.listItem()
  .title(title)
  .schemaType(type)
  .child(
    S.editor()
      .title(title)
      .schemaType(type)
      .documentId(type)
  )
}

const singletons = [
  {
    title: `Home`,
    type: `homePage`
  },
  {
    title: `About`,
    type: `aboutPage`
  },
  {
    title: `Contact`,
    type: `contactPage`
  },
]

export default singletons.map(singleton => {
  return generateDeskStructure(singleton);
})
