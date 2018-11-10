import { createThemedIcon } from './utils/createThemedIcon';
import { IconFaceFilled } from './IconFaceFilled';
import { IconFaceOutlined } from './IconFaceOutlined';
import { IconFaceRounded } from './IconFaceRounded';
import { IconFaceSharp } from './IconFaceSharp';
import { IconFaceTwoTone } from './IconFaceTwoTone';
export var IconFace =
/*#__PURE__*/
function IconFace(props) {
  return createThemedIcon(props, IconFaceFilled, IconFaceOutlined, IconFaceRounded, IconFaceSharp, IconFaceTwoTone);
};