import { useEffect, useState } from 'react'

export const ScrollStatus = (threshold : number = 10) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > threshold){
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold])

    return isScrolled;
}