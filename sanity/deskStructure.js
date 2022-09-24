import S from "@sanity/desk-tool/structure-builder";

import singletons from "./desk/singletons";
import documents from "./desk/documents";

const DOCUMENT_TYPES_IN_STRUCTURE = [
  `projects`,
  `aboutPage`,
  `contactPage`,
  `homePage`
];

export default () =>
  S.list()
    .title(`Content`)
    .items([
      ...singletons,
      S.divider(),
      ...documents,
      S.divider(),
      ...S.documentTypeListItems().filter(listItem => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId()))
    ]
  );
