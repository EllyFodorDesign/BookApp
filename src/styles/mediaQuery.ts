export const DeviceMinWidths = {
  phone: 480,
  tablet: 768,
  desktop: 1200,
} as const;

export const DeviceMaxWidths = {
  phone: 330,
  desktop: 1800,
} as const;

const MediaQuery = {
  /** NOTE: preferrably make phone styling the default and then override it with tablet or desktop media queries */
  xs_phone: `@media only screen and (max-width: ${DeviceMaxWidths.phone}px)`,
  phone: `@media only screen and (max-width: ${DeviceMinWidths.phone}px)`,
  tablet: `@media only screen and (min-width: ${DeviceMinWidths.tablet}px)`,
  phone_max: `@media only screen and (max-width: ${DeviceMinWidths.tablet}px)`,
  table_max: `@media only screen and (max-width: ${DeviceMinWidths.desktop}px)`,
  desktop: `@media only screen and (min-width: ${DeviceMinWidths.desktop}px)`,
  desktop_max: `@media only screen and (max-width: ${DeviceMaxWidths.desktop}px)`,
} as const;

export default MediaQuery;