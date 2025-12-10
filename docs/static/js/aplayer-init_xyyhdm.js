// static/js/aplayer-init.js

document.addEventListener("DOMContentLoaded", () => {
  // 确保 APlayer 已加载
  if (typeof APlayer === "undefined") {
    console.error("APlayer not loaded");
    return;
  }

  const container = document.getElementById("aplayer");
  if (!container) return;

  new APlayer({
    container,
    fixed: false,
    autoplay: false,
    theme: "#FADFA3",
    loop: "all",
    order: "list",
    preload: "metadata",
    volume: 0.8,
    audio: [
      {
        name: "新鸳鸯蝴蝶梦",
        artist: "黄安",
        url: "/static/music/xyyhdm.flac",
        cover: "/static/music/xyyhdm.png",
        lrc: "",
      },
    ],
  });
});
