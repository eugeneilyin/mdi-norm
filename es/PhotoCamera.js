import { createThemedIcon } from './utils/createThemedIcon';
import { FilledPhotoCamera } from './FilledPhotoCamera';
import { OutlinePhotoCamera } from './OutlinePhotoCamera';
import { RoundPhotoCamera } from './RoundPhotoCamera';
import { SharpPhotoCamera } from './SharpPhotoCamera';
import { TwoTonePhotoCamera } from './TwoTonePhotoCamera';
export var PhotoCamera =
/*#__PURE__*/
function PhotoCamera(props) {
  return createThemedIcon(props, FilledPhotoCamera, OutlinePhotoCamera, RoundPhotoCamera, SharpPhotoCamera, TwoTonePhotoCamera);
};