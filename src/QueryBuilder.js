import { createThemedIcon } from './utils/createThemedIcon'
import { FilledQueryBuilder } from './FilledQueryBuilder'
import { OutlineQueryBuilder } from './OutlineQueryBuilder'
import { RoundQueryBuilder } from './RoundQueryBuilder'
import { SharpQueryBuilder } from './SharpQueryBuilder'
import { TwoToneQueryBuilder } from './TwoToneQueryBuilder'

export const QueryBuilder = /*#__PURE__*/ props =>
  createThemedIcon(props, FilledQueryBuilder, OutlineQueryBuilder, RoundQueryBuilder, SharpQueryBuilder, TwoToneQueryBuilder)
