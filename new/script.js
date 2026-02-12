/**
 * VALENTINE'S DAY LOVE SYSTEM
 * Complete Interactive 90s Retro Pixelated Love Game OS
 * 
 * Features:
 * - Memory Gallery
 * - Music Player
 * - Love Letters
 * - Mini Games
 * - Timeline
 * - Secret Folder
 * - Sound Effects
 * - Achievements
 * - localStorage Persistence
 */

// ========== CONFIGURATION & DATA ==========

const config = {
    soundEnabled: true,
    darkTheme: false,
    volume: 0.7,
    achievements: {},
    gameScores: {},
    musicPreference: 0.7
};

// Sample memories data
const memoriesData = [
    {
        id: 1,
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23ffb6d9" width="200" height="200"/><text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em">Our First Day</text></svg>',
        date: 'January 15, 2024',
        description: 'The day we met at the coffee shop. You were wearing that cute sweater and I couldn\'t stop smiling.',
        note: '💕 Best day ever!'
    },
    {
        id: 2,
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23dda0dd" width="200" height="200"/><text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em">Park Walk</text></svg>',
        date: 'February 2, 2024',
        description: 'Our first walk in the park together. The sunset was beautiful, but not as beautiful as your smile.',
        note: '🌸 Magical evening'
    },
    {
        id: 3,
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23ffc0d9" width="200" height="200"/><text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em">Movie Night</text></svg>',
        date: 'February 14, 2024',
        description: 'Our first Valentine\'s Day together. We watched our favorite movie and shared popcorn and love.',
        note: '💗 Forever yours'
    },
    {
        id: 4,
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23f0e6f0" width="200" height="200"/><text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em">Beach Day</text></svg>',
        date: 'March 10, 2024',
        description: 'We got ice cream and walked on the beach. You held my hand the whole time.',
        note: '🌊 Perfect moments'
    },
    {
        id: 5,
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23ffb6d9" width="200" height="200"/><text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em">Concert</text></svg>',
        date: 'April 5, 2024',
        description: 'We went to that concert you wanted to see. You sang along to every song and looked so happy.',
        note: '🎵 Your happiness is my favorite song'
    },
    {
        id: 6,
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23dda0dd" width="200" height="200"/><text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em">Tonight</text></svg>',
        date: 'February 12, 2025',
        description: 'You got this digital love system as a Valentine\'s gift. I hope it brings you as much joy as you bring to my life.',
        note: '💕 Forever my Valentine'
    }
];

// Sample playlist data
const playlistData = [
    { id: 1, title: 'Love You Forever', artist: 'Your Heart', duration: 214, note: 'This is how I feel about you' },
    { id: 2, title: 'Our Song', artist: 'Two Hearts', duration: 198, note: 'Our special memory in music' },
    { id: 3, title: 'Beautiful Smile', artist: 'Always', duration: 187, note: 'Every time I see your smile' },
    { id: 4, title: 'Pink Skies', artist: 'Sunset Dreams', duration: 210, note: 'Like our romantic moments' },
    { id: 5, title: 'Forever Yours', artist: 'True Love', duration: 195, note: 'That\'s what we are' },
];

// Sample love letters
const loveLetters = [
    {
        id: 1,
        subject: 'Why You Make Me Happy',
        text: 'Every day with you is a new adventure. You bring light to my world that I never knew existed. Your laugh is my favorite sound, and your presence is my greatest comfort. Thank you for being you.'
    },
    {
        id: 2,
        subject: 'My Forever Promise',
        text: 'I promise to love you through every season of life. I promise to hold your hand when things get tough, to celebrate with you when life is beautiful, and to never stop cherishing you. You are my greatest gift.'
    },
    {
        id: 3,
        subject: 'Thank You',
        text: 'Thank you for changing my life in the most beautiful way. You\'ve shown me what true love feels like. You inspire me to be a better person every single day. I am so grateful for you.'
    },
    {
        id: 4,
        subject: 'Our Story',
        text: 'Our story is my favorite story. Every chapter with you is filled with love, laughter, and unforgettable moments. I can\'t wait to see what our next chapters hold. Forever with you feels like forever isn\'t long enough.'
    }
];

// Timeline events
const timelineEvents = [
    {
        year: 2024,
        month: 'January',
        title: 'We Met',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect fill="%23ffb6d9" width="200" height="150"/><text x="50%" y="50%" font-size="20" fill="white" text-anchor="middle" dy=".3em">First Meeting</text></svg>',
        story: 'The beginning of everything. One glance and my heart knew it had found its match. You smiled and I was completely lost in that smile.'
    },
    {
        year: 2024,
        month: 'February',
        title: 'First I Love You',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect fill="%23dda0dd" width="200" height="150"/><text x="50%" y="50%" font-size="18" fill="white" text-anchor="middle" dy=".3em">Love Confession</text></svg>',
        story: 'Under the stars, with trembling words, I finally said it: I love you. And you said it back, making my dreams come true.'
    },
    {
        year: 2024,
        month: 'March',
        title: 'We Became Forever',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect fill="%23ffc0d9" width="200" height="150"/><text x="50%" y="50%" font-size="16" fill="white" text-anchor="middle" dy=".3em">Forever Together</text></svg>',
        story: 'You became my forever. Every day since then has been better than the last because I get to spend it with you.'
    },
    {
        year: 2025,
        month: 'February',
        title: 'This Very Moment',
        image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect fill="%23f0e6f0" width="200" height="150"/><text x="50%" y="50%" font-size="16" fill="white" text-anchor="middle" dy=".3em">Love System</text></svg>',
        story: 'I created this digital world just for you. A love letter made in pixels and code. A game where you always win my heart.'
    }
];

