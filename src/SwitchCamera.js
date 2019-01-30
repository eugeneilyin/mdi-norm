import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSwitchCamera } from './FilledSwitchCamera'
import { OutlineSwitchCamera } from './OutlineSwitchCamera'
import { RoundSwitchCamera } from './RoundSwitchCamera'
import { SharpSwitchCamera } from './SharpSwitchCamera'
import { TwoToneSwitchCamera } from './TwoToneSwitchCamera'

export const SwitchCamera = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSwitchCamera, OutlineSwitchCamera, RoundSwitchCamera, SharpSwitchCamera, TwoToneSwitchCamera)
