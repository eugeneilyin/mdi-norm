import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterNone } from './FilledFilterNone'
import { OutlineFilterNone } from './OutlineFilterNone'
import { RoundFilterNone } from './RoundFilterNone'
import { SharpFilterNone } from './SharpFilterNone'
import { TwoToneFilterNone } from './TwoToneFilterNone'

export const FilterNone = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterNone, OutlineFilterNone, RoundFilterNone, SharpFilterNone, TwoToneFilterNone)