// ========== UTILITY FUNCTIONS ==========

/**
 * Play sound effect
 */
function playSound(type) {
    if (!config.soundEnabled) return;

    // Create audio context for retro sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    let frequency, duration;
    switch (type) {
        case 'click':
            frequency = 800;
            duration = 0.1;
            break;
        case 'open':
            frequency = 600;
            duration = 0.15;
            break;
        case 'close':
            frequency = 400;
            duration = 0.1;
            break;
        case 'success':
            frequency = 1000;
            duration = 0.2;
            break;
        case 'error':
            frequency = 300;
            duration = 0.15;
            break;
        case 'achievement':
            frequency = 1200;
            duration = 0.3;
            break;
        default:
            return;
    }

    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.3 * config.volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

/**
 * Create confetti effect
 */
function createConfetti(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 50) {
    const container = document.getElementById('particleContainer');
    const confettiPieces = ['❤️', '💕', '💗', '💖', '✨', '⭐', '💫'];

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle confetti';
        particle.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        particle.style.setProperty('--ty', Math.random() * 300 + 'px');

        container.appendChild(particle);

        setTimeout(() => particle.remove(), 3000);
    }
}

/**
 * Save data to localStorage
 */
function saveData() {
    localStorage.setItem('loveSystemConfig', JSON.stringify(config));
}

/**
 * Load data from localStorage
 */
function loadData() {
    const saved = localStorage.getItem('loveSystemConfig');
    if (saved) {
        Object.assign(config, JSON.parse(saved));
    }
}

/**
 * Format time (seconds to MM:SS)
 */
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * Get random position for floating element
 */
function getRandomPosition() {
    const container = document.getElementById('desktop');
    const maxX = container.offsetWidth - 400;
    const maxY = container.offsetHeight - 300;
    return {
        x: Math.random() * maxX + 50,
        y: Math.random() * maxY + 100
    };
}

/**
 * Show achievement
 */
function showAchievement(title, icon = '🏆') {
    const popup = document.getElementById('achievementPopup');
    const text = popup.querySelector('.achievement-text');
    const iconEl = popup.querySelector('.achievement-icon');

    iconEl.textContent = icon;
    text.textContent = title;
    popup.classList.remove('hidden');
    playSound('achievement');

    setTimeout(() => {
        popup.classList.add('hidden');
    }, 4000);
}

/**
 * Unlock achievement
 */
function unlockAchievement(key, title, icon) {
    if (!config.achievements[key]) {
        config.achievements[key] = true;
        showAchievement(title, icon);
        saveData();
    }
}

// ========== WINDOW MANAGEMENT ==========

class WindowManager {
    constructor() {
        this.windows = [];
        this.zIndex = 100;
        this.minimized = [];
    }

    /**
     * Create new window
     */
    createWindow(type, title, content) {
        const template = document.getElementById('windowTemplate');
        const windowEl = template.content.cloneNode(true);
        const window = windowEl.querySelector('.window');

        window.dataset.windowType = type;
        window.querySelector('.window-title').textContent = title;
        window.querySelector('.window-content').appendChild(content);

        // Set random position
        const pos = getRandomPosition();
        window.style.left = pos.x + 'px';
        window.style.top = pos.y + 'px';

        // Add window to container
        const container = document.getElementById('windowsContainer');
        container.appendChild(window);

        // Setup window controls
        this.setupWindowControls(container.querySelector('.window:last-child'));
        this.windows.push(container.querySelector('.window:last-child'));

        playSound('open');
        return container.querySelector('.window:last-child');
    }

    /**
     * Setup window controls (minimize, maximize, close)
     */
    setupWindowControls(windowEl) {
        const closeBtn = windowEl.querySelector('.close-btn');
        const minimizeBtn = windowEl.querySelector('.minimize-btn');
        const maximizeBtn = windowEl.querySelector('.maximize-btn');
        const header = windowEl.querySelector('.window-header');

        // Close button
        closeBtn.addEventListener('click', () => {
            windowEl.remove();
            this.windows = this.windows.filter(w => w !== windowEl);
            playSound('close');
        });

        // Minimize button
        minimizeBtn.addEventListener('click', () => {
            windowEl.classList.toggle('minimized');
            playSound('click');
        });

        // Maximize button
        maximizeBtn.addEventListener('click', () => {
            windowEl.classList.toggle('maximized');
            if (windowEl.classList.contains('maximized')) {
                windowEl.style.width = '80%';
                windowEl.style.height = '70%';
                windowEl.style.left = '10%';
                windowEl.style.top = '15%';
            } else {
                windowEl.style.width = 'auto';
                windowEl.style.height = 'auto';
            }
            playSound('click');
        });

        // Dragging - Support both mouse and touch events
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;

        // Function to start dragging
        const startDrag = (clientX, clientY) => {
            isDragging = true;
            initialX = clientX - windowEl.offsetLeft;
            initialY = clientY - windowEl.offsetTop;
            windowEl.style.zIndex = ++this.zIndex;
            header.style.cursor = 'grabbing';
        };

        // Function to move window
        const moveDrag = (clientX, clientY) => {
            if (isDragging) {
                currentX = clientX - initialX;
                currentY = clientY - initialY;
                
                // Constrain to viewport
                const desktop = document.getElementById('desktop');
                if (desktop) {
                    const maxX = desktop.offsetWidth - windowEl.offsetWidth;
                    const maxY = desktop.offsetHeight - windowEl.offsetHeight;
                    
                    currentX = Math.max(0, Math.min(currentX, maxX));
                    currentY = Math.max(0, Math.min(currentY, maxY));
                }
                
                windowEl.style.left = currentX + 'px';
                windowEl.style.top = currentY + 'px';
            }
        };

        // Function to end dragging
        const endDrag = () => {
            isDragging = false;
            header.style.cursor = 'move';
        };

        // Mouse events
        header.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startDrag(e.clientX, e.clientY);
        });

        document.addEventListener('mousemove', (e) => {
            moveDrag(e.clientX, e.clientY);
        });

        document.addEventListener('mouseup', endDrag);

        // Touch events for mobile
        header.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (e.touches.length > 0) {
                startDrag(e.touches[0].clientX, e.touches[0].clientY);
            }
        });

        document.addEventListener('touchmove', (e) => {
            if (isDragging) {
                e.preventDefault();
                if (e.touches.length > 0) {
                    moveDrag(e.touches[0].clientX, e.touches[0].clientY);
                }
            }
        }, { passive: false });

        document.addEventListener('touchend', endDrag);
    }

    /**
     * Close all windows
     */
    closeAllWindows() {
        this.windows.forEach(w => w.remove());
        this.windows = [];
    }
}

