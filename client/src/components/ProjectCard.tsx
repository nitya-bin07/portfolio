import { motion } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { fadeInUp } from '@/animations/variants'
import type { Project } from '@/types/project'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="flex h-full flex-col transition-colors hover:border-accent-muted">
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="text-accent">→</span>
                {point}
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex gap-3">
          {project.liveUrl && (
            <Button asChild size="sm">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            </Button>
          )}
          <Button asChild size="sm" variant="outline">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Code2 className="size-4" />
              Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
