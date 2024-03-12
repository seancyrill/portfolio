type InitialLoadingType = {
    ready: boolean
}

function InitialLoading({ ready }: InitialLoadingType) {
    return (
        <div
            className={`smoother-animation fixed left-0 top-0 z-[1000] flex h-[100svh] w-screen select-none flex-col overflow-clip  ${ready ? '-translate-y-full' : 'translate-y-0'}`}
        >
            <div
                className={`smoother-animation grid h-screen w-full items-end justify-center bg-secondary-neutral`}
            >
                {/* Loading indicator */}
                <div className="h-12 w-24 overflow-clip">
                    <div
                        className={`flex w-fit -translate-x-1/2 overflow-hidden`}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div
                                className={`w-screen animate-infinite-scroll-slower-reverse border-t-8 ${ready ? 'border' : 'border-dotted'} border-primary-darker`}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Waving Yellow Border */}
            <div
                className={`h-[20vh] w-full origin-top animate-grow-in-out bg-primary-darker ${ready ? 'block scale-y-0' : 'hidden'}`}
            />
        </div>
    )
}

export default InitialLoading
