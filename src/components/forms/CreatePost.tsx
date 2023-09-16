"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { postForm } from "@/lib/validations/post.validations";
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

import { createPost } from "@/redux/features/postsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { Label } from "../ui/label";

const CreatePost = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const form = useForm<z.infer<typeof postForm>>({
        resolver: zodResolver(postForm),
        defaultValues: {
            id: new Date().getTime().toString(),
            title: "",
            description: "",
            createdAt: new Date(),
        },
    })

    function onSubmit(values: z.infer<typeof postForm>) {
        try {
            dispatch(createPost(values));

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const isLoading = form.formState.isSubmitting;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <Label>Title</Label>
                            <FormControl>
                                <Input disabled={isLoading} className="no-focus" placeholder="Typescript" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <Label>Description</Label>
                            <FormControl>
                                <Textarea disabled={isLoading} className="no-focus border-none outline-none" rows={8} placeholder="TypeScript is JavaScript with syntax for types." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={isLoading} type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default CreatePost