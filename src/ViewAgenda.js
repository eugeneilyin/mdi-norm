import { createThemedIcon } from './utils/createThemedIcon'
import { FilledViewAgenda } from './FilledViewAgenda'
import { OutlineViewAgenda } from './OutlineViewAgenda'
import { RoundViewAgenda } from './RoundViewAgenda'
import { SharpViewAgenda } from './SharpViewAgenda'
import { TwoToneViewAgenda } from './TwoToneViewAgenda'

export const ViewAgenda = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledViewAgenda, OutlineViewAgenda, RoundViewAgenda, SharpViewAgenda, TwoToneViewAgenda)
