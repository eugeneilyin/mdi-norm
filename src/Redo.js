import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRedo } from './FilledRedo'
import { OutlineRedo } from './OutlineRedo'
import { RoundRedo } from './RoundRedo'
import { SharpRedo } from './SharpRedo'
import { TwoToneRedo } from './TwoToneRedo'

export const Redo = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRedo, OutlineRedo, RoundRedo, SharpRedo, TwoToneRedo)
