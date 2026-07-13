import fluidPixelStretch from "./fluid-pixel-stretch";
import mistyPrompt from "./misty-prompt";
import goldenSunset from "./golden-sunset";
import luminaPrompt from "./lumina-prompt";
import monsoonPrompt from "./monsoon-prompt";
import fogPrompt from "./fog-prompt";
import minecraftPrompt from "./minecraft-prompt";
import restAndGoldPrompt from "./rest-and-gold-prompt";

export const prompts = [
    fluidPixelStretch,
    mistyPrompt,
    goldenSunset,
    luminaPrompt,
    monsoonPrompt,
    fogPrompt,
    minecraftPrompt,
    restAndGoldPrompt,
];

export function getPromptBySlug(slug: string) {
  return prompts.find((prompt) => prompt.slug === slug);
}