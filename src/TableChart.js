import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTableChart } from './FilledTableChart'
import { OutlineTableChart } from './OutlineTableChart'
import { RoundTableChart } from './RoundTableChart'
import { SharpTableChart } from './SharpTableChart'
import { TwoToneTableChart } from './TwoToneTableChart'

export const TableChart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTableChart, OutlineTableChart, RoundTableChart, SharpTableChart, TwoToneTableChart)
