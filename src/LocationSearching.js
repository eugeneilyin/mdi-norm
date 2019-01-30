import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocationSearching } from './FilledLocationSearching'
import { OutlineLocationSearching } from './OutlineLocationSearching'
import { RoundLocationSearching } from './RoundLocationSearching'
import { SharpLocationSearching } from './SharpLocationSearching'
import { TwoToneLocationSearching } from './TwoToneLocationSearching'

export const LocationSearching = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocationSearching, OutlineLocationSearching, RoundLocationSearching, SharpLocationSearching, TwoToneLocationSearching)
