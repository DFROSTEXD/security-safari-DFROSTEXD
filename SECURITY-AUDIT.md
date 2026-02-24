# Security Audit - Git History Secret

## Vulnerability Found

A secret was found in git commit history at commit `1630a0d`.

## Details

- **Commit:** 1630a0d ("Add environment config")
- **File:** .env
- **Secret:** API_KEY=sk_live_real_secret_oops
- **Status:** File was deleted in commit c401615, but secret remains in git history

## Discovery Method

```bash
git log --oneline
git show 1630a0d:.env
```

## Remediation

In a production scenario, this would require:
1. Immediate revocation of the exposed API key
2. Git history rewriting using git-filter-repo or BFG Repo-Cleaner
3. Force push to all remotes
4. All team members must re-clone the repository

## Prevention

- Always check .gitignore before committing
- Use pre-commit hooks to scan for secrets
- Never commit .env files
- Use secret scanning tools like git-secrets or gitleaks
