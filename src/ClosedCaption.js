import { createThemedIcon } from './utils/createThemedIcon'
import { FilledClosedCaption } from './FilledClosedCaption'
import { OutlineClosedCaption } from './OutlineClosedCaption'
import { RoundClosedCaption } from './RoundClosedCaption'
import { SharpClosedCaption } from './SharpClosedCaption'
import { TwoToneClosedCaption } from './TwoToneClosedCaption'

export const ClosedCaption = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledClosedCaption, OutlineClosedCaption, RoundClosedCaption, SharpClosedCaption, TwoToneClosedCaption)
