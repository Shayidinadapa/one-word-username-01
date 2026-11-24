# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Shayidinadapa/one-word-username-01/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/Shayidinadapa/one-word-username-01/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for the [One Word, One Username, One Reward](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) bounty on make.fun.

The program writes a single word — the entrant's own make.fun username, `shayidinadapa` — to `entry.txt`, nothing else. No explanation, no links, no pitch.

## How to run

Requires Node.js 22.18 or later.

```bash
npm start
```

By default the program writes to `/output/entry.txt`. To write elsewhere, set `MAKEFUN_OUTPUT_DIR` (or `OUTPUT_DIR`):

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out npm start
```

The program validates that the text is 1–30 characters and not only whitespace, reads the file back, and throws if the read-back differs byte-for-byte from what was written.
