import SClogo from '../spline/SClogo'

type WelcomeType = {
    setSplinesLoaded: React.Dispatch<React.SetStateAction<boolean[]>>
}

function Welcome({ setSplinesLoaded }: WelcomeType) {
    return (
        <section
            id="welcome"
            className="relative min-h-screen overflow-hidden px-1 md:px-4"
        >
            <div className="relative mt-[70px] flex h-[calc(100vh-78px)] gap-4 rounded-[2.5rem] bg-secondary-neutral text-primary-neutral ">
                <div className="relative h-full w-full">
                    <SClogo setSplinesLoaded={setSplinesLoaded} />
                </div>
                <h1 className="absolute m-4 flex text-right font-header text-8xl font-bold md:m-20 md:items-center portrait:items-end portrait:justify-end">
                    SEAN
                </h1>
                <h2 className="absolute bottom-0 right-0 m-4 flex flex-col text-right font-header text-5xl font-light sm:text-6xl md:m-14 md:items-center portrait:items-end portrait:justify-end">
                    <p className="w-full text-right">{`<WEB />`}</p>
                    <p className="w-full text-right">DEVELOPER</p>
                </h2>
            </div>
        </section>
    )
}

export default Welcome
