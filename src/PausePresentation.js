import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPausePresentation } from './FilledPausePresentation'
import { OutlinePausePresentation } from './OutlinePausePresentation'
import { RoundPausePresentation } from './RoundPausePresentation'
import { SharpPausePresentation } from './SharpPausePresentation'
import { TwoTonePausePresentation } from './TwoTonePausePresentation'

export const PausePresentation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPausePresentation, OutlinePausePresentation, RoundPausePresentation, SharpPausePresentation, TwoTonePausePresentation)