// ========== PORTRAIT GENERATOR ==========

function generatePortraitText(width = 40, height = 30) {
    // Create ASCII-like art text pattern for portrait display
    const chars = ['█', '▓', '▒', '░', ' ', '•', '◯'];
    let text = '';
    
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // Create a pattern that will show behind the background image
            const value = Math.sin(x * 0.1 + y * 0.1) * 0.5 + 0.5;
            text += chars[Math.floor(value * chars.length)];
        }
        text += '\n';
    }
    return text;
}

// ========== MEMORIES WINDOW ==========

class MemoriesWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
        this.currentIndex = 0;
        this.isSlideshow = false;
    }

    create() {
        const template = document.getElementById('memoriesTemplate');
        const content = template.content.cloneNode(true);

        // Update with first memory
        this.updateMemoryDisplay(content, 0);

        // Event listeners
        content.querySelector('.prev-btn').addEventListener('click', () => this.previousMemory(content));
        content.querySelector('.next-btn').addEventListener('click', () => this.nextMemory(content));
        content.querySelector('.slideshow-btn').addEventListener('click', () => this.toggleSlideshow(content));
        content.querySelector('.thumbnail-btn').addEventListener('click', () => this.toggleThumbnails(content));

        // Create window
        const wrapper = document.createElement('div');
        wrapper.appendChild(content);
        this.windowManager.createWindow('memories', '📸 Our Memories', wrapper);

        playSound('open');
        unlockAchievement('memories_opened', 'Memory Explorer', '📸');

        return wrapper;
    }

    updateMemoryDisplay(content, index) {
        const memory = memoriesData[index];
        content.querySelector('.memory-image').src = memory.image;
        content.querySelector('.memory-date').textContent = memory.date;
        content.querySelector('.memory-description').textContent = memory.description;
        content.querySelector('.memory-note').textContent = memory.note;
        content.querySelector('.photo-counter').textContent = `${index + 1} / ${memoriesData.length}`;

        // Create confetti
        createConfetti(0, 0, 10);
    }

    previousMemory(content) {
        this.currentIndex = (this.currentIndex - 1 + memoriesData.length) % memoriesData.length;
        this.updateMemoryDisplay(content, this.currentIndex);
        playSound('click');
    }

    nextMemory(content) {
        this.currentIndex = (this.currentIndex + 1) % memoriesData.length;
        this.updateMemoryDisplay(content, this.currentIndex);
        playSound('click');
    }

    toggleSlideshow(content) {
        this.isSlideshow = !this.isSlideshow;
        const btn = content.querySelector('.slideshow-btn');
        btn.textContent = this.isSlideshow ? '⏸ Stop' : '▶ Slideshow';

        if (this.isSlideshow) {
            const interval = setInterval(() => {
                if (!this.isSlideshow) {
                    clearInterval(interval);
                    return;
                }
                this.nextMemory(content);
            }, 3000);
        }
        playSound('click');
    }

    toggleThumbnails(content) {
        const grid = content.querySelector('.thumbnails-grid');
        grid.classList.toggle('hidden');

        if (!grid.classList.contains('hidden')) {
            grid.innerHTML = '';
            memoriesData.forEach((memory, index) => {
                const thumb = document.createElement('div');
                thumb.className = 'thumbnail' + (index === this.currentIndex ? ' active' : '');
                thumb.innerHTML = `<img src="${memory.image}">`;
                thumb.addEventListener('click', () => {
                    this.currentIndex = index;
                    this.updateMemoryDisplay(content, index);
                    grid.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
                grid.appendChild(thumb);
            });
        }
        playSound('click');
    }
}

// ========== PAINTING WINDOW ==========

class PaintingWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
        this.portraitImage = 'portrait.jpg'; // User will add this file
    }

    create() {
        const template = document.getElementById('paintingTemplate');
        const content = template.content.cloneNode(true);

        const portraitDisplay = content.querySelector('.portrait-text');
        
        // Generate portrait text pattern
        const portraitText = generatePortraitText(45, 35);
        portraitDisplay.textContent = portraitText;
        
        // Apply background image styling
        // User will add 'wawers.jpg' to the folder
        portraitDisplay.style.backgroundImage = `url('wawers.jpg')`;
        portraitDisplay.style.backgroundSize = 'cover';
        portraitDisplay.style.backgroundPosition = 'center';
        portraitDisplay.style.backgroundRepeat = 'no-repeat';

        // Create window
        const wrapper = document.createElement('div');
        wrapper.appendChild(content);
        this.windowManager.createWindow('painting', '🎨 My Painting', wrapper);

        playSound('open');
        unlockAchievement('painting_viewed', 'Art Lover', '🎨');

        return wrapper;
    }
}

