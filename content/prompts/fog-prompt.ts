const prompt = {
  slug: "fog-prompt",

  title: "Fog Prompt",

  description:
    "Transform any photo into a premium ultra-realistic cinematic fog masterpiece while preserving the main subject perfectly.",

  category: "Atmospheric",

  image: "/images/prompts/fog-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Analyze the uploaded image with pixel-level precision and identify every subject, object, and background element. Preserve the entire image exactly as it is. Do NOT alter, regenerate, beautify, retouch, reconstruct, replace, sharpen, soften, or modify the face, facial features, skin texture, hairstyle, expression, body shape, pose, clothing, accessories, identity, camera angle, framing, perspective, composition, proportions, or any existing object. Every detected subject and object must remain 100% identical to the original photograph.
Transform only the atmosphere into an ultra-realistic cinematic fog scene. Add dense, natural volumetric fog that interacts realistically with the environment, gradually increasing in density with distance to create strong depth and atmospheric perspective. Allow the fog to softly wrap around trees, roads, buildings, mountains, vehicles, and landscape elements without covering or changing them.
Create a moody overcast sky with soft diffused lighting, muted colors, rich shadows, and subtle low-contrast cinematic tones. Enhance wet-looking roads, reflective surfaces, misty forests, distant fading scenery, and realistic moisture in the air. Maintain natural visibility around the main subject while allowing distant objects to disappear smoothly into the fog.
The fog must appear physically accurate with smooth depth transitions, soft gradients, and realistic light scattering. No fantasy elements, no artificial haze, no glowing effects, no surreal colors.
Produce a breathtaking ultra-realistic, high-end cinematic photograph with professional color grading, HDR dynamic range, natural textures, and 8K quality. The final result should look as if the image was captured on a cold, foggy morning using a professional full-frame camera, while preserving every original detail and the subject with absolute accuracy.
`,
};

export default prompt;