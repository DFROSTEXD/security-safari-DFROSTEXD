## Vulnerability fixed

Hardcoded secret in source code

## Where was it?

`src/config.js` line 3 - API key hardcoded in the source code

## Why is it dangerous?

The API key `"sk_live_abc123_not_real_but_looks_real"` was hardcoded directly in the source code. This is dangerous because:
- Anyone who views the code (on GitHub, in git history, or clones the repo) can steal the API key
- The secret is permanently stored in git history, even if deleted later
- Attackers can use the stolen key to impersonate the application, access resources, or cause financial damage
- If the repository is public, the key is exposed to the entire internet

Hardcoded secrets are one of the most common and dangerous security mistakes.

## How did you fix it?

Replaced the hardcoded API key with environment variables.

**Changes made:**
- Changed `API_KEY = "sk_live_abc123..."` to `API_KEY = import.meta.env.VITE_API_KEY || ""`
- The API key is now read from a `.env` file that is NOT committed to git
- `.env` is already in `.gitignore` to prevent accidental commits
- `.env.example` provides a template for developers without exposing the actual secret

**How it works:**
1. Developers create their own `.env` file locally with their API key
2. The code reads from the environment variable at runtime
3. No secrets are stored in source code or git history
4. Each environment (dev, staging, production) can use different keys

This follows industry best practices for secret management.

## Screenshots (optional)

N/A - code change only

## Checklist

- [x] Tested the fix locally with `npm run dev`
- [x] Commit message clearly describes the security fix
