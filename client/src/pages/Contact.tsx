import { motion } from 'framer-motion'
import { Mail, Code2, Link2 } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/animations/variants'

export default function Contact() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-2xl px-6 py-16 md:py-24"
    >
      <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-foreground md:text-5xl">
        Get in Touch
      </motion.h1>

      <motion.p variants={fadeInUp} className="mt-4 text-lg text-muted-foreground">
        Have a question or want to work together? Reach out — I'll get back to you as soon as I can.
      </motion.p>

      <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
        >
          <Mail className="size-5" />
          your.email@example.com
        </a>
        <a
          href="https://github.com/nitya-bin07"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
        >
          <Code2 className="size-5" />
          github.com/nitya-bin07
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
        >
          <Link2 className="size-5" />
          LinkedIn
        </a>
      </motion.div>
    </motion.section>
  )
}
