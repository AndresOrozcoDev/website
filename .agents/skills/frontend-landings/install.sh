#!/bin/bash
#
# frontend-landings-claude-skill installer
# Usage: curl -sSL https://raw.githubusercontent.com/auwalmusa/frontend-landings-claude-skill/main/install.sh | bash
#

set -e

REPO="auwalmusa/frontend-landings-claude-skill"
BRANCH="main"
SKILL_DIR="$HOME/.claude/skills/frontend-landings-claude-skill"

echo ""
echo "⚡ Installing frontend-landings-claude-skill skill for Claude Code..."
echo ""

# Create directory structure
mkdir -p "$SKILL_DIR/references"

# Download SKILL.md
echo "  → Downloading SKILL.md..."
curl -sSL "https://raw.githubusercontent.com/$REPO/$BRANCH/SKILL.md" \
  -o "$SKILL_DIR/SKILL.md"

# Download STYLE_PRESETS.md
echo "  → Downloading references/STYLE_PRESETS.md..."
curl -sSL "https://raw.githubusercontent.com/$REPO/$BRANCH/references/STYLE_PRESETS.md" \
  -o "$SKILL_DIR/references/STYLE_PRESETS.md"

echo ""
echo "✅ Installed to: $SKILL_DIR"
echo ""
echo "Files:"
echo "  $SKILL_DIR/SKILL.md"
echo "  $SKILL_DIR/references/STYLE_PRESETS.md"
echo ""
echo "Next steps:"
echo "  1. Restart Claude Code to load the skill"
echo "  2. Try: \"Make me a landing page for a SaaS product\""
echo ""
echo "⭐ Star the repo: https://github.com/$REPO"
echo ""
