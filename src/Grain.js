import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGrain } from './FilledGrain'
import { OutlineGrain } from './OutlineGrain'
import { RoundGrain } from './RoundGrain'
import { SharpGrain } from './SharpGrain'
import { TwoToneGrain } from './TwoToneGrain'

export const Grain = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGrain, OutlineGrain, RoundGrain, SharpGrain, TwoToneGrain)
