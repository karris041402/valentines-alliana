# 📦 Installation & Setup Guide

## Complete Setup Instructions

---

## ✅ What You Have

Your "Our Love System.exe" Valentine's Day gift includes:

```
val/
├── index.html              ← Main file (open this!)
├── style.css               ← Visual styling
├── script.js               ← All interactive features
├── README.md               ← Full documentation
├── QUICKSTART.md           ← Fast start guide
├── CUSTOMIZATION.md        ← How to personalize
├── AUDIO_GUIDE.md          ← Audio setup
├── INSTALLATION.md         ← This file
└── assets/                 ← Media folder (create images here)
    └── (empty - add photos here)
```

---

## 🚀 Installation Steps

### Step 1: Verify All Files Are Present
- [ ] `index.html` exists
- [ ] `style.css` exists
- [ ] `script.js` exists
- [ ] All 4 `.md` files exist
- [ ] `assets/` folder exists

### Step 2: Open in Browser
**Windows:**
1. Navigate to the `val` folder
2. Right-click on `index.html`
3. Select "Open with" → Choose your browser (Chrome recommended)
4. Click "PLAY TOGETHER"

**Mac:**
1. Open Finder
2. Navigate to the `val` folder
3. Double-click `index.html`
4. It will open in your default browser
5. Click "PLAY TOGETHER"

**Linux:**
1. Open file manager
2. Navigate to the `val` folder
3. Right-click `index.html`
4. Open with → Firefox or Chrome
5. Click "PLAY TOGETHER"

### Step 3: Test All Features
- [ ] Landing page appears
- [ ] Click "PLAY TOGETHER" loads system
- [ ] Desktop system loads (3 second loading screen)
- [ ] Can click desktop icons
- [ ] Sound works (if enabled)
- [ ] All folders open
- [ ] Windows are draggable

---

## 🎨 Adding Your Content

### Adding Photos

**Folder Structure:**
```
val/
└── assets/
    ├── images/
    │   ├── memory1.jpg
    │   ├── memory2.jpg
    │   └── ...
    └── bgmusic.mp3 (optional)
```

**Steps:**
1. Create `assets/images/` folder (if not exists)
2. Add your photos to this folder
3. Edit `script.js` and update `memoriesData` array
4. Reference images: `image: 'assets/images/memory1.jpg'`

### Adding Background Music

**Steps:**
1. Find a romantic MP3 song (free sites: bensound.com)
2. Add to `assets/` folder as `bgmusic.mp3`
3. Adjust volume in-app with slider
4. Music plays automatically when system starts

### Editing Text & Data

**How to edit:**
1. Open `script.js` in text editor (Notepad, VS Code, etc.)
2. Find the data arrays:
   - `memoriesData` - Your memories
   - `playlistData` - Your songs
   - `loveLetters` - Your love messages
   - `timelineEvents` - Your relationship milestones
3. Update the content
4. Save the file
5. Refresh your browser to see changes

---

## 📝 Before Customizing

### Backup the Original
1. Make a copy of the entire `val` folder
2. Name it `val_backup`
3. Keep this safe in case you need to restart

### Use a Code Editor
Recommended free code editors:
- **Visual Studio Code** (best)
- **Notepad++** (Windows)
- **Sublime Text** (all platforms)
- Plain Notepad (works but not ideal)

**Don't use:**
- Word documents
- Google Docs
- Any rich text editor

---

## 🎯 Customization Roadmap

### Quick Setup (10 minutes)
1. ✅ Verify files are present
2. ✅ Test basic functionality
3. ✅ Open in browser
4. ✅ Show to your partner

### Standard Setup (30 minutes)
1. ✅ Add your own photos
2. ✅ Add your favorite songs
3. ✅ Write personal love letters
4. ✅ Add relationship milestones

### Complete Setup (1-2 hours)
1. ✅ Full memory customization
2. ✅ Background music
3. ✅ Custom color scheme
4. ✅ Secret message
5. ✅ Detailed timeline
6. ✅ Test everything
7. ✅ Package for sharing

---

## 🐛 Common Issues & Solutions

### Issue: Browser shows error/blank page
**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Close and reopen browser
3. Try a different browser
4. Check browser console (F12) for errors

### Issue: Styling looks broken
**Solution:**
1. Verify `style.css` is in the same folder as `index.html`
2. Verify file names are exactly correct (case-sensitive on Mac/Linux)
3. Hard refresh the page
4. Check that no files are corrupted

### Issue: Click events don't work
**Solution:**
1. Verify `script.js` is in the same folder
2. Check browser console for JavaScript errors
3. Try a different browser
4. Ensure JavaScript is enabled

### Issue: Images don't show
**Solution:**
1. Verify image files exist in `assets/images/` folder
2. Check image file names match exactly in code
3. Ensure images are in JPG or PNG format
4. Try absolute URLs instead of relative paths

### Issue: Audio doesn't play
**Solution:**
1. Verify browser volume is up
2. Check if sound is muted (click 🔊 icon)
3. Verify `bgmusic.mp3` exists in `assets/` folder (optional)
4. Some browsers require user interaction first

