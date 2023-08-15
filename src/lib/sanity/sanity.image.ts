import createImageUrlBuilder from '@sanity/image-url';

const dataset = 'production';
const projectId = 'bcw45zol';

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max');
