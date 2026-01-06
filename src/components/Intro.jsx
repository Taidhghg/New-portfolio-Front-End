/**
 * Hero/Intro section component
 * Displays welcome message, professional intro, and current status
 * Features animated background elements and gradient text effects
 */
export default function Intro() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];
    const currentRole = 'Student';
    const currentInstitution = 'IADT';
    const yearRange = '2024 — Present';

    return (
        <header id="intro" className="w-full min-h-screen flex items-center relative overflow-hidden">
          {/* Animated background blobs for visual interest */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob"></div>
            <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-purple-200 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
            <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
              {/* Main intro content */}
              <div className="lg:col-span-3 space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-2">
                  <div className="text-sm text-muted-foreground tracking-wider">PORTFOLIO / 2025</div>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Taidhgh <br />
                    <span className="text-muted-foreground">Geraghty</span>
                  </h1>
                </div>

                <div className="space-y-6 max-w-md">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Frontend Developer crafting digital experiences at the intersection of
                    <span className="text-foreground"> design</span>,<span className="text-foreground"> technology</span>, and
                    <span className="text-foreground"> user experience</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                      Available for work
                    </div>
                    <div>Ireland</div>
                  </div>
                </div>
              </div>

              {/* Right sidebar: current role and skills */}
              <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
                {/* Current position card */}
                <div className="space-y-4 p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg">
                  <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                  <div className="space-y-2">
                    <div className="text-foreground font-semibold">{currentRole}</div>
                    <div className="text-muted-foreground">@ {currentInstitution}</div>
                    <div className="text-xs text-muted-foreground">{yearRange}</div>
                  </div>
                </div>

                {/* Skills card */}
                <div className="space-y-4 p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg">
                  <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-white/20 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
}