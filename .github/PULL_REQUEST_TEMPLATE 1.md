## Vulnerability fixed

Outdated dependency with known CVE

## Where was it?

In "package.json" on line 14

## Why is it dangerous?

Vite 5.1.0 has known security vulnerabilities (CVEs) that attackers can exploit. Outdated dependencies are a common attack vector because:
- Known vulnerabilities are publicly documented in CVE databases
- Attackers actively scan GitHub for projects using vulnerable versions
- Exploits are often available online with step-by-step instructions
- One vulnerability can compromise the entire application and user data

## How did you fix it?

Updated Vite from `~5.1.0` to `^5.4.11`

**Changes made:**
- Changed version constraint from `~` (patch updates only) to `^` (allows minor and patch updates)
- Updated to version 5.4.11 which includes all security patches
- Updated package-lock.json with new dependency tree

This patches all known CVEs in the 5.1.x version line and allows automatic future security updates.

## Screenshots (optional)

N/A - dependency update

## Checklist

- [x] Tested the fix locally with `npm run dev`
- [x] Commit message clearly describes the security fix