// ========== PLAYLIST WINDOW ==========

class PlaylistWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
        this.currentTrack = 0;
        this.isPlaying = false;
        this.currentTime = 0;
        this.animationId = null;
    }

    create() {
        const template = document.getElementById('playlistTemplate');
        const content = template.content.cloneNode(true);

        // Create song list
        const songsContainer = content.querySelector('.songs-container');
        playlistData.forEach((song, index) => {
            const songEl = document.createElement('div');
            songEl.className = 'song-item' + (index === 0 ? ' active' : '');
            songEl.innerHTML = `
                <span class="song-name">${song.title}</span>
                <span class="song-note">${song.note}</span>
            `;
            songEl.addEventListener('click', () => this.selectTrack(index, content));
            songsContainer.appendChild(songEl);
        });

        // Event listeners
        content.querySelector('.play-pause-btn').addEventListener('click', () => this.togglePlayPause(content));
        content.querySelector('.prev-track-btn').addEventListener('click', () => this.prevTrack(content));
        content.querySelector('.next-track-btn').addEventListener('click', () => this.nextTrack(content));
        content.querySelector('.volume-slider').addEventListener('change', (e) => {
            config.musicPreference = e.target.value / 100;
            saveData();
        });

        const progressBar = content.querySelector('.progress-bar');
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            this.currentTime = percent * playlistData[this.currentTrack].duration;
            this.updateProgress(content);
        });

        // Create window
        const wrapper = document.createElement('div');
        wrapper.appendChild(content);
        this.windowManager.createWindow('playlist', '🎵 Gavorotte Playlist', wrapper);

        this.updateTrackDisplay(content);
        playSound('open');
        unlockAchievement('playlist_opened', 'Playlist Listener', '🎵');

        return wrapper;
    }

    updateTrackDisplay(content) {
        const song = playlistData[this.currentTrack];
        content.querySelector('.song-title').textContent = song.title;

        // Update active song in list
        content.querySelectorAll('.song-item').forEach((el, i) => {
            el.classList.toggle('active', i === this.currentTrack);
        });

        playSound('click');
    }

    selectTrack(index, content) {
        this.currentTrack = index;
        this.currentTime = 0;
        this.isPlaying = false;
        this.updateTrackDisplay(content);
        this.updateProgress(content);
    }

    togglePlayPause(content) {
        this.isPlaying = !this.isPlaying;
        const btn = content.querySelector('.play-pause-btn');
        btn.textContent = this.isPlaying ? '⏸' : '▶';

        if (this.isPlaying) {
            this.simulatePlayback(content);
        }
        playSound('click');
    }

    prevTrack(content) {
        this.currentTrack = (this.currentTrack - 1 + playlistData.length) % playlistData.length;
        this.selectTrack(this.currentTrack, content);
        this.isPlaying = false;
        content.querySelector('.play-pause-btn').textContent = '▶';
    }

    nextTrack(content) {
        this.currentTrack = (this.currentTrack + 1) % playlistData.length;
        this.selectTrack(this.currentTrack, content);
        this.isPlaying = false;
        content.querySelector('.play-pause-btn').textContent = '▶';
    }

    simulatePlayback(content) {
        const startTime = Date.now() - (this.currentTime * 1000);

        const animate = () => {
            if (!this.isPlaying) return;

            this.currentTime = (Date.now() - startTime) / 1000;
            const song = playlistData[this.currentTrack];

            if (this.currentTime >= song.duration) {
                this.nextTrack(content);
                if (this.isPlaying) {
                    this.simulatePlayback(content);
                }
                return;
            }

            this.updateProgress(content);
            this.animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    updateProgress(content) {
        const song = playlistData[this.currentTrack];
        const percent = (this.currentTime / song.duration) * 100;

        content.querySelector('.progress-fill').style.width = percent + '%';
        content.querySelector('.progress-handle').style.left = percent + '%';
        content.querySelector('.current-time').textContent = formatTime(this.currentTime);
        content.querySelector('.duration-time').textContent = formatTime(song.duration);
    }
}

// ========== LOVE LETTERS WINDOW ==========

class LettersWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
    }

    create() {
        const template = document.getElementById('lettersTemplate');
        const content = template.content.cloneNode(true);

        const container = content.querySelector('.envelopes-container');
        loveLetters.forEach((letter, index) => {
            const envelope = this.createEnvelope(letter, content);
            container.appendChild(envelope);
        });

        // Create window
        const wrapper = document.createElement('div');
        wrapper.appendChild(content);
        this.windowManager.createWindow('letters', '💌 Love Letters', wrapper);

        playSound('open');
        unlockAchievement('letters_opened', 'Love Reader', '💌');

        return wrapper;
    }

    createEnvelope(letter, content) {
        const envelope = document.createElement('div');
        envelope.className = 'envelope';
        envelope.innerHTML = `
            <div class="envelope-front">
                <div class="envelope-heart">💌</div>
            </div>
        `;

        envelope.addEventListener('click', () => {
            envelope.classList.add('opened');
            this.showLetter(letter, content);
            playSound('success');
        });

        return envelope;
    }

    showLetter(letter, content) {
        const display = content.querySelector('.letter-display');
        const letterText = content.querySelector('.letter-text');

        display.classList.remove('hidden');

        // Typewriter effect
        letterText.textContent = '';
        let index = 0;
        const text = letter.text;

        const typeWriter = () => {
            if (index < text.length) {
                letterText.textContent += text[index];
                index++;
                setTimeout(typeWriter, 30);
            }
        };

        typeWriter();

        const replyBtn = content.querySelector('.reply-btn');
        replyBtn.onclick = () => {
            const response = 'I love you too, more than words can express. Forever yours. 💕';
            letterText.textContent = response;
            replyBtn.textContent = 'Read Again 💌';
            createConfetti(window.innerWidth / 2, window.innerHeight / 2, 30);
            playSound('success');
        };
    }
}

