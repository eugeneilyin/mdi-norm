import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDateRange } from './FilledDateRange'
import { OutlineDateRange } from './OutlineDateRange'
import { RoundDateRange } from './RoundDateRange'
import { SharpDateRange } from './SharpDateRange'
import { TwoToneDateRange } from './TwoToneDateRange'

export const DateRange = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDateRange, OutlineDateRange, RoundDateRange, SharpDateRange, TwoToneDateRange)
