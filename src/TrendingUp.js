import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTrendingUp } from './FilledTrendingUp'
import { OutlineTrendingUp } from './OutlineTrendingUp'
import { RoundTrendingUp } from './RoundTrendingUp'
import { SharpTrendingUp } from './SharpTrendingUp'
import { TwoToneTrendingUp } from './TwoToneTrendingUp'

export const TrendingUp = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTrendingUp, OutlineTrendingUp, RoundTrendingUp, SharpTrendingUp, TwoToneTrendingUp)
