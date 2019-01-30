import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCached } from './FilledCached'
import { OutlineCached } from './OutlineCached'
import { RoundCached } from './RoundCached'
import { SharpCached } from './SharpCached'
import { TwoToneCached } from './TwoToneCached'

export const Cached = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCached, OutlineCached, RoundCached, SharpCached, TwoToneCached)
