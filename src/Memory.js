import { createThemedIcon } from './utils/createThemedIcon'
import { FilledMemory } from './FilledMemory'
import { OutlineMemory } from './OutlineMemory'
import { RoundMemory } from './RoundMemory'
import { SharpMemory } from './SharpMemory'
import { TwoToneMemory } from './TwoToneMemory'

export const Memory = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledMemory, OutlineMemory, RoundMemory, SharpMemory, TwoToneMemory)
