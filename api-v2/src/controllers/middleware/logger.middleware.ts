/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import type { NestMiddleware } from "@nestjs/common";
import { HttpStatus, Injectable } from "@nestjs/common";
import type { NextFunction, Request, Response } from "express";

import { WithStash } from "$controllers/types/request.dto";
import {
  AnsiBackground,
  AnsiForeground,
  getConsoleColor,
  RESET_COLOR,
} from "$util/logging/deepLog";

const getMethodColor = (method: string): AnsiBackground | null => {
  switch (method) {
    case "GET":
      return AnsiBackground.BLUE;
    case "POST":
      return AnsiBackground.GREEN;
    case "PUT":
      return AnsiBackground.YELLOW;
    case "DELETE":
      return AnsiBackground.RED;
    default:
      return null;
  }
};

const getStatusColor = (code: number): AnsiForeground => {
  switch (true) {
    case code >= HttpStatus.OK && code < HttpStatus.AMBIGUOUS:
      return AnsiForeground.GREEN;
    case code >= HttpStatus.AMBIGUOUS && code < HttpStatus.BAD_REQUEST:
      return AnsiForeground.WHITE;
    case code >= HttpStatus.BAD_REQUEST &&
      code < HttpStatus.INTERNAL_SERVER_ERROR:
      return AnsiForeground.YELLOW;
    default:
      return AnsiForeground.RED;
  }
};

const log = console.log;
const info = console.info;
const warn = console.warn;
const error = console.error;

/**
 * TODO: Latency
 */
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: WithStash<Request>, res: Response, next: NextFunction): void {
    /** Get the firebase email */
    const authUser = req.stash.auth;
    const phoneNumber = authUser ? authUser.phoneNumber : "unauthenticated";
    /** Get the method */
    const method = req.method;
    const methodBackground = getMethodColor(method);
    const methodColorString = getConsoleColor(null, methodBackground);
    const methodString = `${methodColorString} ${method} ${RESET_COLOR}`;
    /** Get the path */
    let path: string = req.url;
    // Un-map the processed URL to create a stable URL key.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (req.params) {
      Object.entries(req.params).forEach(([key, param]) => {
        if (!param) return;
        path = path.replace(param, `<${key}>`);
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (req.query) {
      Object.values(req.query).forEach((value) => {
        path = path.replace(value as string, "");
      });
    }
    const prefix = `[${phoneNumber}] ${methodString} '${path}' ->`;

    const startTime = performance.now();

    console.log = log.bind(null, prefix);
    console.info = info.bind(null, prefix);
    console.warn = warn.bind(null, prefix);
    console.error = error.bind(null, prefix);

    res.on("finish", () => {
      const endTime = performance.now();
      const durationMsec = endTime - startTime;
      const durationSec = Math.round(durationMsec) / 1000;

      const statusCode = res.statusCode;
      const statusForeground = getStatusColor(statusCode || 0);
      const statusColorString = getConsoleColor(statusForeground, null);
      const statusString = `${statusColorString} ${statusCode || "vk"} ${RESET_COLOR}`;

      console.info("HTTP", statusString, "|", `${durationSec}s`);
    });
    next();
  }
}
