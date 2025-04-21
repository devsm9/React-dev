const Shimmer =()=>{
  return (
      <>
        <div className="mt-6 h-90 w-70 mr-5 bg-gray-200 rounded-lg overflow-hidden animate-pulse">
          <div className="h-40 bg-gray-300 mb-2"></div>
          <div className="pl-4 pt-5">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          </div>
        </div>
      </>
    );
};

const ShimmerList = () =>{
return (
  <div className="flex flex-wrap">
    {[...Array(8)].map((__,index)=>(
      <Shimmer key={index} />
    ))}

  </div>
)
}

export const DataShimmer =() =>{
  return (
    <div className="flex flex-wrap">
      {[...Array(1)].map((__,index)=>(
        <Shimmer key={index} />
      ))}
  
    </div>
  )
}
export default ShimmerList