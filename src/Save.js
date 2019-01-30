import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSave } from './FilledSave'
import { OutlineSave } from './OutlineSave'
import { RoundSave } from './RoundSave'
import { SharpSave } from './SharpSave'
import { TwoToneSave } from './TwoToneSave'

export const Save = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSave, OutlineSave, RoundSave, SharpSave, TwoToneSave)
