import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddToHomeScreen } from './FilledAddToHomeScreen'
import { OutlineAddToHomeScreen } from './OutlineAddToHomeScreen'
import { RoundAddToHomeScreen } from './RoundAddToHomeScreen'
import { SharpAddToHomeScreen } from './SharpAddToHomeScreen'
import { TwoToneAddToHomeScreen } from './TwoToneAddToHomeScreen'

export const AddToHomeScreen = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddToHomeScreen, OutlineAddToHomeScreen, RoundAddToHomeScreen, SharpAddToHomeScreen, TwoToneAddToHomeScreen)
