import { createThemedIcon } from './utils/createThemedIcon'
import { FilledReport } from './FilledReport'
import { OutlineReport } from './OutlineReport'
import { RoundReport } from './RoundReport'
import { SharpReport } from './SharpReport'
import { TwoToneReport } from './TwoToneReport'

export const Report = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledReport, OutlineReport, RoundReport, SharpReport, TwoToneReport)
