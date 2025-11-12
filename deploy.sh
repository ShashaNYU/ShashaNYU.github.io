#!/usr/bin/env bash
set -euo pipefail

#!/usr/bin/env bash
set -euo pipefail

# =============== 可选同步 ===============
# 如果你还在 Obsidian 里写作，想把某个文件夹同步到 content 下，
# 把下面两行“取消注释”并改成你的真实路径。
# 例：把 iCloud/Obsidian_Vault/phil_public 同步到 content/phil_public
# SRC="$HOME/Documents/Obsidian_Vault/phil_public"
# DEST="content/phil_public"
# mkdir -p "$DEST"
# rsync -av --delete --include='*/' --include='*.md' --exclude='*' "$SRC"/ "$DEST"/

# =============== 构建 ===============
echo "🛠  Building site…"
npx quartz build

# =============== 拷贝到 docs（Pages 从这里发布） ===============
echo "📦  Preparing docs/…"
rm -rf docs
cp -R public docs

# =============== 提交 + 推送 ===============
msg=${1:-"deploy: $(date +'%Y-%m-%d %H:%M')"}
git add .
git commit -m "$msg" || true   # 没变化也不报错
git push

echo "✅ Done. Your site will update shortly."

