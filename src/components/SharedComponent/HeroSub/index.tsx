import React, { FC } from "react";

interface HeroSubProps {
    title: string;
}

const HeroSub: FC<HeroSubProps> = ({ title }) => {

    return (
        <>
            <section className="py-40 bg-herosub-bg bg-no-repeat bg-cover lg:mt-40 sm:mt-44 mt-20">
                <div className="container mx-auto lg:max-w-screen-xl px-4">
                    <h2 className="text-white md:text-56 text-36 font-medium">{title}</h2>
                </div>
            </section>
        </>
    );
};

export default HeroSub;