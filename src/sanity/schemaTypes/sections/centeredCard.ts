import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";

import { AlignVerticalSpaceAround } from "lucide-react";

export default defineType({
  name: "centeredCard",
  title: "Centered Card",
  type: "object",
  icon: AlignVerticalSpaceAround,
  groups: [
    { title: "Content", name: "content" },
    { title: "Design", name: "design" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "blockSimple",
      group:'content'
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "blockSimple",
      group:'content'
    }),
    defineField({
      name: "card",
      title: "Content Card",
      type: "contentCard",
      group:'content'
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "blockSimple",
      group:'content'
    }),
    defineField({
      name: "variation",
      title: "Variation",
      type: "string",
      initialValue: "white",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Offwhite", value: "offwhite" },
          { title: "Lavander", value: "lavander" },
          { title: "Gradient", value: "gradient" },
          { title: "Dark", value: "dark" },
          { title: "Pattern", value: "pattern" },
          { title: "Background Image", value: "image" },
        ],
      },
      group:'design'
    }),
    defineField({
      name: "bgImage",
      title: "Background Image",
      type: "image",
      hidden: ({ parent }) => parent?.variation !== "image",
      group:'design'
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: stringFromPortableText(title) || "Centered Cards Section Title",
        subtitle: "Centered Card Section",
      };
    },
  },
});
