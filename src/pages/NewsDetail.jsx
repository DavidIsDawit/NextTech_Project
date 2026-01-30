import { useParams } from "react-router-dom";
import BlogSearch from "../ui/News Page/NewsSearch";
import BlogCategories from "../ui/News Page/NewsCategories";
import RecentPosts from "../ui/News Page/RecentPosts";
import BlogTags from "../ui/News Page/NewsTags";
import BlogContent from "../ui/News Page/NewsContent";
import NotFoundMessage from "../ui/NotFoundMessage";
import useBlog from "../hooks/useNewsPage";

function BlogDetail() {
  const { id } = useParams();
  const { posts, categories, tags, recentPosts, searchQuery, setSearchQuery } = useBlog();

  // const post = posts.find((p) => p.id === parseInt(id));
   const post= posts.find(p => p.id === Number(id));

  if (!post) {
    return <NotFoundMessage itemType="News" backPath="/news" />;
  }

  return (
    <div className="flex flex-col pt-10 mb-6 lg:mb-16">
      <main className="px-4 py-12 sm:px-6 lg:px-8 lg:mx-16 xl:mx-20 2xl:mx-32">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-6 xl:gap-8 2xl:gap-10">
          {/* Main Content */}
          <div className="w-full lg:w-[70%]">
            <BlogContent post={post} />
          </div>

          {/* Sidebar */}
          <aside className="w-full space-y-12 lg:w-[30%]">
            <BlogSearch value={searchQuery} onChange={setSearchQuery} />
            <BlogCategories categories={categories} />
            <RecentPosts posts={recentPosts} />
            <BlogTags tags={tags} />
          </aside>
        </div >
      </main >
    </div >
  );
}

export default BlogDetail;
