import Image from "next/image";
import Link from "next/link";

const Insta = () => {
  return (
    <section className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 -mb-24">
      <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Image Container 1 */}
        <div className="relative group mx-auto">
          <Image
            src="/images/insta/insta1.png"
            width={306}
            height={306}
            alt="instaOne"
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/60 rounded-2xl duration-500"></div>
          <Link href={"https://instagram.com"} target="_blank">
            <button
              className="hidden absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold group-hover:block"
            >
              <Image
                src="/images/insta/instagram.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        {/* Image Container 2 */}
        <div className="relative group mx-auto">
          <Image
            src="/images/insta/insta2.png"
            width={306}
            height={306}
            alt="instaTwo"
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/60 rounded-2xl duration-500"></div>
          <Link href={"https://instagram.com"} target="_blank">
            <button
              className="hidden absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold group-hover:block"
            >
              <Image
                src="/images/insta/instagram.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        {/* Image Container 3 */}
        <div className="relative group mx-auto">
          <Image
            src="/images/insta/insta3.png"
            width={306}
            height={306}
            alt="instaThree"
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/60 rounded-2xl duration-500"></div>
          <Link href={"https://instagram.com"} target="_blank">
            <button
              className="hidden absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold group-hover:block"
            >
              <Image
                src="/images/insta/instagram.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>

        {/* Image Container 4 */}
        <div className="relative group mx-auto">
          <Image
            src="/images/insta/insta4.png"
            width={306}
            height={306}
            alt="instaFour"
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/60 rounded-2xl duration-500"></div>
          <Link href={"https://instagram.com"} target="_blank">
            <button
              className="hidden absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold group-hover:block"
            >
              <Image
                src="/images/insta/instagram.svg"
                alt="instagram"
                width={36}
                height={36}
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insta;
