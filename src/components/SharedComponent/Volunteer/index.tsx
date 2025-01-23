import Link from "next/link";

const Volunteer = () => {
    return (
        <section className="py-28 bg-volunteer-bg bg-no-repeat bg-cover">
            <div className="container mx-auto lg:max-w-screen-xl px-4">
                <div className="text-center">
                    <h2 className="text-30 font-medium text-white mb-6">
                        Become a Volunteer
                    </h2>
                    <p className="text-16 text-white lg:max-w-60% mx-auto mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscelit. Nam malesu dolor sit amet, consectetur adipiscelit. consectetur adipiscelit. Nam malesu dolor.
                    </p>
                    <div className="flex justify-center ">
                        <Link href="#" className="text-white bg-gradient-to-r from-error to-warning px-7 py-5 hover:from-transparent hover:to-transparent border border-transparent hover:border-error hover:text-error rounded">
                            Donate now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Volunteer;