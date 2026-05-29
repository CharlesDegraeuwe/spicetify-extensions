async function main() {
  const observer = new MutationObserver(() => {
    const section = document.querySelector(".x-music-video");

    if (section) {
      (section as HTMLElement).style.display = "none";
    }
  });
  console.log("test")
  observer.observe(document.body, { childList: true, subtree: true });
}

export default main;
