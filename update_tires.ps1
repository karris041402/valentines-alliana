$content = Get-Content 'c:\xampp\htdocs\val\style.css' -Raw

# Replace tire styles  
$pattern = '\.tire \{\s+width: 100px;\s+height: 110px;\s+background: linear-gradient\(135deg, #ffeb3b 0%, #fdd835 50%, #f9a825 100%\);[^}]*?\.tire.read \{'
$replacement = '.tire {
    width: 100px;
    height: 110px;
    background: linear-gradient(180deg, #ffd54f 0%, #ffb300 100%);
    border: 3px solid #b8860b;
    border-radius: 6px;
    cursor: pointer;
    box-shadow:
        0 6px 0 #b8860b,
        0 10px 20px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10px;
    font-size: 9px;
    font-weight: bold;
    color: #2d2d2d;
    transition: all 0.2s ease;
    position: relative;
}
.tire::before {
    content: "";
    width: 50px;
    height: 50px;
    background: radial-gradient(circle at center, #444 30%, #111 60%);
    border: 4px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    box-shadow: inset 0 0 8px rgba(255,255,255,0.2);
}
.tire::after {
    content: "";
    width: 18px;
    height: 18px;
    background: #ccc;
    border-radius: 50%;
    position: absolute;
    top: 34px;
}
.tire:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow:
        0 10px 0 #b8860b,
        0 15px 25px rgba(0,0,0,0.6);
}
.tire.read {'

$regex = [System.Text.RegularExpressions.Regex]::new($pattern, [System.Text.RegularExpressions.RegexOptions]::Singleline)
$content = $regex.Replace($content, $replacement)

$content | Set-Content 'c:\xampp\htdocs\val\style.css'
Write-Host "✅ Tire styles updated successfully!"
