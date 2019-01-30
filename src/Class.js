import { createThemedIcon } from './utils/createThemedIcon'
import { FilledClass } from './FilledClass'
import { OutlineClass } from './OutlineClass'
import { RoundClass } from './RoundClass'
import { SharpClass } from './SharpClass'
import { TwoToneClass } from './TwoToneClass'

export const Class = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledClass, OutlineClass, RoundClass, SharpClass, TwoToneClass)
