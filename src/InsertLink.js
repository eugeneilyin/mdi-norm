import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInsertLink } from './FilledInsertLink'
import { OutlineInsertLink } from './OutlineInsertLink'
import { RoundInsertLink } from './RoundInsertLink'
import { SharpInsertLink } from './SharpInsertLink'
import { TwoToneInsertLink } from './TwoToneInsertLink'

export const InsertLink = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInsertLink, OutlineInsertLink, RoundInsertLink, SharpInsertLink, TwoToneInsertLink)
