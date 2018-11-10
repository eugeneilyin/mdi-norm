import { createThemedIcon } from './utils/createThemedIcon'
import { IconPagesFilled } from './IconPagesFilled'
import { IconPagesOutlined } from './IconPagesOutlined'
import { IconPagesRounded } from './IconPagesRounded'
import { IconPagesSharp } from './IconPagesSharp'
import { IconPagesTwoTone } from './IconPagesTwoTone'

export const IconPages = /*#__PURE__*/ props =>
  createThemedIcon(props, IconPagesFilled, IconPagesOutlined, IconPagesRounded, IconPagesSharp, IconPagesTwoTone)
