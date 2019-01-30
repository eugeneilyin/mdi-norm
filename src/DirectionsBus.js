import { createThemedIcon } from './utils/createThemedIcon'
import { FilledDirectionsBus } from './FilledDirectionsBus'
import { OutlineDirectionsBus } from './OutlineDirectionsBus'
import { RoundDirectionsBus } from './RoundDirectionsBus'
import { SharpDirectionsBus } from './SharpDirectionsBus'
import { TwoToneDirectionsBus } from './TwoToneDirectionsBus'

export const DirectionsBus = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledDirectionsBus, OutlineDirectionsBus, RoundDirectionsBus, SharpDirectionsBus, TwoToneDirectionsBus)
