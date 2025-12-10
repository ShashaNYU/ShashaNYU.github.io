// static/js/aplayer-init.js

document.addEventListener("DOMContentLoaded", () => {
  // 确保 APlayer 已加载
  if (typeof APlayer === "undefined") {
    console.error("APlayer not loaded");
    return;
  }

  const container = document.getElementById("aplayer-happinessib");
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
        name: "happiness is a butterfly",
        artist: "Lana Del Rey",
        url: "/static/music/happiness_is_a_butterfly.flac",
        cover: "/static/music/Lana_Del_Rey_-_Norman_Fucking_Rockwell.png",
        lrc: "",
      },
      // {
      //   name: "喜欢",
      //   artist: "张悬",
      //   url: "/static/music/xihuan.flac",
      //   cover: "/static/music/xihuan.png",
      //   lrc: "",
      // },
      // {
      //   name: "新鸳鸯蝴蝶梦",
      //   artist: "黄安",
      //   url: "/static/music/xyyhdm.flac",
      //   cover: "/static/music/xyyhdm.png",
      //   lrc: "",
      // },
    ],
  });
});
