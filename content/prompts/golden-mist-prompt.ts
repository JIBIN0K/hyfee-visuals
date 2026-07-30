const prompt = {
  slug: "golden-mist-prompt",

  title: "Golden Mist Prompt",

  description:
    "Transform any image into a premium ultra-realistic golden mist masterpiece with warm golden light, soft atmospheric fog, and cinematic depth while preserving the main subject perfectly.",

  category: "Atmospheric",

  image: "/images/prompts/golden-mist-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Transform the uploaded image into an ultra-photorealistic cinematic outdoor portrait while keeping the subject completely unchanged. Preserve the original face, identity, facial features, hairstyle, expression, pose, clothing, body proportions, camera angle, framing, and overall composition exactly as in the source image. Do not regenerate, beautify, or alter the subject in any way.

Surround the scene with a tranquil natural environment filled with dense layered mist and soft drifting fog, creating rich atmospheric depth and a calm, emotional mood. Introduce delicate warm sunlight from a low evening sun, gently streaming through the trees from behind the subject. The golden backlight should blend naturally with the cool green surroundings, remaining subtle and never overpowering the atmosphere.

Create the feeling of an overcast day immediately after light rainfall. The ground and grass should appear naturally damp, the air slightly humid, with soft diffused shadows, muted daylight, and gentle ambient illumination. Maintain a peaceful, mysterious, and melancholic cinematic ambience.

Apply sophisticated green-toned cinematic color grading with restrained saturation, realistic film-inspired colors, soft contrast, and smooth tonal transitions. Include subtle bloom, authentic volumetric fog, atmospheric perspective, and realistic environmental depth while preserving natural textures throughout the scene.

Render with highly realistic skin texture, physically accurate lighting, organic foliage details, cinematic depth of field, and a premium 35mm film aesthetic. Emulate the poetic visual language of Wong Kar-wai with understated Kodak Portra 400 color characteristics, editorial outdoor portrait styling, natural sunset rim lighting, soft haze diffusion, high dynamic range, realistic optical rendering, and timeless cinematic storytelling. The final image should feel like a genuine photograph captured in perfect natural conditions, avoiding any artificial, overprocessed, or AI-generated appearance.
`,
};

export default prompt;