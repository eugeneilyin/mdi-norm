import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterBAndW } from './FilledFilterBAndW'
import { OutlineFilterBAndW } from './OutlineFilterBAndW'
import { RoundFilterBAndW } from './RoundFilterBAndW'
import { SharpFilterBAndW } from './SharpFilterBAndW'
import { TwoToneFilterBAndW } from './TwoToneFilterBAndW'

export const FilterBAndW = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterBAndW, OutlineFilterBAndW, RoundFilterBAndW, SharpFilterBAndW, TwoToneFilterBAndW)
