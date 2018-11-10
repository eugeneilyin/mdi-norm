import { createThemedIcon } from './utils/createThemedIcon'
import { IconQueryBuilderFilled } from './IconQueryBuilderFilled'
import { IconQueryBuilderOutlined } from './IconQueryBuilderOutlined'
import { IconQueryBuilderRounded } from './IconQueryBuilderRounded'
import { IconQueryBuilderSharp } from './IconQueryBuilderSharp'
import { IconQueryBuilderTwoTone } from './IconQueryBuilderTwoTone'

export const IconQueryBuilder = /*#__PURE__*/ props =>
  createThemedIcon(props, IconQueryBuilderFilled, IconQueryBuilderOutlined, IconQueryBuilderRounded, IconQueryBuilderSharp, IconQueryBuilderTwoTone)
