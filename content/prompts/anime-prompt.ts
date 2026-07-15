const prompt = {
  slug: "anime-prompt",

  title: "Anime Prompt",

  description:
    "Transform any image into a premium ultra-detailed anime masterpiece while preserving the subject's identity, expression, pose, and overall composition.",

  category: "Art Styles",

  image: "/images/prompts/anime-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Analyze the uploaded image with pixel-level precision. Preserve the main subject exactly as it is. Do NOT alter, regenerate, replace, beautify, reshape, or modify the subject's face, facial features, hairstyle, expression, body proportions, clothing, accessories, pose, identity, or camera perspective. The subject must remain 100% identical and instantly recognizable.

Transform only the visual style of the entire scene into a premium, hand-painted cinematic anime aesthetic while preserving the exact real-world layout of the original image. Every background element—including buildings, roads, trees, mountains, grass, sky, water, vehicles, furniture, walls, pathways, and terrain—must remain in its original position, scale, perspective, and spatial relationship. Do not move, add, remove, or rearrange any object.

Recreate every environmental element as if it were illustrated by a world-class anime studio using beautifully hand-painted backgrounds, vibrant yet natural colors, soft cinematic lighting, detailed textures, expressive clouds, atmospheric depth, and subtle painterly brushwork. Maintain the original composition, camera angle, depth, shadows, and lighting direction exactly as in the uploaded image.

The subject must remain perfectly aligned with the transformed environment, retaining the exact pose, proportions, clothing details, and identity while being rendered in the same high-end anime style. Preserve every fine detail so the subject remains instantly recognizable.

The final result should look like the original photograph has seamlessly transformed into a breathtaking, feature-film-quality anime frame, with perfect realism in composition, flawless subject preservation, and a natural blend between the character and the anime environment.
`,
};

export default prompt;