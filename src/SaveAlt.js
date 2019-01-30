import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSaveAlt } from './FilledSaveAlt'
import { OutlineSaveAlt } from './OutlineSaveAlt'
import { RoundSaveAlt } from './RoundSaveAlt'
import { SharpSaveAlt } from './SharpSaveAlt'
import { TwoToneSaveAlt } from './TwoToneSaveAlt'

export const SaveAlt = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSaveAlt, OutlineSaveAlt, RoundSaveAlt, SharpSaveAlt, TwoToneSaveAlt)
