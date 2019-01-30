import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPauseCircleOutline } from './FilledPauseCircleOutline'
import { OutlinePauseCircleOutline } from './OutlinePauseCircleOutline'
import { RoundPauseCircleOutline } from './RoundPauseCircleOutline'
import { SharpPauseCircleOutline } from './SharpPauseCircleOutline'
import { TwoTonePauseCircleOutline } from './TwoTonePauseCircleOutline'

export const PauseCircleOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPauseCircleOutline, OutlinePauseCircleOutline, RoundPauseCircleOutline, SharpPauseCircleOutline, TwoTonePauseCircleOutline)
