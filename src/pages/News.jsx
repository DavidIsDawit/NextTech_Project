import BlogList from "../ui/News Page/NewsList";
import useBlog from "../hooks/useNewsPage";

function Blogs() {
  const { posts } = useBlog();

  return (
    <div className="flex flex-col">
      <main className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <BlogList posts={posts} />
      </main>
    </div>
  );
}

export default Blogs;
