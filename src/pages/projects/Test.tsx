function Test() {
  return (
    <>
      <hr className="max-w-6xl mx-auto" />
      <div className="my-6">
        <img
          src="https://i.imgur.com/ngAGW2E.png"
          alt="Post"
          className="w-full max-w-6xl mx-auto"
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto my-6 px-6">
        <h1 className="text-4xl font-bold mb-4">The heaven for bloggers</h1>
        <div className="flex justify-between text-gray-600 text-sm mb-4">
          <div>
            <b>Author - Byomkesh Mahato (Software Engineer)</b>
          </div>
          <div>04 January. 6 min read</div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="p-2 bg-gray-100 rounded-full">
            {/* Twitter Icon */}
            <svg
              width="29"
              height="29"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path>
            </svg>
          </button>
          <button className="p-2 bg-gray-100 rounded-full">
            {/* LinkedIn Icon */}
            <svg
              width="29"
              height="29"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M5 6.36C5 5.61 5.63 5 6.4 5h16.2c.77 0 1.4.61 1.4 1.36v16.28c0 .75-.63 1.36-1.4 1.36H6.4c-.77 0-1.4-.6-1.4-1.36V6.36z"></path>
            </svg>
          </button>
          <button className="p-2 bg-gray-100 rounded-full">
            {/* Facebook Icon */}
            <svg
              width="29"
              height="29"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path>
            </svg>
          </button>
        </div>

        <p className="text-lg leading-7 mb-4">
          In communications and information processing, code is a system of
          rules to convert information—such as a letter, word, sound, image, or
          gesture—into another form.
        </p>

        <p className="text-lg leading-7">
          The process of encoding converts information from a source into
          symbols for communication or storage.
        </p>
      </div>

      <hr className="max-w-6xl mx-auto my-6" />
    </>
  );
}

export default Test;
