import { createThemedIcon } from './utils/createThemedIcon'
import { FilledInsertEmoticon } from './FilledInsertEmoticon'
import { OutlineInsertEmoticon } from './OutlineInsertEmoticon'
import { RoundInsertEmoticon } from './RoundInsertEmoticon'
import { SharpInsertEmoticon } from './SharpInsertEmoticon'
import { TwoToneInsertEmoticon } from './TwoToneInsertEmoticon'

export const InsertEmoticon = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledInsertEmoticon, OutlineInsertEmoticon, RoundInsertEmoticon, SharpInsertEmoticon, TwoToneInsertEmoticon)
