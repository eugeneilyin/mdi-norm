import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalLibrary } from './FilledLocalLibrary'
import { OutlineLocalLibrary } from './OutlineLocalLibrary'
import { RoundLocalLibrary } from './RoundLocalLibrary'
import { SharpLocalLibrary } from './SharpLocalLibrary'
import { TwoToneLocalLibrary } from './TwoToneLocalLibrary'

export const LocalLibrary = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalLibrary, OutlineLocalLibrary, RoundLocalLibrary, SharpLocalLibrary, TwoToneLocalLibrary)
