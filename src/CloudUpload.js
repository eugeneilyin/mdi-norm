import { createThemedIcon } from './utils/createThemedIcon'
import { FilledCloudUpload } from './FilledCloudUpload'
import { OutlineCloudUpload } from './OutlineCloudUpload'
import { RoundCloudUpload } from './RoundCloudUpload'
import { SharpCloudUpload } from './SharpCloudUpload'
import { TwoToneCloudUpload } from './TwoToneCloudUpload'

export const CloudUpload = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledCloudUpload, OutlineCloudUpload, RoundCloudUpload, SharpCloudUpload, TwoToneCloudUpload)
