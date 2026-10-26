# The Broke Student's Cheat Code

**Unlock the Free Perks You're Already Paying For**

A multi-page static website that teaches college students (especially Syracuse University students) how to claim valuable student perks in one afternoon.

Plain HTML5 + one CSS file + one small JS file. No frameworks, no build step. Open `index.html` by double-clicking it.

---

## File structure

```
index.html           Home (goal, audience, step overview, two entry points)
get-ready.html       Step 1
entertainment.html   Steps 2–3
tools.html           Step 4
su-perks.html        Steps 5–6 (Syracuse only)
stay-on-top.html     Step 7 + printable tracker
perk-finder.html     Filterable perk index
video.html           Video + transcript
team.html            Team bios
css/styles.css       All styles
js/main.js           Mobile menu, photo placeholders, Perk Finder filters, print button
images/              Your photos go here (see images/README.txt)
```

---

## Replace the placeholders

### 1. Add photos
1. Open `images/README.txt` for the exact filenames (`hero.jpg`, `step1.jpg` … `step7.jpg`, `member1.jpg` … `member3.jpg`).
2. Save your photos into the `images/` folder with those names. Names are case-sensitive on GitHub Pages: use lowercase `.jpg`.
3. Refresh the page. The dashed "PHOTO: …" box is replaced automatically.
4. If a photo shows something different from the description, edit that image's `alt="..."` text to match.

### 2. Team bios (`team.html`) — done
- Names, headshots, and bios for Joe Summa, Nicky Vadas, and Philip Kravitz are in place.
- To edit a bio, change the `<p>` under that member's `<h2>` name. To remove a member, delete everything between their `MEMBER N CARD START` and `MEMBER N CARD END` comments.

### 3. Insert the YouTube video (`video.html`)
1. Upload the video to YouTube (Public or Unlisted) and add/check captions in YouTube Studio.
2. Copy the ID from the URL. For `https://www.youtube.com/watch?v=dQw4w9WgXcQ` the ID is `dQw4w9WgXcQ`.
3. In `video.html`, replace `REPLACE_WITH_YOUTUBE_ID` with that ID.
4. Replace `[PASTE VIDEO TRANSCRIPT HERE …]` with the transcript.

> Note: some browsers block YouTube embeds when the page is opened straight from your hard drive (`file://`). If the player shows an error locally, it will work once published on GitHub Pages.

---

## Publish free on GitHub Pages

1. Create a free account at <https://github.com> (or sign in).
2. Click **+ → New repository**. Name it (e.g., `broke-student-cheat-code`), set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in **everything inside this folder** (`index.html`, all other `.html` files, and the `css`, `js`, and `images` folders). `index.html` must be at the top level, not inside another folder.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch **main** and folder **/ (root)**, then click **Save**.
7. Wait 1–2 minutes and refresh. Your site link appears at the top: `https://YOUR-USERNAME.github.io/broke-student-cheat-code/`.
8. To update later, upload changed files again (same names overwrite) and commit.

---

## Assignment requirements checklist

| # | Requirement | Where it's met |
|---|---|---|
| 1 | At least 5 instruction steps, each image paired with its text | 7 steps across `get-ready.html`, `entertainment.html`, `tools.html`, `su-perks.html`, `stay-on-top.html`. Each step has a `<figure>` beside its text (side by side on desktop, stacked on mobile) |
| 2 | Page for a 2–5 minute video featuring a group member | `video.html` (responsive 16:9 embed, captions note, transcript section) |
| 3 | Multiple linked pages; follow in order, skip, go back, enter at different points | Same nav menu on every page with current page marked; "← Previous / Next →" on every step page; progress line ("Steps 2–3 of 7"); `#step-1`…`#step-7` anchors; footer links to all 7 steps; Home has two entry points; Perk Finder links straight to each step; SU page offers a "skip ahead" link |
| 4 | Homepage states project goal and target audience | `index.html`: "Project goal" and "Who this is for" sections |
| 5 | Team Bios page with each member's professional bio | `team.html` |
| 6 | Strong accessibility, color, and design | All pages: skip link, semantic landmarks, one `<h1>` per page, logical headings, `lang="en"`, unique titles and meta descriptions, alt text on every image, visible focus outlines, keyboard-operable menu button with `aria-expanded`, `aria-current="page"`, `aria-pressed` filters, `aria-live` result count, WCAG AA contrast (navy on off-white 13.6:1, white on orange 4.5:1), labels and icons so meaning never depends on color alone, responsive to 360px, reduced-motion support, print styles for the tracker |

---

## Quick accessibility self-check before submitting
- Press **Tab** from the top of each page: the "Skip to main content" link appears first, and every link and button shows a visible outline.
- Narrow the browser window (or use phone view in DevTools): the menu collapses behind the **Menu** button, and nothing scrolls sideways.
- Check that every photo you added has accurate `alt` text.
