import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSdCard } from './FilledSdCard'
import { OutlineSdCard } from './OutlineSdCard'
import { RoundSdCard } from './RoundSdCard'
import { SharpSdCard } from './SharpSdCard'
import { TwoToneSdCard } from './TwoToneSdCard'

export const SdCard = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSdCard, OutlineSdCard, RoundSdCard, SharpSdCard, TwoToneSdCard)
