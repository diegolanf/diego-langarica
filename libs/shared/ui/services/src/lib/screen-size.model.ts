import { Breakpoints } from '@angular/cdk/layout';
import { isString } from '@diego-langarica/shared/utility/functions';

export enum ScreenSize {
  XSmall = 1,
  Small = 2,
  Medium = 3,
  Large = 4,
  XLarge = 5,
}

export const ScreenSizes = Object.values(ScreenSize).filter(
  (screenSize: string | ScreenSize) => !isString(screenSize),
) as ScreenSize[];

export const ScreenSizeBreakpointMap: Record<ScreenSize, string> = {
  1: Breakpoints.XSmall,
  2: Breakpoints.Small,
  3: Breakpoints.Medium,
  4: Breakpoints.Large,
  5: Breakpoints.XLarge,
};
