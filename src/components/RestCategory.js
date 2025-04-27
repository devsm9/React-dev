import { useState } from 'react';
import RestaurentItemBody from './RestaurentItemBody'

const RestCategory =({data, setShowIndex, showItems})=>{

    const handleExpand =()=>{
        setShowIndex()
    }

    return(<>
    <div>
        <div  className="shadow-lg mb-4 bg-gray-100 w-6/12 mx-auto ">
        <div className="flex justify-between cursor-help" onClick={handleExpand}>
        <span className="font-medium">{data.title} ({data?.itemCards?.length})</span>
        <span>▼</span>
        </div>
        {showItems && <RestaurentItemBody key={data?.title} items={data?.itemCards}/>}
        </div>
    </div>

</>)

}

export default RestCategory;