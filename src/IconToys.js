import { createThemedIcon } from './utils/createThemedIcon'
import { IconToysFilled } from './IconToysFilled'
import { IconToysOutlined } from './IconToysOutlined'
import { IconToysRounded } from './IconToysRounded'
import { IconToysSharp } from './IconToysSharp'
import { IconToysTwoTone } from './IconToysTwoTone'

export const IconToys = /*#__PURE__*/ props =>
  createThemedIcon(props, IconToysFilled, IconToysOutlined, IconToysRounded, IconToysSharp, IconToysTwoTone)
