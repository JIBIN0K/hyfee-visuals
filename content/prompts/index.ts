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
import moonlitFogPrompt from "./moonlit-fog-prompt";
import forestWhisperPrompt from "./forest-whisper-prompt";
import monsoonForestGradePrompt from "./monsoon-forest-grade-prompt";
import comicPrompt from "./comic-prompt";
import lostPrompt from "./lost-prompt";
import abandonedPrompt from "./abandoned-prompt";
import velvetSkyPrompt from "./velvet-sky-prompt";

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
    moonlitFogPrompt,
    forestWhisperPrompt,
    monsoonForestGradePrompt,
    comicPrompt,
    lostPrompt,
    abandonedPrompt,
    velvetSkyPrompt,
];

export function getPromptBySlug(slug: string) {
  return prompts.find((prompt) => prompt.slug === slug);
}