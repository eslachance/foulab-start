/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LocationImport } from './routes/location'
import { Route as ContactImport } from './routes/contact'
import { Route as CalendarImport } from './routes/calendar'
import { Route as AboutImport } from './routes/about'
import { Route as AuthedImport } from './routes/_authed'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsIndexImport } from './routes/projects/index'
import { Route as NewsIndexImport } from './routes/news/index'
import { Route as ExpositionIndexImport } from './routes/exposition/index'
import { Route as NewsSlugImport } from './routes/news/$slug'
import { Route as AuthedPostsImport } from './routes/_authed/posts'
import { Route as AuthedPostsIndexImport } from './routes/_authed/posts.index'
import { Route as AuthedProfileSplatImport } from './routes/_authed/profile.$'
import { Route as AuthedPostsPostIdImport } from './routes/_authed/posts.$postId'

// Create/Update Routes

const LocationRoute = LocationImport.update({
  id: '/location',
  path: '/location',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const CalendarRoute = CalendarImport.update({
  id: '/calendar',
  path: '/calendar',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexRoute = ProjectsIndexImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any)

const NewsIndexRoute = NewsIndexImport.update({
  id: '/news/',
  path: '/news/',
  getParentRoute: () => rootRoute,
} as any)

const ExpositionIndexRoute = ExpositionIndexImport.update({
  id: '/exposition/',
  path: '/exposition/',
  getParentRoute: () => rootRoute,
} as any)

const NewsSlugRoute = NewsSlugImport.update({
  id: '/news/$slug',
  path: '/news/$slug',
  getParentRoute: () => rootRoute,
} as any)

const AuthedPostsRoute = AuthedPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedPostsIndexRoute = AuthedPostsIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthedPostsRoute,
} as any)

const AuthedProfileSplatRoute = AuthedProfileSplatImport.update({
  id: '/profile/$',
  path: '/profile/$',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedPostsPostIdRoute = AuthedPostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => AuthedPostsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/calendar': {
      id: '/calendar'
      path: '/calendar'
      fullPath: '/calendar'
      preLoaderRoute: typeof CalendarImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/location': {
      id: '/location'
      path: '/location'
      fullPath: '/location'
      preLoaderRoute: typeof LocationImport
      parentRoute: typeof rootRoute
    }
    '/_authed/posts': {
      id: '/_authed/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof AuthedPostsImport
      parentRoute: typeof AuthedImport
    }
    '/news/$slug': {
      id: '/news/$slug'
      path: '/news/$slug'
      fullPath: '/news/$slug'
      preLoaderRoute: typeof NewsSlugImport
      parentRoute: typeof rootRoute
    }
    '/exposition/': {
      id: '/exposition/'
      path: '/exposition'
      fullPath: '/exposition'
      preLoaderRoute: typeof ExpositionIndexImport
      parentRoute: typeof rootRoute
    }
    '/news/': {
      id: '/news/'
      path: '/news'
      fullPath: '/news'
      preLoaderRoute: typeof NewsIndexImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof rootRoute
    }
    '/_authed/posts/$postId': {
      id: '/_authed/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof AuthedPostsPostIdImport
      parentRoute: typeof AuthedPostsImport
    }
    '/_authed/profile/$': {
      id: '/_authed/profile/$'
      path: '/profile/$'
      fullPath: '/profile/$'
      preLoaderRoute: typeof AuthedProfileSplatImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/posts/': {
      id: '/_authed/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof AuthedPostsIndexImport
      parentRoute: typeof AuthedPostsImport
    }
  }
}

// Create and export the route tree

interface AuthedPostsRouteChildren {
  AuthedPostsPostIdRoute: typeof AuthedPostsPostIdRoute
  AuthedPostsIndexRoute: typeof AuthedPostsIndexRoute
}

const AuthedPostsRouteChildren: AuthedPostsRouteChildren = {
  AuthedPostsPostIdRoute: AuthedPostsPostIdRoute,
  AuthedPostsIndexRoute: AuthedPostsIndexRoute,
}

const AuthedPostsRouteWithChildren = AuthedPostsRoute._addFileChildren(
  AuthedPostsRouteChildren,
)

