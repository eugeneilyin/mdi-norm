import { createThemedIcon } from './utils/createThemedIcon'
import { FilledOfflinePin } from './FilledOfflinePin'
import { OutlineOfflinePin } from './OutlineOfflinePin'
import { RoundOfflinePin } from './RoundOfflinePin'
import { SharpOfflinePin } from './SharpOfflinePin'
import { TwoToneOfflinePin } from './TwoToneOfflinePin'

export const OfflinePin = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledOfflinePin, OutlineOfflinePin, RoundOfflinePin, SharpOfflinePin, TwoToneOfflinePin)
