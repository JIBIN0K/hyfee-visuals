const prompt = {
  slug: "comic-prompt",

  title: "Comic Prompt",

  description:
    "Transform any image into a premium comic-style masterpiece with bold outlines, vibrant colors, dynamic shading, and expressive illustrated details while preserving the main subject perfectly.",

  category: "Art Styles",

  image: "/images/prompts/comic-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Analyze the uploaded image first. Preserve the original subject, composition, perspective, architecture, landmarks, objects, proportions, camera angle, and overall layout exactly as they are. Do not replace, remove, or invent new elements. Transform only the visual style into a premium hand-drawn architectural illustration inspired by modern travel posters.
Create a highly detailed ink-and-pencil sketch with crisp black linework, fine cross-hatching, and expressive diagonal pencil strokes across the entire image. Add clean comic-style outlines while preserving realistic depth and accurate architectural details.
Render the sky in a vibrant azure blue with large fluffy white illustrated clouds outlined in black, subtle sketch texture, and dynamic diagonal shading lines flowing across the sky. Apply a watercolor-and-colored-pencil appearance with visible hand-drawn texture while keeping the building sharp and recognizable.
Maintain warm terracotta bricks, soft sandstone, and neutral gray roofs with rich but natural colors. Keep windows reflective and clean. Add subtle paper grain and traditional sketchbook texture throughout the image. Increase local contrast and clarity while avoiding an AI-generated appearance.
The final result should look like a professionally hand-illustrated travel postcard or architectural concept artwork—clean, vibrant, artistic, and believable. Preserve 100% of the original image content and composition; only change the rendering style. No text, logos, watermarks, extra objects, or fantasy elements. High resolution, ultra-detailed, print-quality.
`,
};

export default prompt;