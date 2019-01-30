import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddComment } from './FilledAddComment'
import { OutlineAddComment } from './OutlineAddComment'
import { RoundAddComment } from './RoundAddComment'
import { SharpAddComment } from './SharpAddComment'
import { TwoToneAddComment } from './TwoToneAddComment'

export const AddComment = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddComment, OutlineAddComment, RoundAddComment, SharpAddComment, TwoToneAddComment)