---

## 📦 Packaging for Sharing

### Option 1: Zip File (Best)
1. Right-click the `val` folder
2. Select "Send to" → "Compressed (zipped) folder"
3. This creates `val.zip`
4. Email this file

**To open:**
- Recipient extracts the ZIP file
- Double-clicks `index.html`

### Option 2: Cloud Sharing
1. Upload entire `val` folder to Google Drive
2. Share link with recipient
3. Recipient opens link and can download

### Option 3: USB Drive
1. Copy entire `val` folder to USB drive
2. Give USB to recipient
3. They navigate to `val` and open `index.html`

### Option 4: Email (Small Files Only)
1. If total size < 25MB, can email as attachment
2. Recipient extracts and opens `index.html`

---

## 🔐 File Integrity Checklist

Before sharing, verify:
- [ ] All HTML files are valid (open in browser)
- [ ] CSS loads (styling visible)
- [ ] JavaScript runs (interactions work)
- [ ] All internal links work (no 404 errors)
- [ ] All images display correctly
- [ ] Sound works (if included)
- [ ] No broken file references
- [ ] No personal data exposed (if using real paths)
- [ ] All folders/subfolders intact

---

## 🌐 Hosting on Web (Optional)

If you want to share as a live website:

### Free Hosting Options:
1. **GitHub Pages**
   - Upload to GitHub
   - Enable Pages in settings
   - Get free URL

2. **Netlify**
   - Drag and drop folder
   - Instant live link
   - Free hosting

3. **Vercel**
   - Similar to Netlify
   - Super fast
   - Free tier available

4. **Firebase Hosting**
   - Google-powered
   - Reliable
   - Free for small projects

---

## 🔄 Update Your Gift

### Adding More Content Later
1. Edit `script.js` anytime
2. Add to arrays (memories, songs, letters, etc.)
3. Save file
4. Refresh browser
5. New content appears instantly

### Changing Customization
1. Update any data in `script.js`
2. Modify colors in `style.css`
3. Change text in `index.html`
4. Save files
5. Refresh browser to see changes

---

## ✅ Final Checklist Before Gifting

- [ ] All files present and correct
- [ ] Tested in at least 2 browsers
- [ ] All interactive features work
- [ ] All images load correctly
- [ ] Audio works (if included)
- [ ] Secret password set correctly
- [ ] All personal customizations complete
- [ ] No errors in browser console
- [ ] Mobile responsive (tested on phone)
- [ ] Ready to share!

---

## 💡 Pro Tips

### Tip 1: Version Control
- Keep `val_original` as backup
- Use `val_custom` for your version
- Don't overwrite originals

### Tip 2: Testing
- Test in Chrome, Firefox, and Safari
- Test on phone and tablet
- Test all games fully
- Verify secret folder with password

### Tip 3: Documentation
- Keep this guide handy
- Share README.md with recipient
- Include QUICKSTART.md for easy access
- Add personal notes about the gift

### Tip 4: Performance
- Optimize images (keep under 500KB each)
- Minimize JSON data (no huge text)
- Use relative paths for all files
- Remove unused code/assets

### Tip 5: Personalization
- The more personal, the more special
- Use real memories and feelings
- Include inside jokes
- Make it uniquely yours

---

## 🚨 Emergency Troubleshooting

### "Blank white page"
1. Check browser console (F12 → Console tab)
2. Look for error messages
3. Verify HTML/CSS/JS files exist
4. Try different browser

### "Can't find x file"
1. Check spelling and capitalization
2. Verify file is in correct folder
3. Use absolute paths if relative fail
4. Ensure no spaces in file paths

### "Script not running"
1. Check JavaScript is enabled
2. Look for syntax errors in console
3. Try hard refresh (Ctrl+Shift+R)
4. Check for browser extensions blocking scripts

### "Still stuck?"
1. Restore from backup
2. Start with fresh files
3. Make one small change at a time
4. Test after each change

---

## 📞 Still Need Help?

1. **Check README.md** - Main documentation
2. **Check QUICKSTART.md** - Fast troubleshooting
3. **Check CUSTOMIZATION.md** - Personalization help
4. **Open browser console** - F12 → Console for errors
5. **Try different browser** - Chrome usually most reliable

---

## 🎁 You're All Set!

You now have a complete, fully functional Valentine's Day gift!

**What you can do:**
✅ Share it immediately
✅ Customize it first
✅ Add your memories
✅ Host it online
✅ Surprise your love with it

**How it will make them feel:**
💕 Loved beyond words
💕 Special and cherished
💕 Amazed at your effort
💕 Forever grateful

---

## 🎉 Final Notes

- This system works completely **offline** - no internet needed
- No installation required - just open `index.html`
- 100% safe and private
- Can be kept forever as a digital keepsake
- Perfect for long-distance relationships
- Can be updated anytime with new memories

---

**Happy Valentine's Day! 💕✨💫**

You've created something truly magical. Enjoy!

---

For detailed customization instructions, see **CUSTOMIZATION.md**
For quick start, see **QUICKSTART.md**
For full features, see **README.md**
