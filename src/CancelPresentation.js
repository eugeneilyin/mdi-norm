import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCancelPresentation } from './FilledCancelPresentation'
import { OutlineCancelPresentation } from './OutlineCancelPresentation'
import { RoundCancelPresentation } from './RoundCancelPresentation'
import { SharpCancelPresentation } from './SharpCancelPresentation'
import { TwoToneCancelPresentation } from './TwoToneCancelPresentation'

export const CancelPresentation = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCancelPresentation, OutlineCancelPresentation, RoundCancelPresentation, SharpCancelPresentation, TwoToneCancelPresentation)
