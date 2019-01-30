import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRotate90DegreesCcw } from './FilledRotate90DegreesCcw'
import { OutlineRotate90DegreesCcw } from './OutlineRotate90DegreesCcw'
import { RoundRotate90DegreesCcw } from './RoundRotate90DegreesCcw'
import { SharpRotate90DegreesCcw } from './SharpRotate90DegreesCcw'
import { TwoToneRotate90DegreesCcw } from './TwoToneRotate90DegreesCcw'

export const Rotate90DegreesCcw = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRotate90DegreesCcw, OutlineRotate90DegreesCcw, RoundRotate90DegreesCcw, SharpRotate90DegreesCcw, TwoToneRotate90DegreesCcw)
