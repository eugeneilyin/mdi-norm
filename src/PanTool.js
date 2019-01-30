import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPanTool } from './FilledPanTool'
import { OutlinePanTool } from './OutlinePanTool'
import { RoundPanTool } from './RoundPanTool'
import { SharpPanTool } from './SharpPanTool'
import { TwoTonePanTool } from './TwoTonePanTool'

export const PanTool = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPanTool, OutlinePanTool, RoundPanTool, SharpPanTool, TwoTonePanTool)
