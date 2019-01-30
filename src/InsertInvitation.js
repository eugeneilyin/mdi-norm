import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInsertInvitation } from './FilledInsertInvitation'
import { OutlineInsertInvitation } from './OutlineInsertInvitation'
import { RoundInsertInvitation } from './RoundInsertInvitation'
import { SharpInsertInvitation } from './SharpInsertInvitation'
import { TwoToneInsertInvitation } from './TwoToneInsertInvitation'

export const InsertInvitation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInsertInvitation, OutlineInsertInvitation, RoundInsertInvitation, SharpInsertInvitation, TwoToneInsertInvitation)
