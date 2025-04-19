import { ColorConfiguration } from "./ColorConfiguraion"
import { LogoConfiguration } from "./LogoConfiguration"
import { TypographyConfiguration } from "./TypographyConfiguration"

export const Configuration = () => {
  return (
    <>
      <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="configuration">
        <h3 className="text-2xl font-semibold mt-4 text-black" >Project Configuration</h3>
        <ColorConfiguration />
        <TypographyConfiguration />
        <LogoConfiguration />
      </div>
    </>
  )
}