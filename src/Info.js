import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInfo } from './FilledInfo'
import { OutlineInfo } from './OutlineInfo'
import { RoundInfo } from './RoundInfo'
import { SharpInfo } from './SharpInfo'
import { TwoToneInfo } from './TwoToneInfo'

export const Info = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInfo, OutlineInfo, RoundInfo, SharpInfo, TwoToneInfo)
