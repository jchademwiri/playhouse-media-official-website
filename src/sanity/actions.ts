import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './uitils';
import { revalidatePath } from 'next/cache';

interface GetProjectParams {
  query: string;
  category: string;
  page: string;
}

export const getProjects = async (params: GetProjectParams) => {
  const { query, category, page } = params;

  try {
    const projects = await readClient.fetch(
      groq`${buildQuery({
        type: 'project',
        query,
        category,
        page: parseInt(page),
      })}{
        'id':_id,
           name,
           'image':image.asset->url,
           url,
           'createdAt':_createdAt,
           'slug': slug.current,
           categories,
            }`
    );

    return projects;
  } catch (error) {
    console.log(error);
  }
};

export const getProject = async (slug: string) => {
  try {
    const project = await readClient.fetch(
      groq`
          *[_type == "project" && slug.current == "${slug}"] {
            'id':_id,
            name,
            categories,
            'image':image.asset->url,
            url,
            'createdAt':_createdAt,
            'slug': slug.current,
            content,
          }
        `
    );

    return project[0];
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = async (params: GetProjectParams) => {
  const { query, category, page } = params;

  try {
    const posts = await readClient.fetch(
      groq`${buildQuery({
        type: 'post',
        query,
        category,
        page: parseInt(page),
      })}{
          'id':_id,
             title,
             publishedAt,
             'mainImage':mainImage.asset->url,
             excerpt,
             author -> {
                    name,
                    'image':image.asset->url,
                },
             'createdAt':_createdAt,
             'slug': slug.current,
        }`
    );

    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (slug: string) => {
  try {
    const post = await readClient.fetch(
      groq`
            *[_type == "post" && slug.current == "${slug}"] {
              'id':_id,
              title,
              categories,
              'mainImage':mainImage.asset->url,
              content,
              excerpt,
              'createdAt':_createdAt,
              publishedAt,
              author -> {
                name,
                'image':image.asset->url,
            },
              'slug': slug.current,
            }
          `
    );

    return post[0];
  } catch (error) {
    console.log(error);
  }
};
