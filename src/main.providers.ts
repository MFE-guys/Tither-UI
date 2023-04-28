/**
 * Common providers shared with client and server-side.
 */

import { provideAnimations } from '@angular/platform-browser/animations';

import { PrimeNGConfig } from 'primeng/api';

export const mainProviders = [PrimeNGConfig, provideAnimations];
