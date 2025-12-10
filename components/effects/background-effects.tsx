export function BackgroundEffects() {
    return (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-linear-to-br from-[#1CBA89] via-[#064635] to-transparent opacity-20 rounded-full blur-3xl animate-pulse'></div>
            <div
                className='absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-linear-to-br from-[#064635] to-[#1CBA89] opacity-10 rounded-full blur-3xl animate-pulse'
                style={{ animationDelay: '1s' }}
            ></div>
        </div>
    );
}
