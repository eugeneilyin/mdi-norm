import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewQuilt } from './FilledViewQuilt'
import { OutlineViewQuilt } from './OutlineViewQuilt'
import { RoundViewQuilt } from './RoundViewQuilt'
import { SharpViewQuilt } from './SharpViewQuilt'
import { TwoToneViewQuilt } from './TwoToneViewQuilt'

export const ViewQuilt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewQuilt, OutlineViewQuilt, RoundViewQuilt, SharpViewQuilt, TwoToneViewQuilt)
