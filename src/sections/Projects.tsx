import { ReactSVG } from 'react-svg'
import ProjectBubble from '../components/ProjectBubble'
import MovingDashedBorder from '../components/MovingDashedBorder'
import { useState } from 'react'

export type ProjectListType = {
    title: string
    images: string[]
    desc: string
    note: string | null
    tech: {
        name: string
        svg: string
    }[]
    liveLink: string
    ghLink: string[]
}

const list = [
    {
        title: 'SHOPPING',
        images: ['/images/ecom-product-page.jpg'],
        desc: 'Ecommerce site for both buying and selling. Users can set up their own shops for other users to buy. Guest are welcome!',
        note: 'Node app is deployed on free Render server that spins down on inactivity, please give it a minute to wake up.',
        tech: [
            { name: 'react', svg: '/svg/react-svgrepo-com.svg' },
            {
                name: 'typescript',
                svg: '/svg/typescript-official-svgrepo-com.svg',
            },
            { name: 'tailwind', svg: '/svg/tailwind-svgrepo-com.svg' },
            { name: 'node', svg: '/svg/node-js-svgrepo-com.svg' },
            { name: 'express', svg: '/svg/express-svgrepo-com-white.svg' },
            { name: 'postgresql', svg: '/svg/postgresql-icon.svg' },
            { name: 'JWT', svg: '/svg/jwt-3.svg' },
            {
                name: 'AWS',
                svg: '/svg/Amazon_Lambda_architecture_logo.svg',
            },
        ],
        liveLink: 'https://sean-shpg.netlify.app',
        ghLink: [
            'https://github.com/seancyrill/sean-shpg-frontend',
            'https://github.com/seancyrill/sean-shpg-backend',
        ],
    },
    {
        title: 'Space Tourism',
        images: ['/images/space-tourism2.jpg'],
        desc: 'Travel to SPACE, sit back, and relax because we’ll give you a truly out of this world experience!',
        note: 'Navigate easily through the list and pages with scroll/swipe controls. ',
        tech: [
            { name: 'react', svg: '/svg/react-svgrepo-com.svg' },
            {
                name: 'typescript',
                svg: '/svg/typescript-official-svgrepo-com.svg',
            },
            { name: 'tailwind', svg: '/svg/tailwind-svgrepo-com.svg' },
        ],
        liveLink: 'https://space-tourism-seandg.netlify.app/',
        ghLink: ['https://github.com/seancyrill/space-tourism-website'],
    },
    {
        title: 'Rest Countries',
        images: ['/images/rest-countries.jpg'],
        desc: 'A site working with REST Countries API. Filter or search results by name, region language etc. With togglable dark mode.',
        note: null,
        tech: [
            { name: 'react', svg: '/svg/react-svgrepo-com.svg' },
            {
                name: 'typescript',
                svg: '/svg/typescript-official-svgrepo-com.svg',
            },
            { name: 'tailwind', svg: '/svg/tailwind-svgrepo-com.svg' },
        ],
        liveLink: 'https://sean-rest-countries.netlify.app/',
        ghLink: ['https://github.com/seancyrill/rest-countries'],
    },
]

const endLinks = [
    {
        to: 'https://github.com/seancyrill',
        name: 'My Reposities',
        src: '/svg/github-colored-svgrepo-com.svg',
    },
    {
        to: 'https://www.frontendmentor.io/profile/seancyrill',
        name: 'Challenges Conquered',
        src: '/svg/frontend-mentor-seeklogo.svg',
    },
]

function Projects() {
    const [focusStates, setFocusStates] = useState([false, false, false])
    const isFocusing = focusStates.some((val) => val)

    return (
        <>
            <section className="relative min-h-screen" id="projects">
                <div className="sticky left-0 top-0 z-0 grid min-h-screen w-full select-none place-content-center">
                    <span className="overflow-clip">
                        <h1
                            className={`title-popup smooth-animation text-center text-titleWall ${isFocusing ? 'text-secondary-neutral/10' : 'text-secondary-neutral'}`}
                        >
                            PROJECTS
                        </h1>
                    </span>
                </div>
                <div className="h-40 bg-gradient-to-t from-secondary-neutral to-primary-neutral" />

                <div
                    className={`smooth-animation relative pt-[50svh] backdrop-invert`}
                >
                    <div className="">
                        {list.map((project, i) => (
                            <ProjectBubble
                                i={i}
                                project={project}
                                key={`project${i}`}
                                isHovering={focusStates[i]}
                                setFocusStates={setFocusStates}
                            />
                        ))}
                    </div>

                    <div className="flex min-h-screen flex-col justify-around">
                        <div />
                        <div className="flex flex-col items-end justify-center gap-3 overflow-hidden whitespace-nowrap text-sm text-secondary-neutral sm:text-xl">
                            <MovingDashedBorder />
                            <div className="flex w-full items-center justify-around gap-4 border-y border-primary-neutral p-2 text-primary-neutral">
                                {endLinks.map(({ name, src, to }, i) => (
                                    <a
                                        className="smooth-animation flex items-center gap-2 rounded-2xl p-2 hover:bg-primary-neutral hover:text-secondary-neutral"
                                        href={to}
                                        target="_blank"
                                        key={`endlink${i}`}
                                    >
                                        <ReactSVG
                                            src={src}
                                            className="fill-current"
                                            beforeInjection={(svg) => {
                                                svg.classList.add('primary-svg')
                                            }}
                                        />
                                        <p>{name}</p>
                                    </a>
                                ))}
                            </div>
                            <MovingDashedBorder reverse={true} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-40 bg-gradient-to-b from-secondary-neutral to-primary-neutral" />
        </>
    )
}

export default Projects
