import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  // namespace: 'myapp',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
    baseUrl: 'https://myapp.local/',
    // baseUrl:'/build/',  like in fluid it opens to localhost:3333/fluid/
    },
    // {
    //   type: 'dist', // For reusable components
    //   esmLoaderPath: '../loader',
    // },
  ],
};
