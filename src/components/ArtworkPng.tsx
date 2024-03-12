function ArtworkPng() {
    return (
        <div className="relative w-full overflow-hidden object-cover p-4 md:max-w-[50%]">
            <img
                src="/images/main.jpg"
                alt="main artwork"
                className="h-full w-full object-cover"
            />
            <a
                target="_blank"
                href="https://www.freepik.com/free-photo/3d-render-code-testing-functional-test-usability_34727540.htm"
                className="absolute right-4 top-3/4 rounded-full bg-primary px-3 py-1 text-[0.5rem] text-primary opacity-30 sm:text-xs"
            >
                by: upklyak@Freepik
            </a>
        </div>
    )
}

export default ArtworkPng
