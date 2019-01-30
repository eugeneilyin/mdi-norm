import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterVintage } from './FilledFilterVintage'
import { OutlineFilterVintage } from './OutlineFilterVintage'
import { RoundFilterVintage } from './RoundFilterVintage'
import { SharpFilterVintage } from './SharpFilterVintage'
import { TwoToneFilterVintage } from './TwoToneFilterVintage'

export const FilterVintage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterVintage, OutlineFilterVintage, RoundFilterVintage, SharpFilterVintage, TwoToneFilterVintage)
