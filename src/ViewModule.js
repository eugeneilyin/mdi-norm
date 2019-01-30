import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewModule } from './FilledViewModule'
import { OutlineViewModule } from './OutlineViewModule'
import { RoundViewModule } from './RoundViewModule'
import { SharpViewModule } from './SharpViewModule'
import { TwoToneViewModule } from './TwoToneViewModule'

export const ViewModule = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewModule, OutlineViewModule, RoundViewModule, SharpViewModule, TwoToneViewModule)
