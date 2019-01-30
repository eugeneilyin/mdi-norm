import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInsertChart } from './FilledInsertChart'
import { OutlineInsertChart } from './OutlineInsertChart'
import { RoundInsertChart } from './RoundInsertChart'
import { SharpInsertChart } from './SharpInsertChart'
import { TwoToneInsertChart } from './TwoToneInsertChart'

export const InsertChart = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInsertChart, OutlineInsertChart, RoundInsertChart, SharpInsertChart, TwoToneInsertChart)
