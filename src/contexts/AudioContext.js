const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

const AudioContext = {
  getAudioContext() {
    return audioCtx;
  },

  getAnalyser() {
    return analyser;
  },

  resetAnalyser() {
    analyser = audioCtx.createAnalyser();
  },

  decodeAudioData(audioData) {
    audioCtx.decodeAudioData(audioData).then(function (decodedData) {
      // use the decoded data here
    });
  },
};

export default AudioContext;
