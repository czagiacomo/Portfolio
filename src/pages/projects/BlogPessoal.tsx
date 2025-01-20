import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function BlogPessoal() {
  return (
    <>
      <div className="bg-base-200">
        <hr className="max-w-6xl mx-auto" />
        <div className="mt-[3rem]">
          <img
            className="w-full h-[400px] object-cover max-w-6xl mx-auto shadow-xl"
            src="https://i.imgur.com/3TxdOXM.png"
            alt="post-img"
          />
          {/*
        className="w-full max-w-6xl mx-auto"
        className="w-full h-[400px] object-cover"
        */}
        </div>

        <div className="max-w-4xl mx-auto my-6 px-6">
          <h1 className="text-4xl font-bold mb-4">Blog Pessoal</h1>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <div>
              <b>Autora - Catharina Zagiacomo (Dev BackEnd)</b>
            </div>
            <div>19/01/2025</div>
          </div>

          <div className="flex space-x-3 mb-6 mt-6">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={32} color="#0e76a8 " weight="fill" />
            </a>

            <a href="https://github.com/czagiacomo" target="_blank">
              <GithubLogo size={30} weight="fill" />
            </a>
          </div>

          <article>
            <p className="text-lg leading-7 mb-4">
              In communications and information processing, code is a system of
              rules to convert information—such as a letter, word, sound, image,
              or gesture—into another form.
            </p>
            <p className="text-lg leading-7">
              The process of encoding converts information from a source into
              symbols for communication or storage.
            </p>
          </article>
        </div>
        <hr className="max-w-6xl mx-auto my-6" />
      </div>
    </>
  );
}

export default BlogPessoal;
