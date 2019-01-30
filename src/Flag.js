import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFlag } from './FilledFlag'
import { OutlineFlag } from './OutlineFlag'
import { RoundFlag } from './RoundFlag'
import { SharpFlag } from './SharpFlag'
import { TwoToneFlag } from './TwoToneFlag'

export const Flag = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFlag, OutlineFlag, RoundFlag, SharpFlag, TwoToneFlag)
