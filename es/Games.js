import { createThemedIcon } from './utils/createThemedIcon';
import { FilledGames } from './FilledGames';
import { OutlineGames } from './OutlineGames';
import { RoundGames } from './RoundGames';
import { SharpGames } from './SharpGames';
import { TwoToneGames } from './TwoToneGames';
export var Games =
/*#__PURE__*/
function Games(props) {
  return createThemedIcon(props, FilledGames, OutlineGames, RoundGames, SharpGames, TwoToneGames);
};