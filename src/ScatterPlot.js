import { createThemedIcon } from './utils/createThemedIcon'
import { FilledScatterPlot } from './FilledScatterPlot'
import { OutlineScatterPlot } from './OutlineScatterPlot'
import { RoundScatterPlot } from './RoundScatterPlot'
import { SharpScatterPlot } from './SharpScatterPlot'
import { TwoToneScatterPlot } from './TwoToneScatterPlot'

export const ScatterPlot = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledScatterPlot, OutlineScatterPlot, RoundScatterPlot, SharpScatterPlot, TwoToneScatterPlot)
