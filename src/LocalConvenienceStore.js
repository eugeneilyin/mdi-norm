import { createThemedIcon } from './utils/createThemedIcon'
import { FilledLocalConvenienceStore } from './FilledLocalConvenienceStore'
import { OutlineLocalConvenienceStore } from './OutlineLocalConvenienceStore'
import { RoundLocalConvenienceStore } from './RoundLocalConvenienceStore'
import { SharpLocalConvenienceStore } from './SharpLocalConvenienceStore'
import { TwoToneLocalConvenienceStore } from './TwoToneLocalConvenienceStore'

export const LocalConvenienceStore = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledLocalConvenienceStore, OutlineLocalConvenienceStore, RoundLocalConvenienceStore, SharpLocalConvenienceStore, TwoToneLocalConvenienceStore)
