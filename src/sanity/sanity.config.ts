import schemas from '@/sanity/shemas';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
  projectId: 'bcw45zol',
  dataset: 'production',
  title: 'Playhouse Media Group',
  apiVersion: '2023-06-01',
  basePath: '/admin',
  useCdn: true,
  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
