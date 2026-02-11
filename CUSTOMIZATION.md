# 🎨 Customization Guide

## Complete Guide to Making the Love System Personal

This guide will help you transform the Love System into a unique gift for your special someone.

---

## 1. 📸 Customizing Memories

### How to Add Your Own Photos

Edit `script.js` and find the `memoriesData` array:

```javascript
const memoriesData = [
    {
        id: 1,
        image: 'data:image/svg+xml,...', // Replace this with your image
        date: 'January 15, 2024',
        description: 'The day we met at the coffee shop...',
        note: '💕 Best day ever!'
    },
    // ... more memories
];
```

### Method 1: Using Image URLs

```javascript
image: 'https://your-image-url.com/photo.jpg'
```

### Method 2: Using Base64 Encoded Images

1. Visit: https://www.base64encode.org/
2. Upload your image
3. Copy the base64 string
4. Replace image value:

```javascript
image: 'data:image/jpeg;base64,/9j/4AAQSkZJRg...'
```

### Method 3: Using Local Image Files (Best)

1. Create an `assets/images/` folder
2. Add your images there
3. Reference them:

```javascript
image: 'assets/images/memory1.jpg'
```

### Example: Adding 6 of Your Memories

```javascript
const memoriesData = [
    {
        id: 1,
        image: 'assets/images/first-date.jpg',
        date: 'March 15, 2023',
        description: 'The day we first met! I knew you were special from that first smile.',
        note: '💕 Best day ever!'
    },
    {
        id: 2,
        image: 'assets/images/vacation.jpg',
        date: 'July 20, 2023',
        description: 'Our beach vacation - the most relaxing and beautiful time together.',
        note: '🌊 Paradise with you'
    },
    {
        id: 3,
        image: 'assets/images/dinner.jpg',
        date: 'December 25, 2023',
        description: 'That amazing dinner you cooked. You\'re my personal chef and my love.',
        note: '🍽️ Made with love'
    },
    {
        id: 4,
        image: 'assets/images/sunset.jpg',
        date: 'February 1, 2024',
        description: 'Watching the sunset together is my favorite thing in the world.',
        note: '🌅 Our time is golden'
    },
    {
        id: 5,
        image: 'assets/images/adventure.jpg',
        date: 'March 10, 2024',
        description: 'Adventure with you is always the best adventure. Let\'s explore forever.',
        note: '🗺️ Forever exploring'
    },
    {
        id: 6,
        image: 'assets/images/today.jpg',
        date: 'February 12, 2025',
        description: 'Today - the day I created this love system for you. Forever grateful.',
        note: '💕 Love you always'
    }
];
```

---

## 2. 🎵 Customizing the Playlist

### How to Add Your Special Songs

Edit `script.js` and find the `playlistData` array:

```javascript
const playlistData = [
    {
        id: 1,
        title: 'Our First Song',
        artist: 'That Artist',
        duration: 214,
        note: 'This was playing when we first danced together'
    },
    // ... more songs
];
```

### Duration Calculation:
- 3:30 = 210 seconds
- 4:00 = 240 seconds
- Use a song duration converter if needed

### Example: Your Perfect Playlist

```javascript
const playlistData = [
    {
        id: 1,
        title: 'Perfect',
        artist: 'Ed Sheeran',
        duration: 263,
        note: 'Because you\'re perfect to me'
    },
    {
        id: 2,
        title: 'Lucky',
        artist: 'Jason Mraz ft. Colbie Caillat',
        duration: 219,
        note: 'I\'m so lucky to have you in my life'
    },
    {
        id: 3,
        title: 'At Last',
        artist: 'Etta James',
        duration: 206,
        note: 'At last, I found you'
    },
    {
        id: 4,
        title: 'All of Me',
        artist: 'John Legend',
        duration: 248,
        note: 'Give you all of me, all my love'
    },
    {
        id: 5,
        title: 'Thinking Out Loud',
        artist: 'Ed Sheeran',
        duration: 282,
        note: 'I love you without knowing how, or when, or from where'
    },
];
```

---

## 3. 💌 Customizing Love Letters

### How to Add Your Own Messages

Edit `script.js` and find the `loveLetters` array:

```javascript
const loveLetters = [
    {
        id: 1,
        subject: 'Why You Make Me Happy',
        text: 'Write your heartfelt message here...'
    },
    // ... more letters
];
```

### Love Letter Templates & Ideas

