import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTrendingFlat } from './FilledTrendingFlat'
import { OutlineTrendingFlat } from './OutlineTrendingFlat'
import { RoundTrendingFlat } from './RoundTrendingFlat'
import { SharpTrendingFlat } from './SharpTrendingFlat'
import { TwoToneTrendingFlat } from './TwoToneTrendingFlat'

export const TrendingFlat = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTrendingFlat, OutlineTrendingFlat, RoundTrendingFlat, SharpTrendingFlat, TwoToneTrendingFlat)
