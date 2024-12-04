"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import LoadingButton from "@/components/LoadingButton";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { promptSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";



export default function UserPrompt() {
    const [error, setError] = useState();
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(promptSchema),
        defaultValues: {
            userInput: "",
        },
    });

    const onSubmit = (data) => {
        startTransition(() => {
            console.log("Submitted:", data.userInput);
            form.reset();
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="relative flex items-center justify-center "
            >
                <FormField
                    control={form.control}
                    name="userInput"
                    render={({ field }) => (
                        <FormItem className="relative w-2/3">
                            <FormControl>
                                <Textarea
                                    placeholder="Write your message..."
                                    className={cn("pr-12 resize-none placeholder:text-lg text-lg")}
                                    style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }} 
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            {/* Button inside Textarea */}
                            <button
                                type="submit"
                                disabled={isPending}
                                className={`absolute bottom-5 right-2 p-2 rounded-full ${
                                    isPending
                                        ? "bg-gray-400 text-white"
                                        : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}
                            >
                                {isPending ? (
                                    <Loader2 className="mx-auto animate-spin"></Loader2> // Replace with a loader component if needed
                                ) : (
                                    <Send size={25} />
                                )}
                            </button>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
