import { useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

type SkillsShowcaseType = {
    skills: (
        | {
              name: string
              svg: string
              img?: undefined
          }
        | {
              name: string
              img: JSX.Element
              svg?: undefined
          }
    )[]
}
function SkillsShowcase({ skills }: SkillsShowcaseType) {
    const [skillDsiplay, setSkillDsiplay] = useState<
        undefined | (typeof skills)[]
    >()

    useEffect(() => {
        const groudByThree = []
        for (let i = 0; i < skills.length; i += 3) {
            if (i % 3 === 0) {
                groudByThree.push(skills.slice(i, i + 3))
            }
        }

        setSkillDsiplay(groudByThree)
    }, [skills])

    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center overflow-hidden border-y border-secondary-neutral bg-secondary-neutral lg:border-x">
            <div className="relative flex w-[300px] rotate-[30deg] -skew-y-12 flex-col items-center justify-center gap-8 overflow-hidden rounded-2xl border border-primary-neutral bg-primary-neutral p-8 shadow-[40px_25px_75px] shadow-primary-neutral">
                {skillDsiplay &&
                    skillDsiplay.map((group, groupIndex) => (
                        <div className="flex" key={`skillgroup${groupIndex}`}>
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={`copy${i}`}
                                    className={`flex items-center ${groupIndex % 2 ? 'animate-infinite-scroll-slower' : 'animate-infinite-scroll-slower-reverse'}`}
                                >
                                    {group.map(
                                        ({ name, svg, img }, skillIndex) => (
                                            <div
                                                key={`skill${skillIndex}`}
                                                className="mx-6 flex flex-col items-center gap-1"
                                                aria-hidden={skillIndex !== 0}
                                            >
                                                {svg && (
                                                    <ReactSVG
                                                        src={svg}
                                                        beforeInjection={(
                                                            svg
                                                        ) => {
                                                            svg.classList.add(
                                                                'skills-svg'
                                                            )
                                                        }}
                                                    />
                                                )}
                                                {img}
                                                <p className="text-center text-xs text-secondary-neutral">
                                                    {name}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default SkillsShowcase
