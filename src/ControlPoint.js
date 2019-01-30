import { createThemedIcon } from './utils/createThemedIcon'
import { FilledControlPoint } from './FilledControlPoint'
import { OutlineControlPoint } from './OutlineControlPoint'
import { RoundControlPoint } from './RoundControlPoint'
import { SharpControlPoint } from './SharpControlPoint'
import { TwoToneControlPoint } from './TwoToneControlPoint'

export const ControlPoint = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledControlPoint, OutlineControlPoint, RoundControlPoint, SharpControlPoint, TwoToneControlPoint)