// ========== MINI GAMES WINDOW ==========

class GamesWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
        this.currentGame = null;
    }

    create() {
        const template = document.getElementById('gamesTemplate');
        const content = template.content.cloneNode(true);

        const gameCards = content.querySelectorAll('.game-card');
        gameCards.forEach(card => {
            card.addEventListener('click', () => {
                const game = card.dataset.game;
                this.launchGame(game);
                playSound('click');
            });
        });

        const wrapper = document.createElement('div');
        wrapper.appendChild(content);
        this.windowManager.createWindow('games', '🎮 Mini Games', wrapper);

        playSound('open');

        return wrapper;
    }

    launchGame(game) {
        const board = document.getElementById(`gameBoard-${game}`);
        board.classList.remove('hidden');

        // Reset and start game
        switch (game) {
            case 'hearts':
                this.startHeartsGame();
                break;
            case 'memory':
                this.startMemoryGame();
                break;
            case 'wordle':
                this.startWordleGame();
                break;
        }

        // Back button
        board.querySelector('.game-back-btn').addEventListener('click', () => {
            board.classList.add('hidden');
            playSound('click');
        });
    }

    startHeartsGame() {
        // Improved strawberry-catching with spawn cap to avoid overwhelming the DOM
        const container = document.querySelector('.hearts-game-container');
        const scoreEl = document.querySelector('#gameBoard-hearts .score');
        let score = 0;
        let timeLeft = 30;

        container.innerHTML = '';
        scoreEl.textContent = 0;

        const maxOnScreen = 8;
        let spawnInterval = null;

        const createBerry = () => {
            if (!container) return;
            if (container.childElementCount >= maxOnScreen) return;

            const berry = document.createElement('div');
            berry.className = 'falling-berry';
            berry.textContent = '🍓';
            berry.style.left = Math.random() * Math.max(0, container.offsetWidth - 30) + 'px';
            berry.style.top = '-30px';

            let y = -30;
            const speed = 1 + Math.random() * 2;

            const fall = () => {
                y += speed;
                berry.style.top = y + 'px';

                if (y > container.offsetHeight) {
                    berry.remove();
                    return;
                }
                requestAnimationFrame(fall);
            };

            berry.addEventListener('click', (e) => {
                e.stopPropagation();
                score++;
                scoreEl.textContent = score;
                berry.remove();
                playSound('success');
                createConfetti(e.clientX, e.clientY, 6);
            });

            container.appendChild(berry);
            requestAnimationFrame(fall);
        };

        const timerInterval = setInterval(() => {
            timeLeft--;
            document.querySelector('#gameBoard-hearts .timer').textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                clearInterval(spawnInterval);
                playSound('success');
                alert(`Game Over! Final Score: ${score}`);
                config.gameScores['hearts'] = score;
                saveData();
            }
        }, 1000);

        spawnInterval = setInterval(() => {
            createBerry();
        }, 700);
    }

    startMemoryGame() {
        const container = document.querySelector('.memory-game-container');
        const matchesEl = document.querySelector('#gameBoard-memory .matches');
        let matches = 0;
        let firstCard = null;
        let canFlip = true;

        container.innerHTML = '';

        const pairs = [...memoriesData.slice(0, 6), ...memoriesData.slice(0, 6)];
        pairs.sort(() => Math.random() - 0.5);

        pairs.forEach((memory, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.index = index;
            card.dataset.id = memory.id;

            card.addEventListener('click', () => {
                if (!canFlip || card.classList.contains('flipped') || card.classList.contains('matched')) {
                    return;
                }

                card.classList.add('flipped');
                card.textContent = '💕';
                playSound('click');

                if (!firstCard) {
                    firstCard = card;
                } else {
                    canFlip = false;

                    if (firstCard.dataset.id === card.dataset.id) {
                        matches++;
                        matchesEl.textContent = matches;
                        firstCard.classList.add('matched');
                        card.classList.add('matched');
                        playSound('success');
                        createConfetti(0, 0, 10);

                        if (matches === 6) {
                            setTimeout(() => {
                                playSound('success');
                                alert('You Won! Perfect Memory! 💕');
                                config.gameScores['memory'] = 100;
                                saveData();
                            }, 500);
                        }

                        firstCard = null;
                        canFlip = true;
                    } else {
                        setTimeout(() => {
                            firstCard.classList.remove('flipped');
                            card.classList.remove('flipped');
                            firstCard.textContent = '';
                            card.textContent = '';
                            firstCard = null;
                            canFlip = true;
                        }, 500);
                    }
                }
            });

            container.appendChild(card);
        });
    }

    startWordleGame() {
        // When Give Up is clicked, show the special modal with 3 boxes for YES
        const giveUpBtn = document.getElementById('giveUpBtn');
        const wordleMessage = document.getElementById('wordleMessage');

        if (wordleMessage) wordleMessage.classList.add('hidden');

        if (giveUpBtn) {
            giveUpBtn.addEventListener('click', () => {
                // show modal content
                if (wordleMessage) {
                    wordleMessage.classList.remove('hidden');
                    wordleMessage.innerHTML = `
                        <div class="wordle-modal">
                            <h2>Will you be my Valentine?</h2>
                            <p>Type your answer below (3 boxes):</p>
                            <div class="yes-inputs">
                                <input maxlength="1" class="yes-box" data-index="0">
                                <input maxlength="1" class="yes-box" data-index="1">
                                <input maxlength="1" class="yes-box" data-index="2">
                            </div>
                            <div class="wordle-actions">
                                <button id="submitYes" class="pixel-button">Submit</button>
                            </div>
                        </div>
                    `;

                    // Prefill and highlight YES as hint
                    setTimeout(() => {
                        const boxes = document.querySelectorAll('.yes-box');
                        if (boxes && boxes.length === 3) {
                            boxes[0].value = '';
                            boxes[1].value = '';
                            boxes[2].value = '';
                            boxes.forEach((b, i) => {
                                b.addEventListener('input', () => {
                                    // auto focus next
                                    const next = boxes[i + 1];
                                    if (next && b.value.length) next.focus();
                                });
                            });

                            const submit = document.getElementById('submitYes');
                            if (submit) submit.addEventListener('click', () => {
                                const v = Array.from(boxes).map(b => b.value.toUpperCase()).join('');
                                if (v === 'YES') {
                                    wordleMessage.innerHTML = `
                                        <p>It was my pleasure having you as my Valentine</p>
                                        <a class="pixel-button" id="surpriseLink" href="#">Click here for surprise</a>
                                    `;
                                } else {
                                    // highlight correct letters
                                    boxes.forEach((b, i) => {
                                        if ('YES'[i] === b.value.toUpperCase()) {
                                            b.style.background = '#8ff7a8';
                                        } else {
                                            b.style.background = '#eee';
                                        }
                                    });
                                }
                            });
                        }
                    }, 50);
                }
            });
        }
    }
}

