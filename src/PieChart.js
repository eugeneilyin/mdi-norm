import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPieChart } from './FilledPieChart'
import { OutlinePieChart } from './OutlinePieChart'
import { RoundPieChart } from './RoundPieChart'
import { SharpPieChart } from './SharpPieChart'
import { TwoTonePieChart } from './TwoTonePieChart'

export const PieChart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPieChart, OutlinePieChart, RoundPieChart, SharpPieChart, TwoTonePieChart)
