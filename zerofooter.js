document.addEventListener("DOMContentLoaded", () => {
  const mintlifyLink = document.querySelector('a[href*="https://mintlify.com?utm_campaign=poweredBy"]');
  if (mintlifyLink) {
    mintlifyLink.href = "https://haydenkong.dev"; // 🔗 Your custom link
    mintlifyLink.textContent = "© Copyright 2025 Hayden Kong. All Rights Reserved."; // ✏️ Your text
  }
});
