import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import { projectId, dataset, apiVersion } from '@/sanity/env';
import schemas from '@/sanity/shemas';

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema: { types: schemas },
  title: 'Playhouse Media Group',
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});
