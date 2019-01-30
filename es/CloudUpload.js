import { createThemedIcon } from './utils/createThemedIcon';
import { FilledCloudUpload } from './FilledCloudUpload';
import { OutlineCloudUpload } from './OutlineCloudUpload';
import { RoundCloudUpload } from './RoundCloudUpload';
import { SharpCloudUpload } from './SharpCloudUpload';
import { TwoToneCloudUpload } from './TwoToneCloudUpload';
export var CloudUpload =
/*#__PURE__*/
function CloudUpload(props) {
  return createThemedIcon(props, FilledCloudUpload, OutlineCloudUpload, RoundCloudUpload, SharpCloudUpload, TwoToneCloudUpload);
};