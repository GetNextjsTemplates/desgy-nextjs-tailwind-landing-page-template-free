export const LogoConfiguration = () => {
  return (
    <>
      <h3 className=" text-xl font-semibold mt-8 text-black">Logo</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        <p className="text-base font-medium text-muted text-opacity-60 flex lg:flex-row flex-col">
          1. Change Logo over here :{" "}
          <span className="font-semibold text-base overflow-x-auto">
            {" "}
            src/components/Layout/Header/Logo/index.tsx
          </span>{" "}
        </p>
        <div className="py-4 px-3 rounded-md bg-dark_grey mt-8">
          <div className="text-sm text-gray-400">
            <p>&#x3C;Link href=&#x22;/&#x22;&#x3E;</p>
            <p>&#x3C;Image</p>
            <p>src=&#x22;/images/logo/logo.svg&#x22;</p>
            <p>alt=&#x22;logo&#x22;</p>
            <p>width={160}</p>
            <p>height={50}</p>
            <p>quality={100}</p>
            <p>
              style=&#x7B;width: &#x22;auto&#x22;, height:
              &#x22;auto&#x22;&#x7D;
            </p>
            <p>/&#x3E;</p>
          </div>
        </div>
      </div>
    </>
  );
};
