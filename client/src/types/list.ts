// doing so, Arrays of ListRow and Descendants can be indexed by type string;
// see https://stackoverflow.com/questions/78285060/element-implicitly-has-an-any-type-no-index-signature-with-a-parameter-of-typ
// TODO: find the theory behind this
export interface ListRow {
  [id: string]: string
}
