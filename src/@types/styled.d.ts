import "styled-components";
import { defautlTheme } from "@/styles/themes/default";

type ThemeType = typeof defautlTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
