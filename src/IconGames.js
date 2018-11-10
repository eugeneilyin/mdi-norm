import { createThemedIcon } from './utils/createThemedIcon'
import { IconGamesFilled } from './IconGamesFilled'
import { IconGamesOutlined } from './IconGamesOutlined'
import { IconGamesRounded } from './IconGamesRounded'
import { IconGamesSharp } from './IconGamesSharp'
import { IconGamesTwoTone } from './IconGamesTwoTone'

export const IconGames = /*#__PURE__*/ props =>
  createThemedIcon(props, IconGamesFilled, IconGamesOutlined, IconGamesRounded, IconGamesSharp, IconGamesTwoTone)
