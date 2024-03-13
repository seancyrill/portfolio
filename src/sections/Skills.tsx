import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import SkillsShowcase from '../components/SkillsShowcase'
function Skills() {
    const [slideIndex, setSlideIndex] = useState(0)

    const list = [
        {
            title: 'Frontend',
            logo: '/svg/guest-star-svgrepo-com.svg',
            skills: [
                { name: 'React JS', svg: '/svg/react-svgrepo-com.svg' },
                { name: 'Javascript', svg: '/svg/js-svgrepo-com.svg' },
                {
                    name: 'Typescript',
                    svg: '/svg/typescript-official-svgrepo-com.svg',
                },
                { name: 'HTML5', svg: '/svg/html-5-svgrepo-com.svg' },
                { name: 'CSS3', svg: '/svg/css-3-svgrepo-com.svg' },
                { name: 'Tailwind CSS', svg: '/svg/tailwind-svgrepo-com.svg' },
            ],
        },
        {
            title: 'Backend',
            logo: '/svg/laboratory-svgrepo-com.svg',
            skills: [
                { name: 'Node JS', svg: '/svg/node-js-svgrepo-com.svg' },
                { name: 'Express', svg: '/svg/express-svgrepo-com.svg' },
                { name: 'PostgreSQL', svg: '/svg/postgresql-icon.svg' },
            ],
        },
        {
            title: 'Other',
            logo: '/svg/startup-rocket-svgrepo-com.svg',
            skills: [
                { name: 'Github', svg: '/svg/github-colored-svgrepo-com.svg' },
                { name: 'Git', svg: '/svg/git-svgrepo-com.svg' },
                { name: 'NPM', svg: '/svg/npm-svgrepo-com.svg' },
                {
                    name: 'AWS S3',
                    svg: '/svg/amazon-s3-svgrepo-com.svg',
                },
                {
                    name: 'AWS Lambda',
                    svg: '/svg/Amazon_Lambda_architecture_logo.svg',
                },
                { name: 'VSCode', svg: '/svg/vs-code-svgrepo-com.svg' },
                { name: 'Vite', svg: '/svg/vite-svgrepo-com.svg' },
                { name: 'Netlify', svg: '/svg/netlify-svgrepo-com.svg' },
                {
                    name: 'Render',
                    img: (
                        <img
                            src="/svg/renderco_logo.svg"
                            className="w-[40px] bg-white invert"
                        />
                    ),
                },
                { name: 'ChatGPT', svg: '/svg/ChatGPT_logo.svg' },
                { name: 'JWT', svg: '/svg/jwt-3.svg' },
                { name: 'Axios', svg: '/svg/axios.svg' },
            ],
        },
    ]

    return (
        <>
            <div className="h-40 bg-gradient-to-t from-secondary-neutral to-primary-neutral" />
            <section
                id="skills"
                className="min-h-[100svh] select-none overflow-hidden bg-secondary-neutral"
            >
                <div className="flex h-[50vh] items-end px-4">
                    <h3 className="flex w-full items-center justify-between gap-4 font-header text-4xl font-light text-primary-neutral">
                        <span className="h-fit w-1/2 border-t" />
                        <span className="text-right">
                            Crafting digital experiences that captivate and
                            inspire, one line of code at a time.
                        </span>
                    </h3>
                </div>
                <div className="h-screen" />
                <div className="flex w-fit border-y-4 border-primary-neutral">
                    {[...Array(2)].map((_, i) => (
                        <h1
                            key={i}
                            className={`flex animate-infinite-scroll items-center text-center font-header text-titleWall text-primary-neutral`}
                            aria-hidden={i !== 0}
                        >
                            <span className="mx-12">::</span>
                            <span className="mx-12">TECHNOLOGIES</span>
                            <span className="mx-12">::</span>
                            <span className="mx-12">SKILLS</span>
                            <span className="mx-12">::</span>
                            <span className="mx-12">LANGUAGES</span>
                        </h1>
                    ))}
                </div>

                <div className="flex flex-col border-y border-primary-neutral text-primary-neutral lg:grid lg:grid-cols-4">
                    {list.map(({ title }, i) => (
                        <div
                            key={`skillset${i}`}
                            onMouseOver={() => setSlideIndex(i)}
                            onClick={() => setSlideIndex(i)}
                            className={`grid h-fit cursor-pointer items-center border-b border-primary-neutral p-4 md:p-8 lg:min-h-[70vh] lg:border-b-0 lg:border-r ${slideIndex === i ? 'bg-primary-neutral text-secondary-neutral' : 'bg-secondary-neutral text-primary-neutral'}`}
                        >
                            <span className="flex items-center gap-2 text-xl md:text-[2.5rem]">
                                {title}
                                <ReactSVG
                                    src="/svg/icon-next.svg"
                                    className="hidden rounded-full border border-current fill-current stroke-current px-4 py-3 text-center lg:flex"
                                />
                            </span>
                        </div>
                    ))}

                    {<SkillsShowcase skills={list[slideIndex].skills} />}
                </div>
            </section>
        </>
    )
}

export default Skills
