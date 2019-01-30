import { createThemedIcon } from './utils/createThemedIcon'
import { FilledFace } from './FilledFace'
import { OutlineFace } from './OutlineFace'
import { RoundFace } from './RoundFace'
import { SharpFace } from './SharpFace'
import { TwoToneFace } from './TwoToneFace'

export const Face = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledFace, OutlineFace, RoundFace, SharpFace, TwoToneFace)
