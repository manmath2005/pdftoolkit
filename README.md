# PDFToolkit 🌐

> **Your Documents, Your Privacy — Processed Locally, Delivered Instantly.**

An all-in-one, 100% private, client-side online document converter and PDF utility suite with 24+ tools.

**Developed with ❤️ by [Manmath Sangave](https://github.com/manmath2005)**

---

## 🚀 Key Features (24+ Tools Suite)

* **JPG / PNG to PDF**: Combine multiple photos into clean, formatted vector PDFs.
* **PDF to JPG / PNG**: Extract pages at high resolution as individual images or a ZIP archive.
* **PDF Merger**: Concatenate multiple PDF files into a single unified file.
* **PDF Splitter**: Extract specific page ranges (e.g. `1-3, 5`) into standalone PDFs.
* **Rotate PDF Pages**: Permanent 90°, 180°, 270° orientation fixes.
* **Sign PDF**: Draw or type signatures and stamp them onto any page.
* **Watermark PDF**: Add custom text watermarks with customizable opacity, rotation, and color.
* **Page Numbers**: Add headers and footers with custom page numbering schemes.
* **Redact & Blackout**: Censor sensitive text and confidential records with permanent blackout rectangles.
* **AI Document Scanner**: Real-time camera edge detection, auto-deskew, and auto-capture.
* **AI Document Digitizer (OCR)**: Extract text and reconstruct vector PDFs with table recognition.
* **Certificate Generator (8 Templates)**: Professional certificate generator with live canvas preview & signature photo background removal.
* **Word (.docx) to Text**: Instant client-side DOCX text extraction.
* **Text / Notes to PDF**: Compose notes and compile directly into PDF format.
* **Image Compressor & Resizer**: Compress images up to 90% with custom quality and resolution sliders.
* **Image Converter**: Convert between PNG, JPG, WEBP, and BMP formats instantly.
* **Black & White Filter**: High-contrast document enhancement filter.
* **AI Document Summarizer**: Extractive summarization, word count, and reading time estimation.
* **QR Code Studio**: Generate styled QR codes or scan and decode via webcam.
* **Organize PDF Pages**: Visual thumbnail grid to reorder, delete, and rotate pages.
* **PDF Dark Mode Inverter**: Convert blinding white PDFs to comfortable night mode.
* **Invoice Generator**: Vector PDF invoices with real-time tax calculation.
* **Color Palette Extractor**: Extract dominant hex color codes and swatches from images.
* **CSV to Table & PDF**: Preview tabular data and export styled PDF reports.

---

## 🔒 Security Architecture (Zero-Upload Guarantee)

1. **100% In-Browser Execution**: All processing runs locally inside your browser via WebAssembly and JavaScript Web APIs. Zero files are sent to any remote server.
2. **DOMPurify Sanitization**: Neutralizes malicious scripts and XXE payloads.
3. **Automatic Memory Cleanup**: Calls `URL.revokeObjectURL()` immediately to eliminate memory retention.
4. **PWA & Offline Capability**: Progressive Web App with Service Worker cache — works completely offline without internet after first load.

---

## 💻 How to Run Locally

```bash
# Using Node.js
npx serve .

# Or using Python
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

---

## ☕ Support & Tip
If you find PDFToolkit useful, you can support the developer via UPI:
- **UPI ID**: `7030403004-3@ybl`
- **Developer**: Manmath Sangave

---

## 📄 License
MIT License. Free for personal and commercial use. Zero trackers. Zero subscriptions.
