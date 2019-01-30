import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOutlinedFlag } from './FilledOutlinedFlag'
import { OutlineOutlinedFlag } from './OutlineOutlinedFlag'
import { RoundOutlinedFlag } from './RoundOutlinedFlag'
import { SharpOutlinedFlag } from './SharpOutlinedFlag'
import { TwoToneOutlinedFlag } from './TwoToneOutlinedFlag'

export const OutlinedFlag = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOutlinedFlag, OutlineOutlinedFlag, RoundOutlinedFlag, SharpOutlinedFlag, TwoToneOutlinedFlag)
