export const privateRoutePath = {
  base: '/',
  home: '/home',
  child1: `/home/:child1`,
  test: '/test',
  testP: '/test/:param/:param2/:param3',
  playground: '/playground',
  master: '/master',
  worklog: '/master/worklog',
  designation: '/master/designation',
} as const
