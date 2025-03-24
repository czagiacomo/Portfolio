import { GithubLogo, Globe, LinkedinLogo } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { marked } from "marked";

const ArticlePage = ({ slug }: { slug: string }) => {
  const [article, setArticle] = useState<{
    title: string;
    date: string;
    readTime: number;
    author: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch("https://gql.hashnode.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query {
                publication(host: "${import.meta.env.VITE_HASHNODE_HOST}") {
                  post(slug: "${slug}") {
                    title
                    author { name }
                    publishedAt
                    readTimeInMinutes
                    content { markdown }
                  }
                }
              }
            `,
          }),
        });

        const data = await res.json();
        const post = data.data.publication.post;

        if (post) {
          const htmlContent = await marked(post.content.markdown); // Aguarda a conversão do Markdown para HTML
          setArticle({
            title: post.title,
            date: new Date(post.publishedAt).toLocaleDateString(),
            readTime: post.readTimeInMinutes,
            author: post.author.name,
            content: htmlContent,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar o artigo:", error);
      }
    };

    fetchArticle();
  }, [slug]);

  return article ? (
    <div className="bg-base-200">
      <hr className="max-w-6xl mx-auto" />
      <div className="mt-[3rem]">{/* IMAGEM */}</div>

      <div className="max-w-4xl mx-auto my-6 px-6">
        <h1 className="text-4xl font-bold mb-4 font-viga mt-10 text-primary">
          {article.title}
        </h1>
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <div>
            <b>
              Por <span>{article.author}</span> • {article.readTime} min
            </b>
          </div>
          <div>{article.date}</div>
        </div>

        <div className="flex space-x-3 mb-6 mt-6">
          <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
            <LinkedinLogo size={32} color="#0e76a8 " weight="fill" />
          </a>
          <a href="https://github.com/czagiacomo/Portfolio" target="_blank">
            <GithubLogo size={30} weight="fill" />
          </a>
          <a href="https://www.czagiacomo.com" target="_blank">
            <Globe size={30} weight="regular" color="#0d78d2" />
          </a>
        </div>

        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  ) : null;
};

export default ArticlePage;
