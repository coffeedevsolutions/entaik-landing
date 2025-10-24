export function HeroHeader() {
  return (
    <section className="py-8 lg:py-12 font-[family-name:var(--font-suse-mono)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#A34DFF] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative px-6 py-8 lg:px-8 lg:py-12">
            <div className="text-center">
              {/* Main text */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight font-[family-name:var(--font-suse-mono)] text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                Upgrade your intake.
              </h1>
              
              {/* Subtle subtitle */}
              <p className="mt-6 text-lg sm:text-xl text-[#B8FFCE] max-w-2xl mx-auto font-[family-name:var(--font-suse-mono)] font-medium drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                Transform scattered requests into structured workflows with AI-powered intelligence
              </p>
              
              {/* Decorative line */}
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-2 bg-[#6FB384] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
