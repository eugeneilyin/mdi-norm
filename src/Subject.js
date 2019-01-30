import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSubject } from './FilledSubject'
import { OutlineSubject } from './OutlineSubject'
import { RoundSubject } from './RoundSubject'
import { SharpSubject } from './SharpSubject'
import { TwoToneSubject } from './TwoToneSubject'

export const Subject = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSubject, OutlineSubject, RoundSubject, SharpSubject, TwoToneSubject)
