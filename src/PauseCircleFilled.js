import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPauseCircleFilled } from './FilledPauseCircleFilled'
import { OutlinePauseCircleFilled } from './OutlinePauseCircleFilled'
import { RoundPauseCircleFilled } from './RoundPauseCircleFilled'
import { SharpPauseCircleFilled } from './SharpPauseCircleFilled'
import { TwoTonePauseCircleFilled } from './TwoTonePauseCircleFilled'

export const PauseCircleFilled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPauseCircleFilled, OutlinePauseCircleFilled, RoundPauseCircleFilled, SharpPauseCircleFilled, TwoTonePauseCircleFilled)
