const prompt = {
  slug: "golden-sunset",

  title: "Golden Sunset",

  description:
    "Transform any photo into a premium ultra-realistic Golden Sunset masterpiece while preserving the main subject perfectly.",

  category: "Creative Effects",

  image: "/images/prompts/golden-sunset.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Transform the uploaded beach photograph into a premium ultra-realistic golden sunset masterpiece while preserving the main subject 100% unchanged. Automatically detect and isolate the subject with precise AI segmentation and intelligent edge masking. Preserve the subject's identity, body proportions, hairstyle, clothing, accessories, pose, walking direction, and all fine details exactly as in the original image. Do not alter, replace, reshape, or stylize the subject in any way.
Replace only the environment and lighting to match a breathtaking golden-hour sunset scene. Convert the dull or overcast sky into a vibrant warm sunset with rich golden-orange, amber, and soft peach gradients. Position the glowing sun naturally above the ocean horizon so its reflection forms a bright golden path across the water leading toward the subject.
Enhance the ocean with realistic cinematic waves, soft foam, detailed water textures, and natural reflections. Transform the wet sand into a glossy mirror-like surface reflecting the sunset colors and the subject naturally. Add subtle cloud formations illuminated by warm sunlight while maintaining a realistic atmosphere.
Apply professional cinematic color grading with warm golden highlights, balanced HDR, realistic shadows, soft global illumination, volumetric sunlight, gentle atmospheric haze, and DSLR-quality dynamic range. Preserve natural perspective, horizon alignment, lens compression, and lighting consistency.
Ensure the final image looks as though it was genuinely captured during a spectacular sunset at the same beach, with the subject seamlessly integrated into the new lighting. Produce an ultra-realistic, photorealistic, high-detail, 8K-quality image with crisp textures, natural reflections, premium composition, and zero artifacts, while keeping the original subject perfectly recognizable and unchanged.
`,
};

export default prompt;