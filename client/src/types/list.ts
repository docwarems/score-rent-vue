// doing so, Arrays of ListRow and Descendants can be indexed by type string;
// see https://stackoverflow.com/questions/78285060/element-implicitly-has-an-any-type-no-index-signature-with-a-parameter-of-typ
// see https://www.typescriptlang.org/docs/handbook/2/objects.html "Index signatures"
// TODO: string properties in descendants can't be undefined

/**
 * ListRow represents a row in a data table.
 * It is more or less a map: fieldId -> fieldValue.
 * We will iterate over it using a v-for - this will require a key to index the elements,
 * i.e. we need to be able to uniquely identify a row in a list of rows.
 * E.g. in a user table this id will be the unique userId.
 *
 * Because ListRow is an abstraction for a concrete case, we don't know it's future
 * field ids right now.
 * We can cope with this using an index signature (https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
 * Doing so we define that a ListRow object consists only of properties of this type.
 * An example would be:
 * {
 *    id: mi.jordan
 *    firstName: Michael
 *    lastName: Jordan
 *    age: 46
 * }
 */
export interface ListRow {
  id: string // the rowId
  [fieldId: string]: string | number | boolean | undefined
}
