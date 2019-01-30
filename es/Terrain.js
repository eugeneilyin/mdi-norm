import { createThemedIcon } from './utils/createThemedIcon';
import { FilledTerrain } from './FilledTerrain';
import { OutlineTerrain } from './OutlineTerrain';
import { RoundTerrain } from './RoundTerrain';
import { SharpTerrain } from './SharpTerrain';
import { TwoToneTerrain } from './TwoToneTerrain';
export var Terrain =
/*#__PURE__*/
function Terrain(props) {
  return createThemedIcon(props, FilledTerrain, OutlineTerrain, RoundTerrain, SharpTerrain, TwoToneTerrain);
};