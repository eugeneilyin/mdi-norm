import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDeveloperMode } from './FilledDeveloperMode'
import { OutlineDeveloperMode } from './OutlineDeveloperMode'
import { RoundDeveloperMode } from './RoundDeveloperMode'
import { SharpDeveloperMode } from './SharpDeveloperMode'
import { TwoToneDeveloperMode } from './TwoToneDeveloperMode'

export const DeveloperMode = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDeveloperMode, OutlineDeveloperMode, RoundDeveloperMode, SharpDeveloperMode, TwoToneDeveloperMode)
