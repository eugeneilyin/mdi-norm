import { createThemedIcon } from './utils/createThemedIcon'
import { FilledGames } from './FilledGames'
import { OutlineGames } from './OutlineGames'
import { RoundGames } from './RoundGames'
import { SharpGames } from './SharpGames'
import { TwoToneGames } from './TwoToneGames'

export const Games = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledGames, OutlineGames, RoundGames, SharpGames, TwoToneGames)
