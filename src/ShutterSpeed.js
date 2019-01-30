import { createThemedIcon } from './utils/createThemedIcon'
import { FilledShutterSpeed } from './FilledShutterSpeed'
import { OutlineShutterSpeed } from './OutlineShutterSpeed'
import { RoundShutterSpeed } from './RoundShutterSpeed'
import { SharpShutterSpeed } from './SharpShutterSpeed'
import { TwoToneShutterSpeed } from './TwoToneShutterSpeed'

export const ShutterSpeed = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledShutterSpeed, OutlineShutterSpeed, RoundShutterSpeed, SharpShutterSpeed, TwoToneShutterSpeed)
