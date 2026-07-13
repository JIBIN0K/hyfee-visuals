const prompt = {
  slug: "rest-and-gold-prompt",

  title: "Rest & Gold Prompt",

  description:
    "Transform any image into a premium ultra-realistic rest and gold masterpiece while preserving the main subject perfectly.",

  category: "Creative Effects",

  image: "/images/prompts/rest-and-gold-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Analyze the uploaded image with pixel-level precision before making any changes.

PRIMARY RULE — ABSOLUTE SUBJECT PRESERVATION

The uploaded image is the only source of truth. Preserve every detected subject with complete identity accuracy. Do NOT regenerate, replace, beautify, reinterpret, or modify any person's face, eyes, eyebrows, eyelashes, nose, lips, ears, teeth, skin texture, skin tone, hairstyle, hairline, facial hair, expression, age, body proportions, pose, clothing, accessories, jewelry, or identity. The subject must remain 100% identical and instantly recognizable.

If there are multiple people, preserve every individual exactly as they appear. If the image contains animals, vehicles, buildings, landscapes, or objects, preserve their shapes, textures, positions, and proportions exactly.

Keep the original camera angle, framing, perspective, focal length, composition, crop, depth of field, and lighting direction unchanged. Do not add, remove, or reposition any object or person.

TASK

Apply ONLY a premium cinematic vintage color grade to the entire image while preserving every pixel of the original scene.

Create a timeless film-inspired look featuring:

Warm golden highlights

Soft amber and honey midtones

Slightly faded blacks with gentle matte contrast

Rich earthy browns and muted olive greens

Slightly desaturated blues

Warm skin tones without altering natural complexion

Soft highlight roll-off

Smooth tonal transitions

Authentic analog film character

Fine natural film grain

Gentle bloom around bright areas

Balanced contrast with preserved shadow detail

High dynamic range appearance

Premium editorial color science


Do NOT:

Change facial features

Retouch skin

Sharpen or soften faces differently

Alter clothing colors unnaturally

Add fog, haze, sun rays, dust, smoke, light leaks, lens flare, bokeh, glow, or extra visual effects

Replace or regenerate backgrounds

Change weather or time of day


The only transformation allowed is professional vintage cinematic color grading. The output must look like the exact original photograph professionally color graded by an expert film colorist, while maintaining perfect realism, maximum facial accuracy, and the exact identity of every subject.

Output should be ultra-high-resolution, photorealistic, natural, and indistinguishable from a professionally color-graded RAW photograph.
`,
};

export default prompt;