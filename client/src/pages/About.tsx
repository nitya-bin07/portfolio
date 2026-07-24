import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/animations/variants'

export default function About() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-3xl px-6 py-16 md:py-24"
    >
      <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-foreground md:text-5xl">
        About
      </motion.h1>

      <motion.p variants={fadeInUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
        I'm a second-year Mechanical Engineering student at IIT (ISM) Dhanbad, currently building a
        software development portfolio alongside my core studies. What started as curiosity about
        how websites work turned into building and shipping full-stack projects end-to-end — from
        database design to deployment.
      </motion.p>

      <motion.p variants={fadeInUp} className="mt-4 text-lg leading-relaxed text-muted-foreground">
        I care about writing clean, maintainable code and understanding systems deeply rather than
        just getting things to work. Outside of coursework, I'm deep in interview preparation —
        studying data structures and algorithms, and going through my own projects phase-by-phase to
        be able to explain every architectural decision clearly.
      </motion.p>

      <motion.div variants={fadeInUp} className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Currently</h2>
        <ul className="mt-4 flex flex-col gap-2 text-muted-foreground">
          <li>→ Preparing for SDE interviews — deep in DSA practice</li>
          <li>→ Studying my own projects' architecture to explain them clearly</li>
          <li>→ Building this portfolio, end to end</li>
        </ul>
      </motion.div>
    </motion.section>
  )
}
