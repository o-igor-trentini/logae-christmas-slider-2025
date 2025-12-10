export function BackgroundEffects() {
    return (
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-linear-to-br from-(--logae-primary) via-(--logae-secondary) to-transparent opacity-20 rounded-full blur-3xl animate-pulse'></div>
            <div
                className='absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-linear-to-br from-(--logae-secondary) to-(--logae-primary) opacity-10 rounded-full blur-3xl animate-pulse'
                style={{ animationDelay: '1s' }}
            ></div>
        </div>
    );
}
