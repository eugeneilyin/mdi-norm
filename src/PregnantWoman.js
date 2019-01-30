import { createThemedIcon } from './utils/createThemedIcon'
import { FilledPregnantWoman } from './FilledPregnantWoman'
import { OutlinePregnantWoman } from './OutlinePregnantWoman'
import { RoundPregnantWoman } from './RoundPregnantWoman'
import { SharpPregnantWoman } from './SharpPregnantWoman'
import { TwoTonePregnantWoman } from './TwoTonePregnantWoman'

export const PregnantWoman = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledPregnantWoman, OutlinePregnantWoman, RoundPregnantWoman, SharpPregnantWoman, TwoTonePregnantWoman)
