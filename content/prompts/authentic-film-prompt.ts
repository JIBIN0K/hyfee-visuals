const prompt = {
  slug: "authentic-film-prompt",

  title: "Authentic Film Prompt",

  description:
    "Transform any image into an authentic professionally shot film photograph with natural analog character, realistic grain, cinematic tones, soft highlights, and timeless photographic depth while preserving the original subject and composition.",

  category: "Film Photography",

  image: "/images/prompts/authentic-film-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Analyze the uploaded photograph carefully before editing. Identify the subject, environment, lighting, colors, composition, depth, mood, textures, and overall visual character.
Transform the image into a high-end, Instagram-ready editorial photograph while preserving the original subject, identity, composition, perspective, important details, and natural realism.
Automatically select the most suitable film/grain aesthetic for this specific photograph rather than applying the same look to every image. Choose between subtle analog film grain, fine Kodak-style grain, soft cinematic grain, nostalgic 35mm grain, dreamy fine grain, documentary grain, or slightly heavier artistic grain depending on the image, subject, lighting, and mood.
Apply:
Natural, refined cinematic color grading
Beautiful but realistic skin tones when people are present
Controlled highlights and rich but natural shadows
Soft tonal transitions
Slightly muted, sophisticated colors where appropriate
Natural-looking contrast and dynamic range
Subtle film halation and gentle highlight roll-off when suitable
Authentic analog texture without making the image look artificially noisy
Fine, organic grain that feels intentional and premium
Realistic micro-contrast and preserved photographic detail
Subtle depth and atmosphere enhancement
A polished editorial/photography-magazine finish
Adapt the color palette to the image: warm earthy tones for portraits and lifestyle scenes, muted greens and warm highlights for nature, cooler cinematic tones for urban/night scenes, soft pastel tones for bright or dreamy images, and richer contrast for dramatic subjects.
The final result should feel like a professionally color-graded photograph captured on a premium film camera, with the kind of authentic grain, texture, color and mood commonly seen in high-performing contemporary Instagram photography.
Do not overprocess the image. Do not add fake objects, excessive sharpening, extreme HDR, plastic skin, artificial blur, excessive saturation, or unrealistic colors. Do not change the subject's identity or essential details.
Priority: authenticity → subject preservation → beautiful composition → natural color → appropriate film character → tasteful grain.
Make the grain and color treatment specific to the uploaded photograph, so every image receives its own visually appropriate Instagram-worthy film aesthetic.
`,
};

export default prompt;