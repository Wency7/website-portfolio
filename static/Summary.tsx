
function Summary(){
    return (
      <div >
        <p className="text-lg font-bold ">About me</p>
        <article
          className="lg:text-xl text-md"
          itemScope
          itemType="https://schema.org/author"
        >
          <p className="mb-5">
            I&apos;m a Fresh Graduate with a bachelors degree in Information
            Technology🎓. I &apos;m passionate and enthusiastic about
            programming, eager to expand my knowledge in the IT field, and
            committed to giving my best to the company.{" "}
          </p>
        </article>
      </div>
    );
}

export default Summary;