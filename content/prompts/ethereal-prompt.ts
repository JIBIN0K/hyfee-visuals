const prompt = {
  slug: "ethereal-prompt",

  title: "Ethereal Prompt",

  description:
    "Transform any image into a breathtaking ethereal cinematic masterpiece with dreamy atmosphere, luminous light, soft haze, magical depth, and premium photorealistic detail while preserving the original subject and composition.",

  category: "Atmosphere",

  image: "/images/prompts/ethereal-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Transform the uploaded photograph into a rich, natural, ultra-realistic cinematic outdoor photograph with a premium iPhone 16 Pro Smart HDR look.

PRESERVE THE ORIGINAL IMAGE EXACTLY. Do not change, regenerate, replace, remove, add, reconstruct, or redesign any subject, object, streetlight, structure, composition, framing, perspective, proportions, or important details. Keep the original photograph completely recognizable and authentic. Apply ONLY color grading, tonal enhancement, atmospheric refinement, and photographic finishing.

Create a clean, luminous natural color grade with a deep, rich blue sky, subtle cyan-blue transitions, soft warm golden-hour light near the horizon, and delicate natural white clouds. Give the sky beautiful tonal depth and realistic atmospheric separation without making it overly saturated or artificial. Keep whites neutral and highlights warm but controlled, avoiding excessive orange, yellow, or cyan casts.

Enhance dynamic range, highlight recovery, shadow detail, local contrast, micro-contrast, texture, and fine details to resemble the computational photography of an iPhone 16 Pro Smart HDR photograph. Preserve realistic exposure and natural tonal transitions, with crisp but refined details and clean atmospheric depth.

Add a subtle cinematic sunrise atmosphere: gentle warm light interacting naturally with the cool blue sky, soft luminous highlights, delicate atmospheric haze, slightly lifted neutral shadows, and a refined sense of depth. If greenery or natural elements are present, enhance them with deep natural greens and muted olive tones while keeping them realistic and never oversaturated.

Create a sophisticated, immersive, timeless epic-adventure feeling while remaining completely photorealistic. The final image should feel like a genuine high-end sunrise photograph captured with a professional camera or modern flagship smartphone—not AI-generated artwork, fantasy illustration, CGI, or an exaggerated HDR image.

Maintain natural colors, realistic contrast, authentic textures, subtle filmic depth, clean highlights, controlled blacks, and a polished cinematic finish. No artificial objects, no dramatic reconstruction, no excessive glow, no heavy orange/yellow grading, no oversharpening, no plastic textures, and no surreal effects.
`,
};

export default prompt;