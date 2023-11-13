export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-11-03";

export const dataset = assertValue(
  "production",
  "Missing environment variable: SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
  "3y3bpo8v",
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
);

export const token = assertValue(
  "skjWVxPdPfqXFMx8nYr5K5sSxdYH4g7uBfSJTCeCj4xICjO93aqrnZAevHpbUzOKx9VF2qNhp1ZuRrsYG9ErJ9cNnAPGbAqdIdMSTE2cJyc7rNk8iG05JAL67SyGHGpl7mEVAbeJ1JT8eKyoqlkQzfIElfHSv2EFAm1KVLOEuK8whvQh28l9",
  "Missing environment variable: SANITY_STUDIO_TOKEN"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