// ========== TIMELINE WINDOW ==========

class TimelineWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
    }

    create() {
        const template = document.getElementById('timelineTemplate');
        const content = template.content.cloneNode(true);

        const eventsContainer = content.querySelector('.timeline-events');
        timelineEvents.forEach((event, index) => {
            const eventEl = document.createElement('div');
            eventEl.className = 'timeline-event';
            eventEl.innerHTML = `
                <div class="event-year">${event.year}</div>
                <div class="event-title">${event.title}</div>
            `;

            eventEl.addEventListener('click', () => {
                this.showDetail(event, content);
                playSound('click');
            });

            eventsContainer.appendChild(eventEl);
        });

        const wrapper = document.createElement('div');
        wrapper.appendChild(content);
        this.windowManager.createWindow('timeline', '🗓️ Our Timeline', wrapper);

        playSound('open');
        unlockAchievement('timeline_opened', 'Timeline Explorer', '🗓️');

        return wrapper;
    }

    showDetail(event, content) {
        const detail = content.querySelector('.timeline-detail');
        detail.classList.remove('hidden');

        detail.querySelector('.detail-image').src = event.image;
        detail.querySelector('.detail-title').textContent = `${event.month} ${event.year} - ${event.title}`;
        detail.querySelector('.detail-story').textContent = event.story;

        detail.querySelector('.back-btn').addEventListener('click', () => {
            detail.classList.add('hidden');
            playSound('click');
        });

        createConfetti(0, 0, 15);
    }
}

// ========== SECRET FOLDER WINDOW ==========

class SecretWindow {
    constructor(windowManager) {
        this.windowManager = windowManager;
        this.correctPassword = '2612'; // February 12th
    }

    create() {
        const template = document.getElementById('secretTemplate');
        const content = template.content.cloneNode(true);

        const submitBtn = content.querySelector('.secret-submit-btn');
        const input = content.querySelector('.secret-input');

        submitBtn.addEventListener('click', () => {
            this.checkPassword(input.value, content);
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkPassword(input.value, content);
            }
        });

        const wrapper = document.createElement('div');
        wrapper.appendChild(content);
        this.windowManager.createWindow('secret', '🔐 Secret Folder', wrapper);

        playSound('open');

        return wrapper;
    }

    checkPassword(password, content) {
        const errorEl = content.querySelector('.secret-error');
        const inputContainer = content.querySelector('.secret-input-container');
        const messageContainer = content.querySelector('.secret-message');

        if (password === this.correctPassword) {
            playSound('success');
            inputContainer.classList.add('hidden');
            messageContainer.classList.remove('hidden');

            content.querySelector('.revealed-text').textContent = `
            Will you be my Valentine forever? 💕
            
            With this digital love system, I want you to know that my love for you is as infinite as the digital world. 
            Every pixel, every animation, every detail was crafted with you in my heart.
            
            You make every day special. You make every moment meaningful.
            Let's continue writing our story together.
            `;

            const valentineBtn = content.querySelector('.valentine-prompt-btn');
            valentineBtn.addEventListener('click', () => {
                playSound('success');
                createConfetti(window.innerWidth / 2, window.innerHeight / 2, 100);
                alert('Forever yours, my love. Happy Valentine\'s Day! 💕');
                unlockAchievement('secret_unlocked', 'Secret Revealed', '🔐');
                showFinalSurprise();
            });
        } else {
            playSound('error');
            errorEl.classList.remove('hidden');
            errorEl.textContent = 'Wrong password! Think of our special date... 💭';
            setTimeout(() => {
                errorEl.classList.add('hidden');
            }, 3000);
        }
    }
}

