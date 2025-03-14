import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";
import { ListCollapse } from "lucide-react";

export default defineType({
  name: "featuredList2",
  title: "Featured List 2",
  type: "object",
  icon: ListCollapse,
  groups: [
    {
      name: "card",
      title: "Card",
    },
    {
      name: "content",
      title: "Content",
    },
    {
      name: "design",
      title: "Design",
    },
  ],

  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "blockSimple",
      group: "content",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "blockSimple",
      group: "content",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "simpleBlockContent",
      group: "content",
    }),
    defineField({
      name: "ctaLink",
      title: "Link",
      type: "link",
      group: "content",
    }),

    defineField({
      name: "variation",
      title: "Variation",
      description:
        "Variation of the section. Mainly influences the color scheme.",
      type: "string",
      initialValue: "white",
      group: "design",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Offwhite", value: "offwhite" },
          { title: "Lavander", value: "lavander" },
          { title: "Gradient", value: "gradient" },
          { title: "Dark", value: "dark" },
          { title: "Image", value: "image" },
        ],
      },
    }),
    defineField({
      name: "bgImage",
      title: "Background Image",
      type: "image",
      group: "design",
      hidden: ({ parent }) => parent?.variation !== "image",
    }),
    defineField({
      name: "pattern",
      title: "Pattern",
      type: "boolean",
      group: "design",
      hidden: ({ parent }) =>
        parent?.variation === "image",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Card - Text", value: "cardText" },
          { title: "Text - Card", value: "textCard" },
        ],
      },
      initialValue: "cardText",
      group: "design",
    }),

    defineField({
      name: "cardVariation",
      title: "Card Variation",
      type: "string",
      options: {
        list: ["card1", "card2", "card3", "card4", 'card5'],
      },
      group: "card",
    }),
    defineField({
      name: "cardTitle",
      title: "Card Title",
      type: "string",
      group: "card",
      hidden: ({ parent }) => parent?.cardVariation === "card2" || parent?.cardVariation === "card5",
    }),
    defineField({
      name: "list",
      title: "Card List",
      type: "array",
      of: [{ type: "simpleListItem" }],
      hidden: ({ parent }) => parent?.cardVariation === "card2" || parent?.cardVariation === "card5",
      group: "card",
    }),

    defineField({
      name: "cardCTA",
      title: "Card CTA",
      type: "blockSimple",
      hidden: ({ parent }) => parent?.cardVariation === "card2" || parent?.cardVariation === "card5",
      group: "card",
    }),
    defineField({
      name: 'hideLink',
      title: "Hide Link",
      type: "boolean",
      group: "card",
    }),
    defineField({
      name: "cardLink",
      title: "Link",
      type: "link",
      group: "card",
    }),

    defineField({
      name: "card2Content",
      title: "Card Content",
      type: "array",
      of: [{ type: "listItem" }],
      hidden: ({ parent }) => parent?.cardVariation !== "card2" || parent?.cardVariation === "card5",
      group: "card",
    }),
    defineField({
      name: "card5Content",
      title: "Card Content",
      type: "blockContent",
      hidden: ({ parent }) => parent?.cardVariation !== "card5",
      group: "card",
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
        title: stringFromPortableText(title) || "Featured List 2 Section Title",
        subtitle: "Featured List 2 Section",
      };
    },
  },
});
