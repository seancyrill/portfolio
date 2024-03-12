import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    function scrollToTop() {
        window.scrollTo({
            top: 0,
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={(e) => (e.preventDefault(), scrollToTop())}
                    className="smooth-animation fixed bottom-2 right-2 h-16 w-16 rounded-full text-primary hover:brightness-90 hover:saturate-200"
                >
                    <ReactSVG
                        src="/svg/icon-scroll-top.svg"
                        className="fill-current"
                    />
                </button>
            )}
        </>
    )
}

export default ScrollToTop
