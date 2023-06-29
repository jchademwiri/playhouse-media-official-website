import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-sanity';

// export async function getProjects(): Promise<Project[]> {
export const getProjects = async (): Promise<Project[]> => {
  return createClient(clientConfig).fetch(groq`*[_type == 'project']{
        'id':_id,
        'createdAt':_createdAt,
        name,
        'slug': slug.current,
        'image':image.asset->url,
        url,
        content
    }`);
};

export const getProject = async (slug: string): Promise<Project> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]{
        'id':_id,
        'createdAt':_createdAt,
        name,
        'slug': slug.current,
        'image':image.asset->url,
        url,
        content
    }`,
    { slug }
  );
};
