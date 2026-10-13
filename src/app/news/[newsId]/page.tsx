import Image from "next/image";

const NewsDetails = async ({
  params,
}: {
  params: { newsId: string };
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();
  const news = data.data;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-4xl px-4">

        {/* Category */}
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Latest News
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          {news.title}
        </h1>

        {/* Info */}
        <div className="mt-5 flex gap-3 border-b border-gray-200 pb-5 text-sm text-gray-500">
          <span>News Portal</span>
          <span>•</span>
          <span>Latest Update</span>
        </div>

        {/* Image */}
        <div className="relative mt-8 h-[250px] overflow-hidden rounded-2xl shadow-lg md:h-[450px]">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            priority 
          />
        </div>

        {/* Article */}
        <article className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <p className="text-lg leading-8 text-gray-700">
            {news.text}
          </p>
        </article>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-5 text-center">
          <p className="text-sm text-gray-500">
            Thanks for reading this news.
          </p>
        </div>

      </div>
    </div>
  );
};

export default NewsDetails;