import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">WHO WE ARE</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">We are a digital <br /> agency that builds <br /> amazing products.</h4>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Get started</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="lg:absolute girldoodle">
                            <Image src="/images/digital/girldoodle.svg" alt="girldoodle" width={815} height={691} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
