import fluidPixelStretch from "./fluid-pixel-stretch";
import mistyPrompt from "./misty-prompt";
import goldenSunset from "./golden-sunset";
import luminaPrompt from "./lumina-prompt";
import monsoonPrompt from "./monsoon-prompt";
import fogPrompt from "./fog-prompt";
import minecraftPrompt from "./minecraft-prompt";
import restAndGoldPrompt from "./rest-and-gold-prompt";
import animePrompt from "./anime-prompt";
import goldenMistPrompt from "./golden-mist-prompt";

export const prompts = [
    fluidPixelStretch,
    mistyPrompt,
    goldenSunset,
    luminaPrompt,
    monsoonPrompt,
    fogPrompt,
    minecraftPrompt,
    restAndGoldPrompt,
    animePrompt,
    goldenMistPrompt,
];

export function getPromptBySlug(slug: string) {
  return prompts.find((prompt) => prompt.slug === slug);
}