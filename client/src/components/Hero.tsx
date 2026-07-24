import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/animations/variants'

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-start justify-center px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <motion.span variants={fadeInUp} className="text-sm font-medium text-accent">
          Hi, I'm Nitya 👋
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-bold leading-tight text-foreground md:text-7xl"
        >
          I build things
          <br />
          for the web.
        </motion.h1>

        <motion.p variants={fadeInUp} className="max-w-xl text-lg text-muted-foreground">
          Mechanical Engineering student at IIT (ISM) Dhanbad, building full-stack projects and
          preparing for software engineering roles.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex gap-4 pt-2">
          <Button asChild size="lg">
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
