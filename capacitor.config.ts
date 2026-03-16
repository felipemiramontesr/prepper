import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tech.mapard.prepper',
  appName: 'MAPARD PREPPER',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
