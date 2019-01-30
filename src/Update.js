import { createThemedIcon } from './utils/createThemedIcon'
import { FilledUpdate } from './FilledUpdate'
import { OutlineUpdate } from './OutlineUpdate'
import { RoundUpdate } from './RoundUpdate'
import { SharpUpdate } from './SharpUpdate'
import { TwoToneUpdate } from './TwoToneUpdate'

export const Update = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledUpdate, OutlineUpdate, RoundUpdate, SharpUpdate, TwoToneUpdate)
