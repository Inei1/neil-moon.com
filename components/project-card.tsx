import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import Link from 'next/link'
interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    githubUrl?: string
    liveUrl?: string
    imageUrl?: string
    featured?: boolean
}
export function ProjectCard({
    title,
    description,
    tags,
    githubUrl,
    liveUrl,
    imageUrl,
    featured = false
}: ProjectCardProps) {
    return (
        <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${featured ? 'ring-2 ring-accent/20' : ''}`}>
            {imageUrl && (
                <div className="aspect-video overflow-hidden bg-muted/20">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            )}

            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                    {featured && (
                        <Badge variant="secondary" className="text-xs">
                            Featured
                        </Badge>
                    )}
                </div>
                <CardDescription className="text-sm leading-relaxed">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="pt-0">
                <div className="flex gap-2 w-full">
                    {githubUrl && (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                                <Icons.github className="h-4 w-4 mr-1" />
                                Code
                            </Link>
                        </Button>
                    )}
                    {liveUrl && (
                        <Button asChild size="sm" className="flex-1">
                            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                                <Icons.externalLink className="h-4 w-4 mr-1" />
                                Live
                            </Link>
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}