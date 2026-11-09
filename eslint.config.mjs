import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const config = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [".next/**", "out/**", "node_modules/**", ".tmp/**", "next-env.d.ts"],
  },
  {
    // shadcn's carousel syncs its derived button state from the Embla api in an
    // effect — a one-shot read of an external store after mount. The rule stays
    // on for every other file.
    files: ["components/ui/carousel.tsx"],
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
]

export default config
