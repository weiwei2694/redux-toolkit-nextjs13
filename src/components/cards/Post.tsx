"use client";
import { Post } from "@/models/post.model";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Calendar } from "lucide-react"

const Post = ({ id, title, description, createdAt }: Post) => {
    return (
        <Card className="break-inside-avoid">
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardDescription className="whitespace-break-spaces">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <p className="text-muted-foreground text-sm flex items-center">
                    <Calendar size="14px" className="w-4 h-4 mr-2" />
                    {new Date(createdAt).toLocaleDateString()}
                </p>
            </CardFooter>
        </Card>
    )
}

export default Post