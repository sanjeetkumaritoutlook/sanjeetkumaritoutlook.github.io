import { createRouter } from 'stencil-router-v2';

export { Components, JSX } from './components';

export const Router = createRouter();
import { defineCustomElements } from 'stenciljs-components/loader';
async function initializeStencilComponents() {
  console.log('Initializing StencilJS components...');
  await defineCustomElements(window, {
    resourcesUrl: './build/', // Adjust based on your deployment structure
  }); // Pass the global `window` object
  console.log('StencilJS components initialized.');
}
initializeStencilComponents();

import { fluidEnvironments } from '../fluid';
const script = document.createElement('script');
/**
 * Set this to dev, test, prod or local to switch environments
 * for the sandbox
 */
export const fluid = fluidEnvironments.external;

if ('noModule' in script) {
  script.type = 'module';
  script.src = fluid.esm;
} else {
//   script.type = 'text/javascript';
//   script.src = fluid.legacy;
}
document.head.appendChild(script);
