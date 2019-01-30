import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFilterDrama } from './FilledFilterDrama'
import { OutlineFilterDrama } from './OutlineFilterDrama'
import { RoundFilterDrama } from './RoundFilterDrama'
import { SharpFilterDrama } from './SharpFilterDrama'
import { TwoToneFilterDrama } from './TwoToneFilterDrama'

export const FilterDrama = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFilterDrama, OutlineFilterDrama, RoundFilterDrama, SharpFilterDrama, TwoToneFilterDrama)
