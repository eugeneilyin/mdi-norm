import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsBike } from './FilledDirectionsBike'
import { OutlineDirectionsBike } from './OutlineDirectionsBike'
import { RoundDirectionsBike } from './RoundDirectionsBike'
import { SharpDirectionsBike } from './SharpDirectionsBike'
import { TwoToneDirectionsBike } from './TwoToneDirectionsBike'

export const DirectionsBike = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsBike, OutlineDirectionsBike, RoundDirectionsBike, SharpDirectionsBike, TwoToneDirectionsBike)
