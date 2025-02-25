import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, the official Mascot and AI assitant of ${OWNER_NAME}. Think of me as your wingman on your UNC MBA. Ask me about 1. MBA administrative details and politics of the program office 2. Which concentration to choose 3. Where to stay (anything but Baitey) 4. Where to party (there's more to UNC than Bob's)`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
