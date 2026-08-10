const prompt = {
  slug: "velvet-sky-prompt",

  title: "Velvet Sky Prompt",

  description:
    "Transform any image into a breathtaking cinematic scene with a soft, luxurious velvet-like sky while preserving the original subject, composition, and natural realism.",

  category: "Atmosphere",

  image: "/images/prompts/velvet-sky-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Preserve the uploaded image exactly. Keep the original sky, clouds, composition, subject, lighting direction, textures, and details unchanged. Regrade the existing sky into a cinematic dusky rose, coral, salmon, burgundy, mauve and deep plum palette. Shift highlights toward warm peach-coral and salmon, midtones toward dusty rose and muted coral, and cloud shadows toward deep plum, burgundy and subtle violet. Maintain natural tonal separation, realistic cloud detail, smooth gradients, controlled saturation, and cinematic contrast. Do not create or remove clouds, do not alter weather, fog, haze, ambience, lighting, exposure, subject, or background. Only change the colors of the existing sky. The result must look like the original photograph professionally color-graded, not re-generated.
`,
};

export default prompt;