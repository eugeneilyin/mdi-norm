import { createThemedIcon } from './utils/createThemedIcon'
import { FilledQueue } from './FilledQueue'
import { OutlineQueue } from './OutlineQueue'
import { RoundQueue } from './RoundQueue'
import { SharpQueue } from './SharpQueue'
import { TwoToneQueue } from './TwoToneQueue'

export const Queue = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledQueue, OutlineQueue, RoundQueue, SharpQueue, TwoToneQueue)
