import { RequestMethod } from "@nestjs/common";
import { RouteInfo } from "@nestjs/common/interfaces";

export const authenticatedRoutes: RouteInfo[] = [
  { path: "/users/authenticatedUser", method: RequestMethod.GET },
  { path: "/users/:userId", method: RequestMethod.DELETE },
  { path: "/users/:userId", method: RequestMethod.PUT },
  { path: "/users", method: RequestMethod.POST },
  { path: "/stories/:storyId", method: RequestMethod.DELETE },
  { path: "/stories/:storyId", method: RequestMethod.PUT },
  { path: "/stories", method: RequestMethod.POST },
  { path: "/stories/chapter/:chapterId", method: RequestMethod.DELETE },
  { path: "/stories/chapter/:chapterId", method: RequestMethod.PUT },
  { path: "/stories/chapter", method: RequestMethod.POST },
  { path: "/stories/:storyId/react", method: RequestMethod.PUT },
];
