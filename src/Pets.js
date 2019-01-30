import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPets } from './FilledPets'
import { OutlinePets } from './OutlinePets'
import { RoundPets } from './RoundPets'
import { SharpPets } from './SharpPets'
import { TwoTonePets } from './TwoTonePets'

export const Pets = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPets, OutlinePets, RoundPets, SharpPets, TwoTonePets)
