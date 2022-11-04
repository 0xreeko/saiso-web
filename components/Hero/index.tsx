export const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-m-hero sm:text-d-hero"><span className="gradientBg bg-clip-text text-transparent">The Low-Code Feedback Widget</span> Powered by Notion.</h1>
            <p className="px-4 text-d-base font-normal max-w-3xl">A <span className="text-ruby-400">plug & play</span> widget and API to gather feedback from your users, in seconds. Better development. Focused iterations. Great user satisfaction. Let Saiso handle the rest.</p>
            <div>
                <a href={'#setup'} className="py-1 px-3 h-11 rounded-md duration-200 flex items-center box-border border border-transparent hover:border-ruby-600 bg-ruby-500 hover:bg-transparent hover:text-ruby-600 font-semibold outline-none">Get started now - it's free</a>
            </div>
        </div>
    )
}