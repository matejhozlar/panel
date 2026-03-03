## Architecture

### Commits & Pushing

- Commit message format: `type(scope): description`
  - Types: `feat`, `fix`, `chore`, `refactor`
  - Scopes: packages eg. `server`, `client`,... (omit scope only if the change spans multiple packages)
  - Description: lowercase, imperative, no period at the end
  - Examples: `feat(server): add admin waitlist routes`, `chore(server): dump schema`, `refactor(client): adjust trpc to new structure`
- Never push to remote unless the user explicitly asks you to
- Never force push
- Never add `Co-authored-by`, `Signed-off-by`, or any other trailer that credits you (Claude) as a contributor — commits should be authored solely by the git-configured user
- Never modify the git config (user.name, user.email, etc.)