// ========== MAIN APPLICATION CONTROLLER ==========

class LoveSystem {
    constructor() {
        this.windowManager = new WindowManager();
        this.openFolders = {};
    }

    init() {
        loadData();
        this.setupEventListeners();
        this.setupClock();
        this.setupEasterEgg();
    }

    setupEventListeners() {
        // Landing page
        document.getElementById('playBtn').addEventListener('click', () => {
            this.startGame();
        });

        // Desktop icons
        document.querySelectorAll('.desktop-icon').forEach(icon => {
            icon.addEventListener('click', () => {
                const folder = icon.dataset.folder;
                this.openFolder(folder);
                playSound('click');
            });
        });

        // Sound toggle
        document.getElementById('soundToggle').addEventListener('click', () => {
            config.soundEnabled = !config.soundEnabled;
            document.getElementById('soundToggle').textContent = config.soundEnabled ? '🔊' : '🔇';
            saveData();
            playSound('click');
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            config.darkTheme = !config.darkTheme;
            document.body.classList.toggle('dark-theme', config.darkTheme);
            saveData();
            playSound('click');
        });

        // Glitch effect
        document.getElementById('glitchEffect').addEventListener('click', () => {
            document.body.style.filter = 'blur(2px)';
            setTimeout(() => {
                document.body.style.filter = 'blur(0)';
            }, 100);
            createConfetti(window.innerWidth / 2, window.innerHeight / 2, 30);
            playSound('click');
        });

        // Start button
        document.getElementById('startBtn').addEventListener('click', () => {
            alert('Welcome to Our Love System! Double-click folders to open them.');
            playSound('click');
        });
    }

