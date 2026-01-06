import projects from '../assets/data/projects.json';

//Projects section component


export default function Projects() {

 //Renders individual project card with image, data, and action buttons
 
    const renderProjectCard = (project) => {
        const projectImage = project.screenshots?.[0];
        const imageUrl = projectImage?.url || '';
        const imageAlt = projectImage?.caption || project.title;
        const hasGitHubLink = !!project.github;

        return (
            <article
                key={project.slug}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:border-white/20 transition-all duration-300"
            >
                {/* Project image preview */}
                <div className="w-full h-48 md:h-40 lg:h-48 overflow-hidden bg-white/5">
                    <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Project details section */}
                <div className="p-6">
                    {/* Title and date */}
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <div className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.date}</div>
                    </div>

                    {/* Project description */}
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                    {/* Technology tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-muted-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Source code link button */}
                    <div className="mt-6 flex items-center gap-3">
                        {hasGitHubLink && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-md border border-white/10 text-sm text-foreground hover:bg-white/5 hover:border-white/20 transition-all duration-200"
                            >
                                Source
                            </a>
                        )}
                    </div>
                </div>
            </article>
        );
    };

    return (
        <section id="projects" className="py-20 sm:py-32">
            <div className="space-y-8">
                {/* Section header */}
                <div className="space-y-2">
                    <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
                    <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                        Projects I have worked on while studying Computer Science.
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => renderProjectCard(project))}
                </div>
            </div>
        </section>
    );
}