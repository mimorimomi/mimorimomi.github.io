import { defineCollection, z } from "astro:content";

const readBooks = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    finishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "finishedAt: 有効な日付を yyyy-mm-dd 形式で入力してください",
    }),
    isbn: z.string(),
    title: z.string(),
    url: z.string().url(),
  }),
});

const unreadBooks = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    isbn: z.string(),
    title: z.string(),
    url: z.string().url(),
  }),
});

export const collections = {
  "books/read": readBooks,
  "books/unread": unreadBooks,
};
