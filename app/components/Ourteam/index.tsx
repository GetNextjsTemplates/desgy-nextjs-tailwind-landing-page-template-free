import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">Our team belives you deserve <br /> only the best.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/teamimg.png" alt="office-image" height={684} width={1296} />
            </div>
        </div>
    )
}

export default index;
