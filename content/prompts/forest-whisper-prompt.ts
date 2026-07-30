const prompt = {
  slug: "forest-whisper-prompt",

  title: "Forest Whisper Prompt",

  description:
    "Transform any image into a premium ultra-realistic forest masterpiece with lush greenery, soft light rays, gentle atmospheric mist, and a tranquil woodland ambience while preserving the main subject perfectly.",

  category: "Atmospheric",

  image: "/images/prompts/forest-whisper-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Use the uploaded image as the only reference. Maintain the person's identity with complete accuracy. Do not modify, regenerate, or enhance the face, facial features, skin tone, hairstyle, expression, body proportions, clothing, or overall appearance in any way.
Apply only environmental and photographic refinements to the existing image. Create a realistic cinematic atmosphere with soft natural fog, gentle ambient mist, and rich forest-inspired green color grading. Preserve the original composition and scene exactly as captured—do not add, remove, replace, or reposition any people, objects, or background elements.
Increase image quality through subtle improvements to sharpness, fine detail, dynamic range, lighting, contrast, and overall clarity while maintaining a natural DSLR-quality look. Keep the edit photorealistic and professional, avoiding beauty filters, skin smoothing, face retouching, or any changes that could alter the subject's identity.
`,
};

export default prompt;