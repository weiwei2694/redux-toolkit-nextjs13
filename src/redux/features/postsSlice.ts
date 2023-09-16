import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/models/post.model";

interface InitialStateInterface {
	posts: Post[];
}

const initialState: InitialStateInterface = {
	posts: [
		{
			id: "1",
			title: "Redux Toolkit",
			description:
				"Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers. The Redux team recommends using Redux Toolkit anytime you need to use Redux.",
			createdAt: new Date(),
		},
	],
};

const posts = createSlice({
	name: "posts",
	initialState,
	reducers: {
		createPost: (state, action: PayloadAction<Post>) => {
			const newPost = action.payload;

			state.posts = [...state.posts, newPost];
		},
	},
});

export const { createPost } = posts.actions;
export default posts.reducer;
