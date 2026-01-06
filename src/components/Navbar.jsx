

/**
 * Navigation sidebar component
 * Provides smooth scroll navigation to major page sections
 * Only visible on large screens (lg breakpoint)
 */
export default function Navbar() {
    const navigationSections = [
        { id: 'intro', label: 'Intro' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    const sectionColors = [
        'from-purple-300 to-purple-200',
        'from-pink-300 to-pink-200',
        'from-blue-300 to-blue-200'
    ];

    const handleSectionClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-6">
            {navigationSections.map((section, index) => (
                <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r ${sectionColors[index]} hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-white/50 hover:scale-110`}
                    aria-label={`Navigate to ${section.label} section`}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-white to-white/50"></div>
                  <span className="text-sm font-semibold text-purple-900 capitalize whitespace-nowrap">{section.label}</span>
                </button>
            ))}
          </div>
        </nav>
    );
}