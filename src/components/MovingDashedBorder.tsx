type MovingDashedBorderType = {
    reverse?: boolean
}

function MovingDashedBorder({ reverse }: MovingDashedBorderType) {
    return (
        <div
            className={`flex w-fit overflow-hidden ${reverse && 'translate-x-1/2'}`}
        >
            {[...Array(2)].map((_, i) => (
                <div
                    className={`w-screen ${reverse ? 'animate-infinite-scroll-slowest' : 'animate-infinite-scroll-slowest-reverse'} border-t-4 border-dashed border-primary-neutral`}
                    key={`border${i}`}
                />
            ))}
        </div>
    )
}

export default MovingDashedBorder
