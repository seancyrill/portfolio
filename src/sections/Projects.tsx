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
    return (
        <section className="relative">
            <div className="sticky left-0 top-0 grid min-h-[100svh] select-none place-content-center">
                <h1 className="smooth-animation text-center text-titleWall">
                    PROJECTS
                </h1>
            </div>

            <div className="pt-[50svh] backdrop-invert">
                <div>
                    {list.map(({ title }, i) => (
                        <h2 className="min-h-[100svh] border">{title}</h2>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
