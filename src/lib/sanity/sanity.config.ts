import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import { visionTool } from '@sanity/vision';
import schemas from './shemas';

const config = defineConfig({
  projectId: 'bcw45zol',
  dataset: 'production',
  title: 'Playhouse Media Group',
  apiVersion: '2023-06-01',
  basePath: '/admin',
  useCdn: false,
  plugins: [deskTool()],
  // plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});

export default config;
