import { createThemedIcon } from './utils/createThemedIcon'
import { IconFormatShapesFilled } from './IconFormatShapesFilled'
import { IconFormatShapesOutlined } from './IconFormatShapesOutlined'
import { IconFormatShapesRounded } from './IconFormatShapesRounded'
import { IconFormatShapesSharp } from './IconFormatShapesSharp'
import { IconFormatShapesTwoTone } from './IconFormatShapesTwoTone'

export const IconFormatShapes = /*#__PURE__*/ props =>
  createThemedIcon(props, IconFormatShapesFilled, IconFormatShapesOutlined, IconFormatShapesRounded, IconFormatShapesSharp, IconFormatShapesTwoTone)
