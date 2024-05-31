/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { AxiosError } from "axios";
import { inspect } from "util";

export enum AnsiBackground {
  BLACK = 40,
  RED = 41,
  GREEN = 42,
  YELLOW = 43,
  BLUE = 44,
  MAGENTA = 45,
  CYAN = 46,
  WHITE = 47,
  BRIGHT_BLACK = 100,
  BRIGHT_RED = 101,
  BRIGHT_GREEN = 102,
  BRIGHT_YELLOW = 103,
  BRIGHT_BLUE = 104,
  BRIGHT_MAJENTA = 105,
  BRIGHT_CYAN = 106,
}
export enum AnsiForeground {
  BLACK = 30,
  RED = 31,
  GREEN = 32,
  YELLOW = 33,
  BLUE = 34,
  MAGENTA = 35,
  CYAN = 36,
  WHITE = 37,
  BRIGHT_BLACK = 90,
  BRIGHT_RED = 91,
  BRIGHT_GREEN = 92,
  BRIGHT_YELLOW = 93,
  BRIGHT_BLUE = 94,
  BRIGHT_MAJENTA = 95,
  BRIGHT_CYAN = 96,
}

export const deep = {
  error: (
    source: any,
    foreground?: AnsiForeground,
    background?: AnsiBackground
  ): void => {
    if (source?.isAxiosError) {
      const err = source as AxiosError;
      const jsonErr = err.toJSON();
      console.error(
        getConsoleColor(foreground || null, background || null),
        inspect(
          { axiosError: { ...jsonErr, resData: err.response?.data } },
          { colors: false, depth: null, showHidden: false }
        ),
        RESET_COLOR
      );
    } else {
      console.error(
        getConsoleColor(foreground || null, background || null),
        inspect(source, { colors: false, depth: null, showHidden: false }),
        RESET_COLOR
      );
    }
  },
  log: (
    source: any,
    foreground?: AnsiForeground,
    background?: AnsiBackground
  ): void => {
    console.log(
      getConsoleColor(foreground || null, background || null),
      inspect(source, { colors: false, depth: null, showHidden: false }),
      RESET_COLOR
    );
  },
  warn: (
    source: any,
    foreground?: AnsiForeground,
    background?: AnsiBackground
  ): void => {
    console.warn(
      getConsoleColor(foreground || null, background || null),
      inspect(source, { colors: false, depth: null, showHidden: false }),
      RESET_COLOR
    );
  },
};

export const getConsoleColor = (
  f: AnsiForeground | null,
  b: AnsiBackground | null
): string => {
  return `\u001b[${f || 0}${b ? ";" + b : ""}m`;
};

export const RESET_COLOR = "\u001b[0m";
