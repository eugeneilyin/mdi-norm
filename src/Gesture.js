import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGesture } from './FilledGesture'
import { OutlineGesture } from './OutlineGesture'
import { RoundGesture } from './RoundGesture'
import { SharpGesture } from './SharpGesture'
import { TwoToneGesture } from './TwoToneGesture'

export const Gesture = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGesture, OutlineGesture, RoundGesture, SharpGesture, TwoToneGesture)
