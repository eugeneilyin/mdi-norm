import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScreenLockLandscape } from './FilledScreenLockLandscape'
import { OutlineScreenLockLandscape } from './OutlineScreenLockLandscape'
import { RoundScreenLockLandscape } from './RoundScreenLockLandscape'
import { SharpScreenLockLandscape } from './SharpScreenLockLandscape'
import { TwoToneScreenLockLandscape } from './TwoToneScreenLockLandscape'

export const ScreenLockLandscape = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScreenLockLandscape, OutlineScreenLockLandscape, RoundScreenLockLandscape, SharpScreenLockLandscape, TwoToneScreenLockLandscape)
