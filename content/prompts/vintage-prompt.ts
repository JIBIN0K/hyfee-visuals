const prompt = {
  slug: "vintage-prompt",

  title: "Vintage Prompt",

  description:
    "Transform any image into a timeless cinematic vintage photograph with authentic film grain, nostalgic colors, soft tones, and classic analog character while preserving the original subject and composition.",

  category: "Cinematic",

  image: "/images/prompts/vintage-prompt.jpg",

  models: [
    "ChatGPT",
    "GPT Image",
    "Gemini",
    "Flux",
    "Midjourney",
    "Kling",
  ],

  prompt: `
Transform the image into a refined, nostalgic analogue photograph with a soft Kodak Portra-inspired color palette. Create a gentle warm-beige atmosphere with creamy ivory highlights, subdued greens, and delicate pastel colors. Keep the clothing naturally soft and creamy while giving the grass a restrained, earthy muted-green appearance.
Introduce a subtle golden-hour luminosity with a diffused white-golden glow, atmospheric softness, and a light veil of haze around highlights. Keep the lighting gentle and low contrast, with smooth highlight roll-off, lifted blacks, and soft matte shadows. Slightly desaturate the overall palette while retaining natural skin tones and realistic color separation.
Add fine, organic film grain and delicate analogue texture without making the image look artificially noisy. Preserve natural details, realistic textures, and accurate subject appearance. Create creamy, smooth background separation with an elegant shallow-depth-of-field character and soft circular bokeh.
The final image should feel like a premium professional film photograph captured during a warm romantic golden hour — understated, dreamy, intimate, and timeless rather than heavily stylized.
Ultra-realistic DSLR photography, 85mm portrait lens aesthetic, f/1.8 depth of field, high dynamic range, natural skin texture, refined tonal transitions, realistic optical rendering, subtle film halation, soft atmospheric depth, premium analogue photography, highly detailed 4K finish.
`,

};

export default prompt;