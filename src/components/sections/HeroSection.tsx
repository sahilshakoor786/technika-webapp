import PrimaryButton from "../PrimaryButton";
import Hls from "hls.js";
import React from "react";
export default class VideoPlayer extends React.Component {
  state = {};
  componentDidMount() {
    if (Hls.isSupported() && this.player) {
      const video = this.player;
      const hls = new Hls();
      const url = "/videos/main_video_2/720p.m3u8";

      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    }
  }
  render() {
    return (
      <section
        id="hero"
        className="relative flex  justify-center h-screen overflow-hidden"
      >
        <div
          className="z-10 relative text-white md:w-1/2 
      bg-blue-800/10 backdrop-blur shadow-lg py-6 px-2 space-y-2"
        >
          <img src="/videos/image-2.png" width="20%" />
        </div>
        <video
          className="absolute w-auto min-w-full min-h-full max-w-none"
          ref={(player) => (this.player = player)}
          autoPlay={true}
          loop
          muted
        />

        <div
          className="z-10 relative text-white md:w-1/2 
      bg-blue-800/10 backdrop-blur flex flex-col justify-center shadow-lg py-6 px-2 space-y-2"
        >
          <span className="text-6xl md:text-8xl text-white font-dm-sans text-center break-all">
            TECHNIKA
          </span>
          <span className="text-5xl md:text-6xl text-white font-dm-sans text-center">
            Go beyond
          </span>

          <span className="flex justify-center">
            <PrimaryButton text="Register now" onClick={() => alert("red")} />
          </span>
        </div>
      </section>
    );
  }
}
