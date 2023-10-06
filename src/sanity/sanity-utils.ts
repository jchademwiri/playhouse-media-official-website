// import { createClient, groq } from 'next-sanity';
// // import clientConfig from '../lib/old-sanity/old-config/client-sanity';

// import { client } from '@sanity/lib/client';

// // export async function getProjects(): Promise<Project[]> {
// export const getProjects = async (): Promise<Project[]> => {
//   return createClient(client).fetch(
//     groq`*[_type == 'project']{
//         'id':_id,
//         'createdAt':_createdAt,
//         name,
//         'slug': slug.current,
//         'image':image.asset->url,
//         url,

//     }`
//   );
// };

// export const getProject = async (slug: string): Promise<Project> => {
//   return createClient(client).fetch(
//     groq`*[_type == 'project' && slug.current == $slug][0]{
//         'id':_id,
//         'createdAt':_createdAt,
//         name,
//         'slug': slug.current,
//         'image':image.asset->url,
//         url,
//         content,
//     }`,
//     { slug }
//   );
// };

// export const getPosts = async (): Promise<Post[]> => {
//   return createClient(client).fetch(
//     groq`*[_type == 'post']{
//         'id':_id,
//         'createdAt':_createdAt,
//         publishedAt,
//         title,
//         'slug': slug.current,
//         'mainImage':mainImage.asset->url,
//         author -> {
//           name,
//           image,
//         },
//     }`
//   );
// };

// export const getPost = async (slug: string): Promise<Post> => {
//   return createClient(client).fetch(
//     groq`*[_type == 'post' && slug.current == $slug][0]{
//         'id':_id,
//         'createdAt':_createdAt,
//         publishedAt,
//         title,
//         'slug': slug.current,
//         'mainImage':mainImage.asset->url,
//         content,
//         author -> {
//           name,
//           image,
//         },
//     }`,
//     { slug }
//   );
// };
