import { createThemedIcon } from './utils/createThemedIcon'
import { FilledSubdirectoryArrowRight } from './FilledSubdirectoryArrowRight'
import { OutlineSubdirectoryArrowRight } from './OutlineSubdirectoryArrowRight'
import { RoundSubdirectoryArrowRight } from './RoundSubdirectoryArrowRight'
import { SharpSubdirectoryArrowRight } from './SharpSubdirectoryArrowRight'
import { TwoToneSubdirectoryArrowRight } from './TwoToneSubdirectoryArrowRight'

export const SubdirectoryArrowRight = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledSubdirectoryArrowRight, OutlineSubdirectoryArrowRight, RoundSubdirectoryArrowRight, SharpSubdirectoryArrowRight, TwoToneSubdirectoryArrowRight)