**Letter 1: Why I Love You**
```javascript
{
    id: 1,
    subject: 'Why I Love You',
    text: `There are so many reasons why I love you. Your smile brightens my darkest days. Your laugh is my favorite sound. The way you listen when I talk, the way you care about my dreams, the way you hold my hand... everything about you makes me fall in love with you all over again. You're not just my love, you're my best friend, my adventure, my home.`
}
```

**Letter 2: Thank You**
```javascript
{
    id: 2,
    subject: 'Thank You',
    text: `Thank you for being you. Thank you for choosing me. Thank you for all the small moments that mean everything - the good morning texts, the random hugs, the inside jokes, the quiet moments. Thank you for believing in me when I didn't believe in myself. You've changed my life in the most beautiful way.`
}
```

**Letter 3: Our Future**
```javascript
{
    id: 3,
    subject: 'Our Forever',
    text: `I want to spend forever with you. Building memories, creating inside jokes, growing old together. I want to wake up to your smile every morning. I want to hold your hand through life's adventures. I want to be your person. You are my person, now and always.`
}
```

**Letter 4: Private Message**
```javascript
{
    id: 4,
    subject: 'Just For You',
    text: `This message is just for you. There's something special about you that makes everything better. The way you look at me, the way you understand me without words, the way you make me want to be a better person. You are my greatest gift. I love you more than words can say.`
}
```

---

## 4. 🗓️ Customizing the Timeline

### How to Add Your Relationship Milestones

Edit `script.js` and find the `timelineEvents` array:

```javascript
const timelineEvents = [
    {
        year: 2023,
        month: 'March',
        title: 'We Met',
        image: 'assets/images/timeline1.jpg',
        story: 'Tell the story of how you met...'
    },
    // ... more events
];
```

### Create Your Timeline

```javascript
const timelineEvents = [
    {
        year: 2023,
        month: 'March',
        title: 'The First Meeting',
        image: 'assets/images/first-meet.jpg',
        story: 'I'll never forget the first moment I saw you. You walked in, and my heart skipped a beat. Your smile was so warm, so genuine. I knew right then that my life would never be the same.'
    },
    {
        year: 2023,
        month: 'May',
        title: 'The First Date',
        image: 'assets/images/first-date.jpg',
        story: 'Our first official date was at that little coffee shop you love. We talked for hours, laughed until our sides hurt, and I realized I was falling for you hard.'
    },
    {
        year: 2023,
        month: 'August',
        title: 'I Said I Love You',
        image: 'assets/images/love-confession.jpg',
        story: 'Under the stars, in that special place, I finally said it: I love you. And you said it back. That moment changed everything. That moment was forever.'
    },
    {
        year: 2023,
        month: 'December',
        title: 'Our First Holiday Together',
        image: 'assets/images/holiday.jpg',
        story: 'Our first Christmas together was magical. Decorating the tree, baking cookies, cuddling by the fire. I realized that the best gift is having you by my side.'
    },
    {
        year: 2024,
        month: 'February',
        title: 'First Valentine\'s Day',
        image: 'assets/images/valentine.jpg',
        story: 'Our first Valentine\'s Day as a couple was unforgettable. But every day with you feels like Valentine\'s Day to me.'
    },
    {
        year: 2025,
        month: 'February',
        title: 'Forever Love',
        image: 'assets/images/now.jpg',
        story: 'Today, I created this digital world just for you. A testament to my love. I can\'t wait to create a lifetime of beautiful moments with you.'
    }
];
```

---

## 5. 🔐 Customizing the Secret Folder

### Change the Password

Edit `script.js`, find the `SecretWindow` class:

```javascript
class SecretWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
        this.correctPassword = '2612'; // ← Change this!
    }
}
```

### Password Ideas:
- Birth date: `1225` (December 25)
- Anniversary date: `0314` (March 14)
- Lucky number: `1111`
- Inside joke: `LOVE` (but note: it's case-sensitive)
- Coordinates: `1234` (latitude/longitude digits)

### Change the Hint

Find in the same file:
```javascript
<span class="hint-text">Our special number...</span>
```

### Customize the Secret Message

In `SecretWindow.js`, find the `checkPassword` method:

```javascript
content.querySelector('.revealed-text').textContent = `
    CHANGE THIS MESSAGE!
    
    Write your personal secret message here.
    This is only revealed when the correct password is entered.
`;
```

---

## 6. 🎮 Customizing Games (Advanced)

### Modify Game Settings

#### Hearts Game Duration
```javascript
let timeLeft = 30; // Change to 60 for longer game
```

#### Memory Game Size
```javascript
grid-template-columns: repeat(3, 1fr); // Change 3 to 4 for 4x4 grid
```

#### Button Game Messages
```javascript
'You can\'t click No! You\'re stuck with me forever! 💕'
// Change this message
```

---

## 7. 🎨 Customizing Colors

### Change the Color Scheme

Edit `style.css`, find the root variables:

```css
:root {
    --primary-pink: #ff69b4;      /* Main pink */
    --light-pink: #ffb6d9;        /* Light accent */
    --pastel-pink: #ffc0d9;       /* Soft accent */
    --dark-pink: #c71585;         /* Dark accent */
    --soft-purple: #dda0dd;       /* Purple accent */
    --light-purple: #f0e6f0;      /* Light background */
    --white: #ffffff;             /* White */
    --dark-bg: #1a1a2e;           /* Dark background */
}
```

### Popular Color Schemes

**Romantic Red:**
```css
--primary-pink: #e91e63;
--light-pink: #f06292;
--dark-pink: #880e4f;
```

**Soft Blue:**
```css
--primary-pink: #2196f3;
--light-pink: #64b5f6;
--dark-pink: #1565c0;
```

**Pastel Mix:**
```css
--primary-pink: #f48fb1;
--light-pink: #f8bbd0;
--dark-pink: #c2185b;
--soft-purple: #ce93d8;
```

---

## 8. ✍️ Customizing Text & Titles

### Landing Page
Find in `index.html`:
```html
<h1 class="pixel-title">
    <span class="glitch" data-text="Our Love">Our Love</span><br>
    <span class="glitch" data-text="System.exe">System.exe</span>
