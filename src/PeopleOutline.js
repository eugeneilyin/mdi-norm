import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPeopleOutline } from './FilledPeopleOutline'
import { OutlinePeopleOutline } from './OutlinePeopleOutline'
import { RoundPeopleOutline } from './RoundPeopleOutline'
import { SharpPeopleOutline } from './SharpPeopleOutline'
import { TwoTonePeopleOutline } from './TwoTonePeopleOutline'

export const PeopleOutline = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPeopleOutline, OutlinePeopleOutline, RoundPeopleOutline, SharpPeopleOutline, TwoTonePeopleOutline)
