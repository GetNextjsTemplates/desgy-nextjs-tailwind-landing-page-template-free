const PlansSkeleton = () => {
  return (
    <>
      <div>
        <div
          role='status'
          className='flex flex-col items-center max-w-sm animate-pulse border border-border text-center p-10'>
          <div className='h-2.5 bg-gray-200 rounded-full w-16 mb-4'></div>
          <div className='h-2 w-48 bg-gray-200 rounded-full max-w-[360px] mb-2.5'></div>
          <div className='h-2 w-16 bg-gray-200 rounded-full mb-2.5'></div>
          <div className='h-7 w-40 bg-gray-200 rounded-full max-w-[330px] my-5'></div>
          <div className='h-2 w-48 bg-gray-200 rounded-full max-w-[360px] mb-2.5'></div>
          <div className='h-2 w-48 bg-gray-200 rounded-full mb-2.5'></div>
          <div className='h-2 w-48 bg-gray-200 rounded-full max-w-[330px] mb-2.5'></div>
          <div className='h-2 w-48 bg-gray-200 rounded-full max-w-[300px] mb-2.5'></div>
          <div className='h-2 w-48 bg-gray-200 rounded-full max-w-[360px]'></div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </>
  )
}

export default PlansSkeleton
