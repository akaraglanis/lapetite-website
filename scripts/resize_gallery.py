"""Resize images in assets/images/gallery/ in-place to max 1600px on the long edge."""
from pathlib import Path
from PIL import Image, ImageOps

GALLERY = Path(r"e:\Lessons\DevProject_laPetite\assets\images\gallery")
MAX_SIDE = 1600
JPEG_Q = 82
WEBP_Q = 82

def resize(p: Path) -> None:
    try:
        with Image.open(p) as im:
            im = ImageOps.exif_transpose(im)
            w, h = im.size
            if max(w, h) <= MAX_SIDE and p.stat().st_size < 800_000:
                print(f"SKIP {p.name} ({w}x{h}, {p.stat().st_size//1024}KB)")
                return
            scale = MAX_SIDE / max(w, h) if max(w, h) > MAX_SIDE else 1
            new = (round(w * scale), round(h * scale))
            if scale != 1:
                im = im.resize(new, Image.LANCZOS)
            ext = p.suffix.lower()
            if ext in (".jpg", ".jpeg"):
                if im.mode != "RGB":
                    im = im.convert("RGB")
                im.save(p, "JPEG", quality=JPEG_Q, optimize=True, progressive=True)
            elif ext == ".webp":
                im.save(p, "WEBP", quality=WEBP_Q, method=6)
            elif ext == ".png":
                im.save(p, "PNG", optimize=True)
        print(f"OK   {p.name} -> {im.size[0]}x{im.size[1]}, {p.stat().st_size//1024}KB")
    except Exception as e:
        print(f"FAIL {p.name}: {e}")

for f in sorted(GALLERY.iterdir()):
    if f.suffix.lower() in (".jpg", ".jpeg", ".webp", ".png"):
        resize(f)
