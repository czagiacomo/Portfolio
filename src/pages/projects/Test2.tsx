function Test2() {
    return (
      <>
        <section className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]">
          <h2 className="text-4xl font-extrabold capitalize">Titulo</h2>
          <div className="flex items-center gap-2 py-[2rem]">
            <img
              className="w-[3rem] h-[3rem] object-cover rounded-full cursor-pointer"
              src="https://i.imgur.com/ngAGW2E.png"
              alt="user-img"
            />
            <div>
              <div className="capitalize">
                <span>Catharina.</span>
              </div>
              <p className="text-sm text-gray-500">
                10 min read .<span className="ml-1">Criado dia 2</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-t border-gray-200 py-[0.5rem]">
            <div className="flex items-center gap-5"></div>
            <div className="flex items-center pt-2 gap-5">
              <p className="font1">
                In communications and information processing, code is a system of
                rules to convert information...
              </p>
              {/*<SharePost />
                  currentUser && currentUser?.uid === post?.userId && (
                    <Actions postId={postId} title={title} desc={desc} />
                  )*/}
            </div>
          </div>
          <div className="mt-[3rem]">
            <img
              className="w-full h-[400px] object-cover"
              src="https://i.imgur.com/ngAGW2E.png"
              alt="post-img"
            />
          </div>
        </section>
      </>
    );
  }
  
  export default Test2;
  