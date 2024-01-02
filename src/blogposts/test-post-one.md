---
title: 'Test Post One'
excerpt: 'Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.'
date: '2023-12-30'
---

```js
const name = jacob;
```

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

```tsx
// tsx section sample
<section className='grid gap-4'>
  <section className='w-full grid sm:grid-cols-2 lg:grid-cols-3  gap-4'>
    {posts.map((post: BlogPost) => (
      <PostCard key={post.id} {...post} />
    ))}
  </section>
</section>
```

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

```html
<!-- html layout  -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home Page</title>
  </head>
  <body>
    <h1>Test Page</h1>
    <section>
      <p>hi</p>
    </section>
  </body>
</html>
```

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

```ts
console.log('test');

// test
```
