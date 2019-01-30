import { createThemedIcon } from './utils/createThemedIcon'
import { FilledAddToQueue } from './FilledAddToQueue'
import { OutlineAddToQueue } from './OutlineAddToQueue'
import { RoundAddToQueue } from './RoundAddToQueue'
import { SharpAddToQueue } from './SharpAddToQueue'
import { TwoToneAddToQueue } from './TwoToneAddToQueue'

export const AddToQueue = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledAddToQueue, OutlineAddToQueue, RoundAddToQueue, SharpAddToQueue, TwoToneAddToQueue)
