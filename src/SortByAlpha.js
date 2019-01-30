import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSortByAlpha } from './FilledSortByAlpha'
import { OutlineSortByAlpha } from './OutlineSortByAlpha'
import { RoundSortByAlpha } from './RoundSortByAlpha'
import { SharpSortByAlpha } from './SharpSortByAlpha'
import { TwoToneSortByAlpha } from './TwoToneSortByAlpha'

export const SortByAlpha = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSortByAlpha, OutlineSortByAlpha, RoundSortByAlpha, SharpSortByAlpha, TwoToneSortByAlpha)
