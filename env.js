import { env as loadEnv } from "custom-env";
import z, { ZodError } from "zod";

process.env.APP_STAGE = process.env.APP_STAGE || "dev";
const isProduction = process.env.APP_STAGE === "production";
const isDevelopment = process.env.APP_STAGE === "dev";
const isTesting = process.env.APP_STAGE === "test";

if (isDevelopment) {
  loadEnv();
} else if (isTesting) {
  loadEnv("test");
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  APP_STAGE: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().positive().default(7000),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be 32 characters long"),
  JWT_EXPIRES_IN: z.string().default("7d"),
  SALT_ROUNDS: z.coerce.number().min(10).max(20),
});
/** @type {import("zod").infer<typeof envSchema>} */
let env;
try {
  env = envSchema.parse(process.env);
} catch (e) {
  if (e instanceof ZodError) {
    console.error("Invalid environment variables");
    console.error(JSON.stringify(z.flattenError(e).fieldErrors, null, 2));

    e.issues.forEach((issue) => {
      const path = issue.path.join(".");
      console.log(`${path}: ${issue.message}`);
    });

    process.exit(1);
  }

  throw e;
}

export const isProd = env.APP_STAGE === "production";
export const isDev = env.APP_STAGE === "dev";
export const isTest = env.APP_STAGE === "test";

export default env;
