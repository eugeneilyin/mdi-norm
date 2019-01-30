import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAndroid } from './FilledAndroid'
import { OutlineAndroid } from './OutlineAndroid'
import { RoundAndroid } from './RoundAndroid'
import { SharpAndroid } from './SharpAndroid'
import { TwoToneAndroid } from './TwoToneAndroid'

export const Android = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAndroid, OutlineAndroid, RoundAndroid, SharpAndroid, TwoToneAndroid)
