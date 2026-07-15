import { useState } from 'react'
import { ReactSVG } from 'react-svg'
import SkillsShowcase from '../components/SkillsShowcase'
function Skills() {
    const [slideIndex, setSlideIndex] = useState(0)

    const list = [
        {
            title: 'Languages & Databases',
            logo: '/svg/guest-star-svgrepo-com.svg',
            skills: [
                {
                    name: 'TypeScript',
                    svg: '/svg/typescript-official-svgrepo-com.svg',
                },
                { name: 'JavaScript (ES6+)', svg: '/svg/js-svgrepo-com.svg' },
                { name: 'HTML5', svg: '/svg/html-5-svgrepo-com.svg' },

                { name: 'CSS3', svg: '/svg/css-3-svgrepo-com.svg' },
                { name: 'PostgreSQL', svg: '/svg/postgresql-icon.svg' },
                { name: '', svg: '' },
            ],
        },
        {
            title: 'Frameworks & Libraries',
            logo: '/svg/laboratory-svgrepo-com.svg',
            skills: [
                { name: 'Next.js', svg: '/svg/next-js-svgrepo-com.svg' },
                { name: 'React (React.js)', svg: '/svg/react-svgrepo-com.svg' },
                { name: 'Node.js', svg: '/svg/node-js-svgrepo-com.svg' },

                { name: 'Express.js', svg: '/svg/express-svgrepo-com.svg' },
                { name: 'Tailwind CSS', svg: '/svg/tailwind-svgrepo-com.svg' },
                { name: 'Prisma', svg: '/svg/prisma-svgrepo-com.svg' },

                { name: 'Zod', svg: '/svg/Zod--Streamline-Svg-Logos.svg' },
                { name: 'Jest', svg: '/svg/Jest.svg' },
                {
                    name: 'Vitest',
                    svg: '/svg/Vitest--Streamline-Svg-Logos.svg',
                },

                {
                    name: 'RTL',
                    svg: '/svg/Testing-Library--Streamline-Svg-Logos.svg',
                },
                { name: 'Playwright', svg: '/svg/playwright.svg' },
                { name: '', svg: '' },
            ],
        },
        {
            title: 'Tools & Platforms',
            logo: '/svg/startup-rocket-svgrepo-com.svg',
            skills: [
                { name: 'Git', svg: '/svg/git-svgrepo-com.svg' },
                { name: 'GitHub', svg: '/svg/github-colored-svgrepo-com.svg' },
                { name: 'NPM', svg: '/svg/npm-svgrepo-com.svg' },

                { name: 'VS Code', svg: '/svg/vs-code-svgrepo-com.svg' },
                { name: 'Cursor', svg: '/svg/CUBE_25D.svg' },
                { name: 'CI/CD', svg: '/svg/githubactions.svg' },

                { name: 'AWS', svg: '/svg/Aws--Streamline-Svg-Logos.svg' },
                { name: 'Supabase (RLS)', svg: '/svg/supabase-logo-icon.svg' },
                { name: 'Stripe', svg: '/svg/Stripe wordmark - Blurple.svg' },

                { name: 'OAuth', svg: '/svg/oauth.svg' },
                { name: 'Claude', svg: '/svg/claude-color.svg' },
                {
                    name: 'Copilot',
                    svg: '/svg/Github-Copilot--Streamline-Svg-Logos.svg',
                },

                {
                    name: 'Antigravity (Gemini)',
                    svg: '/svg/antigravity-color.svg',
                },
                { name: 'Codex (OpenAI)', svg: '/svg/codex-color.svg' },
                { name: '', svg: '' },
            ],
        },
    ]

    return (
        <>
            <div className="h-40 bg-gradient-to-t from-secondary-neutral to-primary-neutral" />
            <section className="min-h-[100svh] select-none overflow-hidden bg-secondary-neutral">
                <div className="h-[10svh]" />
                <div
                    className="flex w-fit border-y-4 border-primary-neutral"
                    id="skills"
                >
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
                            className={`grid h-fit cursor-pointer items-center border-b border-primary-neutral p-4 md:p-6 lg:min-h-[70vh] lg:border-b-0 lg:border-r ${slideIndex === i ? 'bg-primary-neutral text-secondary-neutral' : 'bg-secondary-neutral text-primary-neutral'}`}
                        >
                            <span
                                className="flex items-center gap-2 text-xl leading-[1] md:text-[2.5rem]"
                                aria-label={title}
                            >
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
