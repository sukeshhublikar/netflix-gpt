import { OPENAI_KEY } from "@/services/constant";
import OpenAI from "openai";

const openaiClient = new OpenAI({
  apiKey: `Bearer ${OPENAI_KEY}`,
  organization: "org-FLEoQCIORpgSWMx04qrbM2Om",
  dangerouslyAllowBrowser: true,
});
export default openaiClient;