interface AuthedRouteChildren {
  AuthedPostsRoute: typeof AuthedPostsRouteWithChildren
  AuthedProfileSplatRoute: typeof AuthedProfileSplatRoute
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedPostsRoute: AuthedPostsRouteWithChildren,
  AuthedProfileSplatRoute: AuthedProfileSplatRoute,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/about': typeof AboutRoute
  '/calendar': typeof CalendarRoute
  '/contact': typeof ContactRoute
  '/location': typeof LocationRoute
  '/posts': typeof AuthedPostsRouteWithChildren
  '/news/$slug': typeof NewsSlugRoute
  '/exposition': typeof ExpositionIndexRoute
  '/news': typeof NewsIndexRoute
  '/projects': typeof ProjectsIndexRoute
  '/posts/$postId': typeof AuthedPostsPostIdRoute
  '/profile/$': typeof AuthedProfileSplatRoute
  '/posts/': typeof AuthedPostsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AuthedRouteWithChildren
  '/about': typeof AboutRoute
  '/calendar': typeof CalendarRoute
  '/contact': typeof ContactRoute
  '/location': typeof LocationRoute
  '/news/$slug': typeof NewsSlugRoute
  '/exposition': typeof ExpositionIndexRoute
  '/news': typeof NewsIndexRoute
  '/projects': typeof ProjectsIndexRoute
  '/posts/$postId': typeof AuthedPostsPostIdRoute
  '/profile/$': typeof AuthedProfileSplatRoute
  '/posts': typeof AuthedPostsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/about': typeof AboutRoute
  '/calendar': typeof CalendarRoute
  '/contact': typeof ContactRoute
  '/location': typeof LocationRoute
  '/_authed/posts': typeof AuthedPostsRouteWithChildren
  '/news/$slug': typeof NewsSlugRoute
  '/exposition/': typeof ExpositionIndexRoute
  '/news/': typeof NewsIndexRoute
  '/projects/': typeof ProjectsIndexRoute
  '/_authed/posts/$postId': typeof AuthedPostsPostIdRoute
  '/_authed/profile/$': typeof AuthedProfileSplatRoute
  '/_authed/posts/': typeof AuthedPostsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/about'
    | '/calendar'
    | '/contact'
    | '/location'
    | '/posts'
    | '/news/$slug'
    | '/exposition'
    | '/news'
    | '/projects'
    | '/posts/$postId'
    | '/profile/$'
    | '/posts/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/about'
    | '/calendar'
    | '/contact'
    | '/location'
    | '/news/$slug'
    | '/exposition'
    | '/news'
    | '/projects'
    | '/posts/$postId'
    | '/profile/$'
    | '/posts'
  id:
    | '__root__'
    | '/'
    | '/_authed'
    | '/about'
    | '/calendar'
    | '/contact'
    | '/location'
    | '/_authed/posts'
    | '/news/$slug'
    | '/exposition/'
    | '/news/'
    | '/projects/'
    | '/_authed/posts/$postId'
    | '/_authed/profile/$'
    | '/_authed/posts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthedRoute: typeof AuthedRouteWithChildren
  AboutRoute: typeof AboutRoute
  CalendarRoute: typeof CalendarRoute
  ContactRoute: typeof ContactRoute
  LocationRoute: typeof LocationRoute
  NewsSlugRoute: typeof NewsSlugRoute
  ExpositionIndexRoute: typeof ExpositionIndexRoute
  NewsIndexRoute: typeof NewsIndexRoute
  ProjectsIndexRoute: typeof ProjectsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthedRoute: AuthedRouteWithChildren,
  AboutRoute: AboutRoute,
  CalendarRoute: CalendarRoute,
  ContactRoute: ContactRoute,
  LocationRoute: LocationRoute,
  NewsSlugRoute: NewsSlugRoute,
  ExpositionIndexRoute: ExpositionIndexRoute,
  NewsIndexRoute: NewsIndexRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authed",
        "/about",
        "/calendar",
        "/contact",
        "/location",
        "/news/$slug",
        "/exposition/",
        "/news/",
        "/projects/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/posts",
        "/_authed/profile/$"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/calendar": {
      "filePath": "calendar.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/location": {
      "filePath": "location.tsx"
    },
    "/_authed/posts": {
      "filePath": "_authed/posts.tsx",
      "parent": "/_authed",
      "children": [
        "/_authed/posts/$postId",
        "/_authed/posts/"
      ]
    },
    "/news/$slug": {
      "filePath": "news/$slug.tsx"
    },
    "/exposition/": {
      "filePath": "exposition/index.tsx"
    },
    "/news/": {
      "filePath": "news/index.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    },
    "/_authed/posts/$postId": {
      "filePath": "_authed/posts.$postId.tsx",
      "parent": "/_authed/posts"
    },
    "/_authed/profile/$": {
      "filePath": "_authed/profile.$.tsx",
      "parent": "/_authed"
    },
    "/_authed/posts/": {
      "filePath": "_authed/posts.index.tsx",
      "parent": "/_authed/posts"
    }
  }
}
ROUTE_MANIFEST_END */
