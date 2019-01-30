import { createThemedIcon } from './utils/createThemedIcon'
import { FilledControlPointDuplicate } from './FilledControlPointDuplicate'
import { OutlineControlPointDuplicate } from './OutlineControlPointDuplicate'
import { RoundControlPointDuplicate } from './RoundControlPointDuplicate'
import { SharpControlPointDuplicate } from './SharpControlPointDuplicate'
import { TwoToneControlPointDuplicate } from './TwoToneControlPointDuplicate'

export const ControlPointDuplicate = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledControlPointDuplicate, OutlineControlPointDuplicate, RoundControlPointDuplicate, SharpControlPointDuplicate, TwoToneControlPointDuplicate)
