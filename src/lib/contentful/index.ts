import { client } from './client';

export async function getPosts() {
  const post = await client.getEntries({
    content_type: 'post',
  });
  return post.items.map((item) => item.fields) as Post[];
}
export async function getPost(slug: string) {
  const post = await client.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });
  return post.items.map((item) => item.fields)[0] as Post;
}

export async function getProjects() {
  const project = await client.getEntries({
    content_type: 'project',
  });
  return project.items.map((item) => item.fields) as Project[];
}

export async function getProject(slug: string) {
  const project = await client.getEntries({
    content_type: 'project',
    'fields.slug': slug,
  });
  return project.items.map((item) => item.fields)[0] as Project;
}
