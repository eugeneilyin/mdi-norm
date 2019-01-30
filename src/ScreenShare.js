import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScreenShare } from './FilledScreenShare'
import { OutlineScreenShare } from './OutlineScreenShare'
import { RoundScreenShare } from './RoundScreenShare'
import { SharpScreenShare } from './SharpScreenShare'
import { TwoToneScreenShare } from './TwoToneScreenShare'

export const ScreenShare = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScreenShare, OutlineScreenShare, RoundScreenShare, SharpScreenShare, TwoToneScreenShare)
