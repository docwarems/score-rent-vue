// doing so, Arrays of ListRow and Descendants can be indexed by type string;
// see https://stackoverflow.com/questions/78285060/element-implicitly-has-an-any-type-no-index-signature-with-a-parameter-of-typ
// see https://www.typescriptlang.org/docs/handbook/2/objects.html "Index signatures"
// TODO: string properties in descendants can't be undefined
export interface ListRow {
  [id: string]: string
}
