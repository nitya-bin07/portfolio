import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/constants/projects'
import { staggerContainer } from '@/animations/variants'

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold text-foreground md:text-5xl">Projects</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        A selection of full-stack projects I've built, from idea to deployment.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
