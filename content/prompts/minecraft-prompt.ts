const prompt = {
  slug: "minecraft-prompt",

  title: "Minecraft Prompt",

  description:
    "Transform any image into a premium Minecraft-inspired world while preserving the main subject with recognizable details and iconic block-style aesthetics.",

  category: "Creative Effects",

  image: "/images/prompts/minecraft-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Analyze the uploaded image with pixel-level precision. Preserve the main subject exactly as it is. Do NOT alter, regenerate, replace, beautify, reshape, or modify the person's face, facial features, hairstyle, expression, body proportions, clothing, pose, identity, or camera perspective. The subject must remain 100% identical and instantly recognizable.

Transform only the environment into an authentic Minecraft-inspired world while preserving the exact real-world layout of the original image. Every background element—including buildings, roads, trees, mountains, grass, sky, water, vehicles, furniture, walls, pathways, and terrain—must remain in its original position, scale, perspective, and spatial relationship. Do not move, add, remove, or rearrange any object.

Recreate every environmental element as if it were naturally built inside Minecraft using recognizable voxel blocks, pixelated textures, cubic geometry, Minecraft lighting, and authentic biome aesthetics. The transformation must follow the original scene perfectly, with every object correctly aligned and stacked block-by-block according to the real image. Maintain accurate depth, perspective, shadows, and composition.

The final result should look like the original photograph has seamlessly transitioned into the Minecraft universe, while the subject remains completely unchanged and photorealistic, creating a convincing blend of a real person inside an authentic Minecraft environment.
`,
};

export default prompt;