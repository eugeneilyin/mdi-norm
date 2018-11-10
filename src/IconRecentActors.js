import { createThemedIcon } from './utils/createThemedIcon'
import { IconRecentActorsFilled } from './IconRecentActorsFilled'
import { IconRecentActorsOutlined } from './IconRecentActorsOutlined'
import { IconRecentActorsRounded } from './IconRecentActorsRounded'
import { IconRecentActorsSharp } from './IconRecentActorsSharp'
import { IconRecentActorsTwoTone } from './IconRecentActorsTwoTone'

export const IconRecentActors = /*#__PURE__*/ props =>
  createThemedIcon(props, IconRecentActorsFilled, IconRecentActorsOutlined, IconRecentActorsRounded, IconRecentActorsSharp, IconRecentActorsTwoTone)
