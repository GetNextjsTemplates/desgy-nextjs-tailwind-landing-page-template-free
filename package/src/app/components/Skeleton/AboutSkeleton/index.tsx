const AboutSkeleton = () => {
  return (
    <>
      <div>
        <div
          role='status'
          className='max-w-md animate-pulse overflow-hidden p-4 mt-5 relative rounded-2xl bg-linear-to-b from-primary/10 to-white shadow-md'>          
          <div className='h-2 w-full bg-bluegray/20 rounded-full mb-2.5'></div>
          <div className='h-2 w-full bg-bluegray/20 rounded-full max-w-[330px] mb-2.5'></div>
          <div className='h-2 w-full bg-bluegray/20 rounded-full max-w-[300px] mb-2.5'></div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </>
  )
}

export default AboutSkeleton
