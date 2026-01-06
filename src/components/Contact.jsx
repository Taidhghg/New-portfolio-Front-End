
export default function Contact() {
    // Social media links configur
    const socialLinks = [
        { name: 'GitHub', handle: 'Taidhghg', url: 'https://github.com/Taidhghg' },
        { name: 'IADT', handle: 'n00234049@iadt.com', url: 'mailto:n00234049@iadt.com' },
        { name: 'LinkedIn', handle: 'taidhgh-geraghty', url: 'https://www.linkedin.com/in/taidhgh-geraghty-1326a8392/' },
    ];

    const emailAddress = 'n00234049@iadt.com';

    return (
        <section id="contact" className="py-20 sm:py-32 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full mix-blend-screen filter blur-3xl opacity-15 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full mix-blend-screen filter blur-3xl opacity-15 -z-10"></div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <a href={`mailto:${emailAddress}`} className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all duration-300 backdrop-blur-lg">
                    <span className="text-base sm:text-lg text-foreground">{emailAddress}</span>
                    <svg className="w-5 h-5 text-foreground transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: social media links */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl border border-white/10 bg-white/10 hover:bg-white/15 transition-all duration-300 backdrop-blur-lg"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground font-semibold group-hover:text-purple-600 transition-colors duration-300">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}