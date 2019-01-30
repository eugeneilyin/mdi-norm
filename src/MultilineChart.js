import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMultilineChart } from './FilledMultilineChart'
import { OutlineMultilineChart } from './OutlineMultilineChart'
import { RoundMultilineChart } from './RoundMultilineChart'
import { SharpMultilineChart } from './SharpMultilineChart'
import { TwoToneMultilineChart } from './TwoToneMultilineChart'

export const MultilineChart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMultilineChart, OutlineMultilineChart, RoundMultilineChart, SharpMultilineChart, TwoToneMultilineChart)
