import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAttachFile } from './FilledAttachFile'
import { OutlineAttachFile } from './OutlineAttachFile'
import { RoundAttachFile } from './RoundAttachFile'
import { SharpAttachFile } from './SharpAttachFile'
import { TwoToneAttachFile } from './TwoToneAttachFile'

export const AttachFile = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAttachFile, OutlineAttachFile, RoundAttachFile, SharpAttachFile, TwoToneAttachFile)
