import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGroup } from './FilledGroup'
import { OutlineGroup } from './OutlineGroup'
import { RoundGroup } from './RoundGroup'
import { SharpGroup } from './SharpGroup'
import { TwoToneGroup } from './TwoToneGroup'

export const Group = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGroup, OutlineGroup, RoundGroup, SharpGroup, TwoToneGroup)
