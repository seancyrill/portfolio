import { useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import SClogo from '../spline/SClogo'

type WelcomeType = {
    setSplinesLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

function Welcome({ setSplinesLoaded }: WelcomeType) {
    const welcomeRef = useRef(null)
    const { inView } = useIntersectionObserver(
        { rootMargin: '50%' },
        welcomeRef
    )

    return (
        <section
            ref={welcomeRef}
            id="welcome"
            className="relative min-h-[100svh] overflow-hidden px-1 md:px-4"
        >
            <div className="relative mt-[70px] flex h-[calc(100svh-78px)] gap-4 rounded-[2.5rem] bg-secondary-neutral text-primary-neutral ">
                <div className="relative h-full w-full">
                    <SClogo
                        setSplinesLoaded={setSplinesLoaded}
                        inView={inView}
                    />
                </div>
                <h1 className="absolute m-4 flex text-right font-header text-8xl font-bold md:m-20 md:items-center portrait:items-end portrait:justify-end">
                    SEAN
                </h1>
                <h2 className="absolute bottom-0 right-0 m-4 flex flex-col text-right font-header text-4xl font-light sm:text-6xl md:m-14 md:items-center portrait:items-end portrait:justify-end">
                    <p className="w-full text-right">{`FULL STACK`}</p>
                    <p className="w-full whitespace-nowrap text-right">{`<DEVELOPER />`}</p>
                </h2>
            </div>
        </section>
    )
}

export default Welcome
