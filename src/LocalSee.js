import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalSee } from './FilledLocalSee'
import { OutlineLocalSee } from './OutlineLocalSee'
import { RoundLocalSee } from './RoundLocalSee'
import { SharpLocalSee } from './SharpLocalSee'
import { TwoToneLocalSee } from './TwoToneLocalSee'

export const LocalSee = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalSee, OutlineLocalSee, RoundLocalSee, SharpLocalSee, TwoToneLocalSee)
