import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCasino } from './FilledCasino'
import { OutlineCasino } from './OutlineCasino'
import { RoundCasino } from './RoundCasino'
import { SharpCasino } from './SharpCasino'
import { TwoToneCasino } from './TwoToneCasino'

export const Casino = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCasino, OutlineCasino, RoundCasino, SharpCasino, TwoToneCasino)
