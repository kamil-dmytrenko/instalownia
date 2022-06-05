export const size = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1025px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
         mobile: `max-width: ${size.mobile}`,
         tablet: `min-width: ${size.mobile}`,
         laptop: `min-width: ${size.tablet}`,
         laptopL: `min-width: ${size.laptop}`,
         desktop: `min-width: ${size.laptopL}`,
       };
