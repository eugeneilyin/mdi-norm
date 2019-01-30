import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTune } from './FilledTune'
import { OutlineTune } from './OutlineTune'
import { RoundTune } from './RoundTune'
import { SharpTune } from './SharpTune'
import { TwoToneTune } from './TwoToneTune'

export const Tune = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTune, OutlineTune, RoundTune, SharpTune, TwoToneTune)
