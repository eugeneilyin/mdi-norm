import { createThemedIcon } from './utils/createThemedIcon'
import { FilledTabletAndroid } from './FilledTabletAndroid'
import { OutlineTabletAndroid } from './OutlineTabletAndroid'
import { RoundTabletAndroid } from './RoundTabletAndroid'
import { SharpTabletAndroid } from './SharpTabletAndroid'
import { TwoToneTabletAndroid } from './TwoToneTabletAndroid'

export const TabletAndroid = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledTabletAndroid, OutlineTabletAndroid, RoundTabletAndroid, SharpTabletAndroid, TwoToneTabletAndroid)
