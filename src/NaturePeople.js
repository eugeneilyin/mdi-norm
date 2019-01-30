import { createThemedIcon } from './utils/createThemedIcon'
import { FilledNaturePeople } from './FilledNaturePeople'
import { OutlineNaturePeople } from './OutlineNaturePeople'
import { RoundNaturePeople } from './RoundNaturePeople'
import { SharpNaturePeople } from './SharpNaturePeople'
import { TwoToneNaturePeople } from './TwoToneNaturePeople'

export const NaturePeople = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledNaturePeople, OutlineNaturePeople, RoundNaturePeople, SharpNaturePeople, TwoToneNaturePeople)
