import Image from "next/image"

const CommunitySection = () => {
  return (
    <section id="community" className="bg-heroColor py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-heading text-3xl font-semibold text-warmWhite sm:text-4xl md:text-5xl">
            Proud Members of the <span className="text-kaidevTeal">Laravel Community</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base text-warmWhite/80 sm:text-lg">
            We actively participate in and support local tech communities that share our values of
            craftsmanship and continuous improvement.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-kaidevTeal"></div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-8 text-center">
            <Image
              src="/images/laravel-catalunya.svg"
              alt="Laravel Catalunya"
              width={280}
              height={88}
              className="h-auto w-full max-w-[280px]"
            />
            <span className="font-heading text-xl font-medium text-warmWhite">Laravel Catalunya</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
