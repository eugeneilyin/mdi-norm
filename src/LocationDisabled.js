import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocationDisabled } from './FilledLocationDisabled'
import { OutlineLocationDisabled } from './OutlineLocationDisabled'
import { RoundLocationDisabled } from './RoundLocationDisabled'
import { SharpLocationDisabled } from './SharpLocationDisabled'
import { TwoToneLocationDisabled } from './TwoToneLocationDisabled'

export const LocationDisabled = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocationDisabled, OutlineLocationDisabled, RoundLocationDisabled, SharpLocationDisabled, TwoToneLocationDisabled)
