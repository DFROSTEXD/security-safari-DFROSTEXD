# Reflection

Answer each question in 2-3 sentences.

## Most surprising discovery

Which vulnerability surprised you the most to find? Why didn't you expect it?

The secret in git history surprised me the most. I assumed that once a file was deleted, it was gone forever. Learning that git stores every version of every file permanently was eye-opening - even deleted secrets remain accessible to anyone who knows how to look. This made me realize that "undo" doesn't exist in git history without actively rewriting it.

## Real-world risk

Pick one vulnerability you found. How would you explain its danger to a teammate who's never heard of it?

The eval() vulnerability is like giving a stranger complete control of your computer. When you use eval() with user input, an attacker can type ANY JavaScript code and your app will execute it - they can steal user data, redirect to malicious sites, or completely take over the application. It's not just a bug; it's handing over the keys to your entire system.

## Future practice

What specific habit or check will you add to your own coding workflow to catch these issues before they ship?

I will run npm audit regularly to catch outdated dependencies, never commit .env files by checking git status before every commit, always use textContent instead of innerHTML when displaying user input, avoid eval() entirely, and use environment variables for all secrets. I'll also set up pre-commit hooks to scan for secrets and run security linters automatically.
