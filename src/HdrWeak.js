import { createThemedIcon } from './utils/createThemedIcon'
import { FilledHdrWeak } from './FilledHdrWeak'
import { OutlineHdrWeak } from './OutlineHdrWeak'
import { RoundHdrWeak } from './RoundHdrWeak'
import { SharpHdrWeak } from './SharpHdrWeak'
import { TwoToneHdrWeak } from './TwoToneHdrWeak'

export const HdrWeak = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledHdrWeak, OutlineHdrWeak, RoundHdrWeak, SharpHdrWeak, TwoToneHdrWeak)
