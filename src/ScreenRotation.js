import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScreenRotation } from './FilledScreenRotation'
import { OutlineScreenRotation } from './OutlineScreenRotation'
import { RoundScreenRotation } from './RoundScreenRotation'
import { SharpScreenRotation } from './SharpScreenRotation'
import { TwoToneScreenRotation } from './TwoToneScreenRotation'

export const ScreenRotation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScreenRotation, OutlineScreenRotation, RoundScreenRotation, SharpScreenRotation, TwoToneScreenRotation)
