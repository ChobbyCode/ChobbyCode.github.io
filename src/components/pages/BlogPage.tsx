import Markdown from 'markdown-to-jsx'

function BlogPage() {
  

  return (
    <div className="content">
      <Markdown>
          # Hello, World!
      </Markdown>
    </div>
  );
}

export default BlogPage;
