import * as z from "zod";

export const postForm = z.object({
	id: z.string(),
	title: z
		.string()
		.min(19, {
			message: "Minimum 19 characters",
		})
		.max(99, {
			message: "Maximum 99 characters",
		}),
	description: z
		.string()
		.min(1, {
			message: "Description Required",
		})
		.max(499, {
			message: "Maximum 499 characters",
		}),
	createdAt: z.date(),
});
