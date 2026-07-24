import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeInUp, staggerContainer } from '@/animations/variants'

export default function Resume() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="mx-auto flex max-w-3xl flex-col items-start px-6 py-16 md:py-24"
    >
      <motion.h1 variants={fadeInUp} className="text-4xl font-bold text-foreground md:text-5xl">
        Resume
      </motion.h1>

      <motion.p variants={fadeInUp} className="mt-4 max-w-xl text-lg text-muted-foreground">
        Download a copy of my resume, or view it directly in your browser.
      </motion.p>

      <motion.div variants={fadeInUp} className="mt-8 flex gap-4">
        <Button asChild size="lg">
          <a href="/resume.pdf" download>
            <Download className="size-4" />
            Download Resume
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <FileText className="size-4" />
            View in Browser
          </a>
        </Button>
      </motion.div>
    </motion.section>
  )
}
