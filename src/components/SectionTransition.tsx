type SectionTransitionType = {
    primaryToWhite?: boolean
}

function SectionTransition({ primaryToWhite }: SectionTransitionType) {
    return (
        <div
            className={`${/* primaryToWhite ? 'bg-section-border-b-a' : 'bg-section-border-a-b' */ ''} h-12 sm:h-20`}
        />
    )
}

export default SectionTransition
