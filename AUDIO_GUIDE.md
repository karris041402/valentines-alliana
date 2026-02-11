# 🎵 Love System Audio Guide

## Background Music

The system includes Web Audio API generation for sound effects. For background music, you have several options:

### Option 1: Use an Online Romantic Music Track (Recommended)

The system can play any MP3 file. You can:

1. **Find Royalty-Free Romantic Music:**
   - Visit: https://www.bensound.com (search for "romantic")
   - Download the MP3 file
   - Add it to the `assets/` folder as `bgmusic.mp3`

2. **Popular Options:**
   - Bensound: "Sunny Day", "Sunny Morning", "Summer"
   - Free Music Archive: Search for "romantic instrumental"
   - YouTube Audio Library: Free to download

### Option 2: Generate Audio Programmatically

If you want to generate the background music dynamically without needing an MP3 file:

1. **Create a new file: `audio-generator.js`**
2. **Add this code to generate chiptune music:**

```javascript
// Function to generate 8-bit style background music
function generateChiptuneMusic() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create oscillator for melody
    const osc1 = audioContext.createOscillator();
    const gain1 = audioContext.createGain();
    osc1.connect(gain1);
    gain1.connect(audioContext.destination);
    
    // Melody notes (in Hz)
    const melody = [
        392, 392, 440, 392, 494, 440, 392, 392, 440, 392, 523, 494, 392, 392, 392, 392
    ];
    
    let currentTime = audioContext.currentTime;
    const noteLength = 0.25;
    
    melody.forEach((freq, index) => {
        osc1.frequency.setValueAtTime(freq, currentTime + (index * noteLength));
        gain1.gain.setValueAtTime(0.1, currentTime + (index * noteLength));
        gain1.gain.setValueAtTime(0, currentTime + (index * noteLength) + noteLength * 0.8);
    });
    
    osc1.start(currentTime);
    osc1.stop(currentTime + melody.length * noteLength);
}
```

### Option 3: Record Your Own Message

For a truly personal touch:
1. Record a 30-second romantic message or music
2. Export as MP3
3. Place in `assets/` folder as `bgmusic.mp3`

## Sound Effects Implementation

All sound effects use the Web Audio API and are generated dynamically:

### Effect Types:
- **Click** (800 Hz, 0.1s) - When buttons are clicked
- **Open** (600 Hz, 0.15s) - When windows open
- **Close** (400 Hz, 0.1s) - When windows close
- **Success** (1000 Hz, 0.2s) - When completing tasks
- **Error** (300 Hz, 0.15s) - When errors occur
- **Achievement** (1200 Hz, 0.3s) - When unlocking achievements

### Customizing Sound Effects

Edit the `playSound()` function in `script.js`:

```javascript
function playSound(type) {
    if (!config.soundEnabled) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    let frequency, duration;
    switch (type) {
        case 'custom':
            frequency = 1000;  // Change this value
            duration = 0.2;    // Change this value
            break;
        // ... rest of cases
    }

    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.3 * config.volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}
```

## Music Player Features

### Currently Supported:
- Play/Pause playback
- Next/Previous track navigation
- Progress bar with seek functionality
- Volume control slider
- Animated equalizer bars
- Song duration display
- Song list with personal notes

### Future Enhancement Ideas:
- Shuffle mode
- Repeat options
- Playlist creation
- Equalizer adjustments
- Fade in/fade out effects

## Troubleshooting Audio

### Issue: No background music playing
**Solutions:**
1. Check if music file exists at `assets/bgmusic.mp3`
2. Verify browser allows audio playback
3. Check browser console for errors
4. Try with different audio format

### Issue: Sound effects not working
**Solutions:**
1. Check if sound is enabled (toggle with 🔊 button)
2. Check browser volume settings
3. Try reloading the page
4. Check browser security settings

### Issue: Audio context errors
**Solutions:**
1. Modern browsers require user interaction to start audio
2. Click anywhere on the page first
3. Clear browser cache
4. Try a different browser

## Audio Files to Add

To enhance your love system, you can add these audio files to the `assets/` folder:

1. **bgmusic.mp3** - Background music (recommended 2-3 minutes)
2. **notification.mp3** - For achievement notifications (optional)
3. **message.mp3** - For love letter notifications (optional)

## Recommended Romantic Music Tracks

### Instrumentals:
- "Gymnopédie No. 1" - Erik Satie
- "Clair de Lune" - Claude Debussy
- "The Lark Ascending" - Ralph Vaughan Williams
- Pianoforte Collections - Yann Tiersen
- Studio Ghibli Soundtracks

### Chiptune Remixes:
- 8-bit love songs (search on YouTube)
- 16-bit romantic remixes
- Retro game romantic mods

### Where to Find Free Music:
- **Bensound.com** - High-quality royalty-free music
- **Incompetech.com** - Royalty-free music library
- **Free Music Archive** - Community-driven
- **YouTube Audio Library** - Free to use
- **Pixabay** - Free music downloads

## Audio Performance Notes

- The Web Audio API is lightweight and doesn't require plugins
- All sound effects are generated on-the-fly
- No external audio libraries are needed
- Works offline without internet connection
- Compatible with all modern browsers

## Tips for Best Audio Experience

1. **Volume Balance:**
   - Set volume to 70% for comfortable listening
   - Adjust based on background noise

2. **Sound Design:**
   - Keep effects short and punchy
   - Use different frequencies for variety
   - Fade effects to avoid clicking sounds

3. **Background Music:**
   - Loop-friendly (no long fadeouts)
   - 120-140 BPM for romantic mood
   - Instrumental to avoid distractions

4. **Mobile Audio:**
   - Test on mobile devices
   - Some mobile browsers have audio restrictions
   - User must interact with page first

## Advanced Audio Features You Can Add

```javascript
// Fade in effect
function fadeIn(audioElement, duration) {
    audioElement.volume = 0;
    audioElement.play();
    let volume = 0;
    const increment = (1 / (duration * 100));
    setInterval(() => {
        volume = Math.min(1, volume + increment);
        audioElement.volume = volume;
    }, 10);
}

// Fade out effect
function fadeOut(audioElement, duration) {
    let volume = audioElement.volume;
    const decrement = (volume / (duration * 100));
    setInterval(() => {
        volume = Math.max(0, volume - decrement);
        audioElement.volume = volume;
        if (volume === 0) audioElement.pause();
    }, 10);
}
```

---

Enjoy the audio experience! 🎵❤️
