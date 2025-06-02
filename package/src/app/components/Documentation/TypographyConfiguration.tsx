export const TypographyConfiguration = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mt-8 text-black">Typography</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border/60">
        <p className="text-base font-medium text-muted/60">
          1. Change Font family over here :{" "}
          <span className="font-semibold text-base">src/app/layout.tsx</span>{" "}
        </p>
        <div className="py-4 px-3 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2 mb-3">
            {`import { Montserrat } from "next/font/google";`}
          </p>
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            {`const montserrat = Montserrat({ subsets: ["latin"] });`}
          </p>
        </div>
      </div>
    </>
  );
};
