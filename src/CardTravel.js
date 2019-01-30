import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCardTravel } from './FilledCardTravel'
import { OutlineCardTravel } from './OutlineCardTravel'
import { RoundCardTravel } from './RoundCardTravel'
import { SharpCardTravel } from './SharpCardTravel'
import { TwoToneCardTravel } from './TwoToneCardTravel'

export const CardTravel = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCardTravel, OutlineCardTravel, RoundCardTravel, SharpCardTravel, TwoToneCardTravel)
