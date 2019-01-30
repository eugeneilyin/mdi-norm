import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSdStorage } from './FilledSdStorage'
import { OutlineSdStorage } from './OutlineSdStorage'
import { RoundSdStorage } from './RoundSdStorage'
import { SharpSdStorage } from './SharpSdStorage'
import { TwoToneSdStorage } from './TwoToneSdStorage'

export const SdStorage = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSdStorage, OutlineSdStorage, RoundSdStorage, SharpSdStorage, TwoToneSdStorage)
