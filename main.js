const copyButton = document.querySelector(".copy-button");

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    copyButton.firstChild.textContent = "Kopyalandı ";
    setTimeout(() => {
      copyButton.firstChild.textContent = "E-postayı kopyala ";
    }, 1800);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});
