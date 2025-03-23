import { useEffect, useState } from "react"

const OnlineStatus =()=>{
    const [isOnline ,  setIsOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener('offline', (e)=>{
            setIsOnline(false);
        })
    
        window.addEventListener('online', (e)=>{
            setIsOnline(true)
        })
    },[])
    
    return isOnline;
}

export default OnlineStatus;