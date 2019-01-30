import { createThemedIcon } from './utils/createThemedIcon'
import { FilledRemoveRedEye } from './FilledRemoveRedEye'
import { OutlineRemoveRedEye } from './OutlineRemoveRedEye'
import { RoundRemoveRedEye } from './RoundRemoveRedEye'
import { SharpRemoveRedEye } from './SharpRemoveRedEye'
import { TwoToneRemoveRedEye } from './TwoToneRemoveRedEye'

export const RemoveRedEye = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledRemoveRedEye, OutlineRemoveRedEye, RoundRemoveRedEye, SharpRemoveRedEye, TwoToneRemoveRedEye)
