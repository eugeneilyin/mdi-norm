import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScreenLockRotation } from './FilledScreenLockRotation'
import { OutlineScreenLockRotation } from './OutlineScreenLockRotation'
import { RoundScreenLockRotation } from './RoundScreenLockRotation'
import { SharpScreenLockRotation } from './SharpScreenLockRotation'
import { TwoToneScreenLockRotation } from './TwoToneScreenLockRotation'

export const ScreenLockRotation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScreenLockRotation, OutlineScreenLockRotation, RoundScreenLockRotation, SharpScreenLockRotation, TwoToneScreenLockRotation)
