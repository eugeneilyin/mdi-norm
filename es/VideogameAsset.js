import { createThemedIcon } from './utils/createThemedIcon';
import { FilledVideogameAsset } from './FilledVideogameAsset';
import { OutlineVideogameAsset } from './OutlineVideogameAsset';
import { RoundVideogameAsset } from './RoundVideogameAsset';
import { SharpVideogameAsset } from './SharpVideogameAsset';
import { TwoToneVideogameAsset } from './TwoToneVideogameAsset';
export var VideogameAsset =
/*#__PURE__*/
function VideogameAsset(props) {
  return createThemedIcon(props, FilledVideogameAsset, OutlineVideogameAsset, RoundVideogameAsset, SharpVideogameAsset, TwoToneVideogameAsset);
};