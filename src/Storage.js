import { createThemedIcon } from './utils/createThemedIcon'
import { FilledStorage } from './FilledStorage'
import { OutlineStorage } from './OutlineStorage'
import { RoundStorage } from './RoundStorage'
import { SharpStorage } from './SharpStorage'
import { TwoToneStorage } from './TwoToneStorage'

export const Storage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledStorage, OutlineStorage, RoundStorage, SharpStorage, TwoToneStorage)