    setupClock() {
        const clock = document.getElementById('clockDisplay');
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            clock.textContent = `${hours}:${minutes}:${seconds}`;
        };
        updateClock();
        setInterval(updateClock, 1000);
    }

    setupEasterEgg() {
        const desktop = document.getElementById('desktop');
        let clickCount = 0;

        desktop.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 3) {
                this.revealEasterEgg();
                clickCount = 0;
            }
        });
    }

    setupHotWheels() {
        const tires = document.querySelectorAll('#tiresPanel .tire');
        const messageTab = document.getElementById('messageTab');
        const messageContent = document.getElementById('messageContent');
        const tabClose = document.getElementById('tabClose');
        const tiresPanel = document.getElementById('tiresPanel');

        if (!tires || tires.length === 0) return;

        const hideMessage = (tireEl) => {
            if (messageTab) messageTab.classList.add('hidden');
            if (tiresPanel) tiresPanel.classList.add('centered');
            if (tireEl) tireEl.classList.add('read');
        };

        const showMessage = (html) => {
            if (messageContent) messageContent.innerHTML = html;
            if (messageTab) messageTab.classList.remove('hidden');
            if (tiresPanel) tiresPanel.classList.remove('centered');
        };

        tires.forEach(tire => {
            tire.addEventListener('click', (e) => {
                const id = tire.dataset.tire;

                if (id === '1') {
                    const html = `
                        <div class="msg-header"><button class="msg-back">←</button><h2>SONGS FOR YOU</h2></div>
                        <div class="spotify-list">
                          <div class="song">1. Wanna Be Yours - Arctic Monkeys</div>
                          <div class="song">2. Best Part - Daniel Caesar</div>
                          <div class="song">3. Valentine - Laufey</div>
                        </div>
                    `;
                    showMessage(html);
                }

                if (id === '2') {
                    const html = `
                        <div class="msg-header"><button class="msg-back">←</button><h2>LETTER FROM ME</h2></div>
                        <div class="letter-body">
                          <p>My dearest,</p>
                          <p>Everything I write here is from the heart. You make me better every day.</p>
                          <p>Always yours, ❤️</p>
                        </div>
                        <audio id="museoAudio" src="assets/museo.mp3" preload="auto"></audio>
                        <div class="audio-controls"><button id="playMuseo" class="pixel-button">Play Music</button></div>
                    `;
                    showMessage(html);

                    setTimeout(() => {
                        const playBtn = document.getElementById('playMuseo');
                        const audio = document.getElementById('museoAudio');
                        if (playBtn && audio) {
                            playBtn.addEventListener('click', () => {
                                audio.volume = 0.6;
                                audio.play().catch(() => {});
                            });
                        }
                    }, 50);
                }

                if (id === '3') {
                    const html = `
                        <div class="msg-header"><button class="msg-back">←</button><h2>FLOWERS FOR U M'Lady</h2></div>
                        <div class="bouquet">🌹🌹🌹<br/>🌹🌹🌹<br/>🌹🌹🌹</div>
                    `;
                    showMessage(html);
                }

                if (id === '4') {
                    const html = `
                        <div class="msg-header"><button class="msg-back">←</button><h2>GAMES</h2></div>
                        <div class="play-game">
                          <p>Open the mini-games to play Catch the Strawberries.</p>
                          <button id="openStrawberry" class="pixel-button">Play Strawberries</button>
                        </div>
                    `;
                    showMessage(html);

                    setTimeout(() => {
                        const openBtn = document.getElementById('openStrawberry');
                        if (openBtn) openBtn.addEventListener('click', () => {
                            this.openFolder('games');
                            // wait a moment and click the strawberries card
                            setTimeout(() => {
                                const card = document.querySelector('.game-card[data-game="hearts"]');
                                if (card) card.click();
                            }, 300);
                        });
                    }, 50);
                }

                // back handler
                setTimeout(() => {
                    const back = document.querySelector('.msg-back');
                    if (back) {
                        back.addEventListener('click', () => {
                            hideMessage(tire);
                        });
                    }
                }, 50);
            });
        });

        if (tabClose) tabClose.addEventListener('click', () => {
            // mark all tires as read and center
            document.querySelectorAll('#tiresPanel .tire').forEach(t => t.classList.add('read'));
            if (messageTab) messageTab.classList.add('hidden');
            if (tiresPanel) tiresPanel.classList.add('centered');
        });
    }

    revealEasterEgg() {
        const easterEgg = document.getElementById('easterEggHeart');
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);

        easterEgg.style.left = x + 'px';
        easterEgg.style.top = y + 'px';
        easterEgg.classList.remove('hidden');
        easterEgg.style.opacity = '1';

        easterEgg.addEventListener('click', () => {
            playSound('success');
            createConfetti(x, y, 50);
            showAchievement('Hidden Love Found!', '❤️');
        });

        setTimeout(() => {
            easterEgg.classList.add('hidden');
        }, 5000);
    }

    startGame() {
        const loading = document.getElementById('loadingScreen');
        loading.classList.remove('hidden');
        playSound('click');

        const progressEl = document.querySelector('.loading-progress');
        const carEl = document.querySelector('.f1-car');
        const trackEl = document.querySelector('.f1-track');

        let progress = 0;
        if (progressEl) progressEl.style.width = '0%';
        if (carEl) carEl.style.left = '0px';

        const interval = setInterval(() => {
            // increment progress with slight randomness
            progress = Math.min(100, progress + Math.floor(Math.random() * 4) + 1);
            if (progressEl) progressEl.style.width = progress + '%';

            // move car along track
            if (carEl && trackEl) {
                const trackW = Math.max(1, trackEl.clientWidth - carEl.clientWidth - 4);
                carEl.style.left = Math.round((progress / 100) * trackW) + 'px';
            }

            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    document.getElementById('landingPage').classList.add('hidden');
                    loading.classList.add('hidden');
                    document.getElementById('desktopSystem').classList.remove('hidden');

                    // Apply saved theme
                    document.body.classList.toggle('dark-theme', config.darkTheme);

                    // Start background music
                    const bgMusic = document.getElementById('bgMusic');
                    bgMusic.volume = config.musicPreference;
                    bgMusic.play().catch(() => {
                        console.log('Audio playback prevented by browser');
                    });

                    // Initialize Hot Wheels interactions
                    this.setupHotWheels();
                }, 400);
            }
        }, 60);
    }

    openFolder(folderType) {
        if (this.openFolders[folderType]) return;

        let window;
        switch (folderType) {
            case 'memories':
                window = new MemoriesWindow(this.windowManager).create();
                break;
            case 'playlist':
                window = new PlaylistWindow(this.windowManager).create();
                break;
            case 'letters':
                window = new LettersWindow(this.windowManager).create();
                break;
            case 'games':
                window = new GamesWindow(this.windowManager).create();
                break;
            case 'timeline':
                window = new TimelineWindow(this.windowManager).create();
                break;
            case 'secret':
                window = new SecretWindow(this.windowManager).create();
                break;
            case 'painting':
                window = new PaintingWindow(this.windowManager).create();
                break;
        }

        this.openFolders[folderType] = true;

        // Cleanup on window close
        const windowEl = document.querySelector(`[data-window-type="${folderType}"]`);
        const observer = new MutationObserver(() => {
            if (!document.querySelector(`[data-window-type="${folderType}"]`)) {
                this.openFolders[folderType] = false;
                observer.disconnect();
            }
        });

        if (windowEl) {
            observer.observe(windowEl.parentElement, { childList: true });
        }
    }
}

/**
 * Show final surprise screen
 */
function showFinalSurprise() {
    const surprise = document.getElementById('finalSurprise');
    surprise.classList.remove('hidden');

    // Create fireworks
    createFireworks();

    const replayBtn = surprise.querySelector('.replay-btn');
    replayBtn.addEventListener('click', () => {
        location.reload();
    });
}

/**
 * Create fireworks effect
 */
function createFireworks() {
    const container = document.getElementById('fireworksContainer');
    const duration = 3000;
    const startTime = Date.now();

    const animate = () => {
        const elapsed = Date.now() - startTime;

        if (Math.random() > 0.9 && elapsed < duration) {
            const firework = document.createElement('div');
            firework.className = 'particle confetti';
            firework.textContent = ['✨', '💫', '⭐', '🎆', '💕', '❤️'][Math.floor(Math.random() * 6)];
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.top = Math.random() * (window.innerHeight / 2) + 'px';

            container.appendChild(firework);
            setTimeout(() => firework.remove(), 3000);
        }

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        }
    };

    animate();
}

// ========== INITIALIZE APPLICATION ==========

document.addEventListener('DOMContentLoaded', () => {
    const system = new LoveSystem();
    system.init();
});

// Prevent accidental page close
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
});
