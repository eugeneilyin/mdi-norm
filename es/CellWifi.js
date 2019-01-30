import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCellWifi } from './FilledCellWifi';
import { OutlineCellWifi } from './OutlineCellWifi';
import { RoundCellWifi } from './RoundCellWifi';
import { SharpCellWifi } from './SharpCellWifi';
import { TwoToneCellWifi } from './TwoToneCellWifi';
export var CellWifi =
/*#__PURE__*/
function CellWifi(props) {
  return createThemedIcon(props, FilledCellWifi, OutlineCellWifi, RoundCellWifi, SharpCellWifi, TwoToneCellWifi);
};