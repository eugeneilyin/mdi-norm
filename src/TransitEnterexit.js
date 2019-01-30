import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTransitEnterexit } from './FilledTransitEnterexit'
import { OutlineTransitEnterexit } from './OutlineTransitEnterexit'
import { RoundTransitEnterexit } from './RoundTransitEnterexit'
import { SharpTransitEnterexit } from './SharpTransitEnterexit'
import { TwoToneTransitEnterexit } from './TwoToneTransitEnterexit'

export const TransitEnterexit = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTransitEnterexit, OutlineTransitEnterexit, RoundTransitEnterexit, SharpTransitEnterexit, TwoToneTransitEnterexit)
