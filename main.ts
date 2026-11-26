import * as fs from "node:fs";

// A dad joke for the Groan-Off: the suitcase hears "no holiday" and takes
// "emotional baggage" literally, so it keeps lugging the feelings around.
// One line, one pun, punchline at the end, ready to groan at out loud.
const entry = "I told my suitcase there'd be no holiday this year. It's still carrying the emotional baggage.";

function emit(text) {
  const targets = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
  for (const dir of targets) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dir + "/entry.txt", text);
    } catch {
      // A missing or read-only target must not stop the other one.
    }
  }
}

emit(entry);