</h1>
```

### Description
```html
<p class="landing-description">
    This is our little digital world — built with love,
    memories, and a little bit of 90s magic.
    Ready to explore it together? 💗
</p>
```

---

## 9. 📁 Folder Names

To customize folder names, edit `index.html`:

```html
<div class="desktop-icon" data-folder="memories">
    <div class="icon-img">📸</div>
    <p>Our Memories</p>      <!-- Change this -->
</div>
```

---

## 10. 🎯 Complete Customization Checklist

- [ ] Update all memories with your photos and dates
- [ ] Replace playlist with your favorite songs
- [ ] Write personalized love letters
- [ ] Create your relationship timeline
- [ ] Change the secret password
- [ ] Update the secret message
- [ ] Customize colors to match your style
- [ ] Update landing page title and description
- [ ] Add background music to `assets/` folder
- [ ] Test all features in different browsers
- [ ] Share with your special someone!

---

## 11. 💡 Pro Tips

### Tip 1: Image Optimization
- Keep images under 500KB each
- Use JPG for photos, PNG for graphics
- Resize images to ~800x600 pixels

### Tip 2: Meaningful Dates
- Use actual dates of your memories
- Include specific details in descriptions
- Add inside jokes to notes

### Tip 3: Font & Text
- Keep messages heartfelt but concise
- Use emojis to add personality
- Proofread everything before sharing

### Tip 4: Testing
- Test on multiple browsers
- Test on mobile devices
- Check all interactive features
- Verify all links and images work

### Tip 5: Sharing
- Keep all files together in one folder
- Zip the entire folder for easy sharing
- Recipients only need to open `index.html`
- No installation or internet required!

---

## 12. 🚀 Advanced Customization

### Add More Desktop Icons
In `index.html`, add to `.desktop-icons`:
```html
<div class="desktop-icon" data-folder="custom">
    <div class="icon-img">🎁</div>
    <p>New Folder</p>
</div>
```

### Add Custom Window Types
In `script.js`, add to the `openFolder` function:
```javascript
case 'custom':
    window = new CustomWindow(this.windowManager).create();
    break;
```

### Create New Game
Follow the pattern of existing games in `GamesWindow.js`

---

## 13. 📞 Support & Troubleshooting

### Issue: Images not showing
- Check file paths are correct
- Ensure images are in the same format
- Use absolute URLs if relative paths don't work

### Issue: Text not displaying
- Check for special characters
- Ensure proper quote escaping
- Verify JSON syntax is correct

### Issue: Features not working
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check browser console for errors
- Verify all files are in the correct folder

---

## 🎁 Final Tips

Remember, the most important customization is adding YOUR heart and personal touches. This system is a canvas for your love story. Make it unique, make it personal, make it unforgettable.

**The best gift is one made with love. You've got this! 💕**

---

For more help, refer to the main README.md file.

Happy customizing! 💫✨💗
