import Link from "next/link";
import { BreadcrumbProps } from "../../types/breadcrumb"; // Adjust the import path based on your project structure

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  pageName,
  pageDescription,
}) => {
  return (
    <div className="dark:bg-darkmode relative z-10 overflow-hidden pb-[60px] pt-[120px] md:pt-[130px] lg:pt-[160px]">
      <div className="from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="text-black mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] dark:text-white">
                {pageName}
              </h1>
              <p className="text-black dark:text-black-6 mb-5 text-base">
                {pageDescription}
              </p>

              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <Link
                    href="/"
                    className="text-black flex items-center gap-[10px] text-base font-medium dark:text-white dark:text-opacity-50"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <p className="text-body-color flex items-center gap-[10px] text-base font-medium">
                    <span className="text-body-color dark:text-white dark:text-opacity-50"> / </span>
                    {pageName}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
