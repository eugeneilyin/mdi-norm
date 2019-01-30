import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDock } from './FilledDock'
import { OutlineDock } from './OutlineDock'
import { RoundDock } from './RoundDock'
import { SharpDock } from './SharpDock'
import { TwoToneDock } from './TwoToneDock'

export const Dock = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDock, OutlineDock, RoundDock, SharpDock, TwoToneDock)
