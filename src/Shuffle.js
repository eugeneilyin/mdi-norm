import { createThemedIcon } from './utils/createThemedIcon'
import { FilledShuffle } from './FilledShuffle'
import { OutlineShuffle } from './OutlineShuffle'
import { RoundShuffle } from './RoundShuffle'
import { SharpShuffle } from './SharpShuffle'
import { TwoToneShuffle } from './TwoToneShuffle'

export const Shuffle = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledShuffle, OutlineShuffle, RoundShuffle, SharpShuffle, TwoToneShuffle)
