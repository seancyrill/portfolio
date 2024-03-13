import { useRef } from 'react'
import { ProjectListType } from '../sections/Projects'
import { ReactSVG } from 'react-svg'

type ProjectBubbleType = {
    i: number
    project: ProjectListType
    isHovering: boolean
    setFocusStates: React.Dispatch<React.SetStateAction<boolean[]>>
}

function ProjectBubble({
    i,
    project,
    isHovering,
    setFocusStates,
}: ProjectBubbleType) {
    const projectRef = useRef<HTMLDivElement>(null)
    const { desc, ghLink, liveLink, title, images, tech, note } = project

    function toggleFocus(input?: boolean) {
        setFocusStates((prev) =>
            prev.map((prevState, prevIndex) => {
                const newState = input === undefined ? !prevState : input
                const otherFocuses = newState ? false : prevState
                return prevIndex === i ? newState : otherFocuses
            })
        )
    }

    /* //unfocuses project when its going out of view(for mobile)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    toggleFocus(false)
                }
            },
            {
                threshold: 0.4,
            }
        )

        if (projectRef.current) {
            observer.observe(projectRef.current)
        }

        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current)
            }
        }
    }, []) */

    function projectLink(link: 'gh' | 'live', ghIndex: number = 0) {
        const href = link === 'gh' ? ghLink[ghIndex] : liveLink
        return href
    }

    function handleProjectClick() {
        if (isHovering) {
            const href = projectLink('live')
            window.open(href, '_blank')
            toggleFocus(false)
        } else {
            toggleFocus(true)
        }
    }

    return (
        <div
            className={`smooth-animation flex items-center p-4 py-[10vh] font-header sm:px-20 md:px-40 ${i === 0 && 'justify-end pr-8 pt-8'} ${i === 1 && '-mb-[20vh] justify-start pl-8 pt-8'} ${i === 2 && 'justify-center'}`}
        >
            <article
                ref={projectRef}
                onMouseEnter={() => toggleFocus(true)}
                onMouseLeave={() => toggleFocus(false)}
                onScroll={() => toggleFocus(false)}
                onClick={handleProjectClick}
                className={`relative flex h-[75vh] w-[35%] min-w-[170px] cursor-pointer flex-col bg-primary-neutral bg-transparent text-black ${i === 1 && `scroll-animation scroll-slide`}`}
            >
                {/* Project links */}
                <div
                    className={`smooth-animation absolute left-0 top-0 flex origin-bottom -translate-y-full scale-y-0 gap-1 ${isHovering && 'scale-y-100'}`}
                >
                    {ghLink.map(({}, i) => {
                        const href = projectLink('gh', i)
                        return (
                            <a href={href} key={`ghLink${i}`}>
                                <ReactSVG
                                    src="/svg/github-colored-svgrepo-com.svg"
                                    key={`ghlink${i}`}
                                    className={`rounded-t-full bg-primary-neutral px-2 py-1 ${i !== 0 && 'rotate-180 rounded-b-full rounded-t-none border border-t-0 border-secondary-neutral invert'}`}
                                    beforeInjection={(svg) => {
                                        svg.classList.add('project-svg')
                                    }}
                                />
                            </a>
                        )
                    })}
                    <a href={projectLink('live')}>
                        <ReactSVG
                            src="/svg/open.svg"
                            className="rounded-t-full bg-primary-neutral bg-opacity-30 px-2 py-1 text-primary-neutral"
                            beforeInjection={(svg) => {
                                svg.classList.add('project-svg')
                            }}
                        />
                    </a>
                </div>

                {/* Project Img */}
                <div className="h-full w-full overflow-hidden">
                    <div
                        className={`smooth-animation relative h-full w-full overflow-hidden ${isHovering && '-translate-y-[100px]'}`}
                    >
                        <img
                            src={images[0]}
                            alt="project-bg"
                            className="absolute top-1/2 z-0 h-[110%] w-[120%] -translate-y-1/2 object-cover"
                        />
                    </div>
                </div>

                {/* Project Headers */}
                <div
                    className={`smooth-animation smooth-animation relative left-0 top-0 flex w-full origin-top-left flex-col justify-between bg-transparent text-primary-neutral hover:scale-100 ${isHovering && '-translate-y-[100px]'}`}
                >
                    <div className="flex w-full flex-col justify-between md:flex-row md:gap-2">
                        <h2 className="py-2 text-xl font-bold md:w-1/2">
                            {title}
                        </h2>
                        <div className="flex flex-wrap items-center gap-4 md:m-1 md:w-1/2 md:justify-end">
                            {tech.map(({ svg }, i) => (
                                <div
                                    key={i}
                                    className="flex-col items-center justify-center"
                                >
                                    <ReactSVG
                                        src={svg}
                                        className="grid place-content-center"
                                        beforeInjection={(svg) => {
                                            svg.classList.add('project-svg')
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Desc */}
                    <div
                        className={`smooth-animation font-light ${isHovering ? 'translate-y-0 text-primary-neutral' : 'translate-y-1/2 text-transparent'}`}
                    >
                        <p className="py-2">{desc}</p>

                        {note && (
                            <p
                                className={`border-dashed border-primary-neutral/30 py-2 italic ${isHovering ? 'border-t' : 'border-t-0'}`}
                            >
                                ps: {note}
                            </p>
                        )}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ProjectBubble
