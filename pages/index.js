import matter from 'gray-matter';

export default function Home({ postData }) {
  const { data, content } = postData;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticProps() {
  // Import `fs` and `path` directly in this function.
  const fs = require('fs');
  const path = require('path');

  // Define file path and read file.
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the markdown content using gray-matter.
  const { data, content } = matter(fileContents);

  return {
    props: {
      postData: { data, content },
    },
  };
}
