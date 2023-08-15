import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './shemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

const config = defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  apiVersion,
  title: 'Playhouse Media Group',
  plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});

export default config;
