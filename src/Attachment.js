import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAttachment } from './FilledAttachment'
import { OutlineAttachment } from './OutlineAttachment'
import { RoundAttachment } from './RoundAttachment'
import { SharpAttachment } from './SharpAttachment'
import { TwoToneAttachment } from './TwoToneAttachment'

export const Attachment = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAttachment, OutlineAttachment, RoundAttachment, SharpAttachment, TwoToneAttachment)
