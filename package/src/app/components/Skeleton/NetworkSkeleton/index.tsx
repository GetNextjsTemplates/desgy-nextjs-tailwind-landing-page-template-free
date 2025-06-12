const NetworkSkeleton = () => {
  return (
    <>
      <div>
        <div
          role='status'
          className='max-w-md animate-pulse overflow-hidden bg-white rounded-2xl p-5 shadow-md bg-linear-to-b from-primary/10 to-white'>
          <div className="flex items-center gap-5">
            <svg
              className='w-15 h-15 text-bluegray/20 my-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 18'>
              <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
            </svg>
            <div className='h-2 w-28 bg-bluegray/20 rounded-full max-w-[330px] mb-2.5'></div>
          </div>
          <div className='h-2 w-full bg-bluegray/20 rounded-full mb-2.5'></div>
          <div className='h-2 w-full bg-bluegray/20 rounded-full max-w-[330px] mb-2.5'></div>
          <div className='h-2 w-full bg-bluegray/20 rounded-full max-w-[300px] mb-2.5'></div>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </>
  )
}

export default NetworkSkeleton
