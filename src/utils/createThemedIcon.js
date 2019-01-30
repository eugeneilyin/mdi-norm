export const createThemedIcon = /*#__PURE__*/
  ({ theme, ...rest }, filled, outline, round, sharp, twoTone) =>
    theme === 'outline' ? outline(rest) :
      theme === 'round' ? round(rest) :
        theme === 'sharp' ? sharp(rest) :
          theme === 'two-tone' ? twoTone(rest) :
            filled(rest)
