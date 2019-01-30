import { createThemedIcon } from './utils/createThemedIcon'
import { FilledBubbleChart } from './FilledBubbleChart'
import { OutlineBubbleChart } from './OutlineBubbleChart'
import { RoundBubbleChart } from './RoundBubbleChart'
import { SharpBubbleChart } from './SharpBubbleChart'
import { TwoToneBubbleChart } from './TwoToneBubbleChart'

export const BubbleChart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledBubbleChart, OutlineBubbleChart, RoundBubbleChart, SharpBubbleChart, TwoToneBubbleChart)
