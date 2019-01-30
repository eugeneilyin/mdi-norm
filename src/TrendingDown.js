import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTrendingDown } from './FilledTrendingDown'
import { OutlineTrendingDown } from './OutlineTrendingDown'
import { RoundTrendingDown } from './RoundTrendingDown'
import { SharpTrendingDown } from './SharpTrendingDown'
import { TwoToneTrendingDown } from './TwoToneTrendingDown'

export const TrendingDown = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTrendingDown, OutlineTrendingDown, RoundTrendingDown, SharpTrendingDown, TwoToneTrendingDown)
