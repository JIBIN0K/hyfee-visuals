const prompt = {
  slug: "monsoon-prompt",

  title: "Monsoon Prompt",

  description:
    "Transform any photo into a premium ultra-realistic cinematic monsoon masterpiece while preserving the main subject perfectly.",

  category: "Atmospheric",

  image: "/images/prompts/monsoon-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Transform the uploaded photograph using only professional cinematic color grading while preserving the original image with absolute pixel-level accuracy. The subject must remain 100% identical to the uploaded photograph. Do NOT alter, regenerate, beautify, or modify the face, facial features, hairstyle, skin texture, skin tone, clothing, accessories, body proportions, pose, posture, identity, camera angle, framing, perspective, or background composition in any way.
Apply a premium ultra-realistic cinematic grade inspired by high-end editorial photography. Slightly reduce overall exposure while preserving shadow detail. Lower highlights for a soft natural roll-off and deepen blacks without crushing texture. Introduce rich emerald and deep forest green tones by subtly shifting yellow-greens toward cooler natural greens. Reduce oversaturation while maintaining realistic foliage colors. Add gentle cool shadows with slightly warm midtones for natural color separation. Increase local contrast and fine texture, improve micro-detail, and enhance depth without creating halos or artificial sharpening.
Introduce soft atmospheric haze only in distant areas to increase depth perception while keeping the foreground crisp. Preserve natural skin tones exactly. Enhance wet surfaces with subtle realistic reflections and richer tonal depth when present. Maintain realistic lighting direction, weather conditions, and environmental mood. Produce a clean, premium, ultra-realistic cinematic finish with a filmic dynamic range, natural color science, realistic textures, and zero HDR artifacts.
The result should look like a professionally color-graded RAW photograph captured on a high-end full-frame cinema camera, not AI-generated. Preserve every object, every detail, and the complete identity of the original image while changing only the color grading and tonal rendering.
`,
};

export default prompt;