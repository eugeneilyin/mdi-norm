import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCloudDownload } from './FilledCloudDownload';
import { OutlineCloudDownload } from './OutlineCloudDownload';
import { RoundCloudDownload } from './RoundCloudDownload';
import { SharpCloudDownload } from './SharpCloudDownload';
import { TwoToneCloudDownload } from './TwoToneCloudDownload';
export var CloudDownload =
/*#__PURE__*/
function CloudDownload(props) {
  return createThemedIcon(props, FilledCloudDownload, OutlineCloudDownload, RoundCloudDownload, SharpCloudDownload, TwoToneCloudDownload);
};