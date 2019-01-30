import { createThemedIcon } from './utils/createThemedIcon'
import { FilledComment } from './FilledComment'
import { OutlineComment } from './OutlineComment'
import { RoundComment } from './RoundComment'
import { SharpComment } from './SharpComment'
import { TwoToneComment } from './TwoToneComment'

export const Comment = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledComment, OutlineComment, RoundComment, SharpComment, TwoToneComment)
