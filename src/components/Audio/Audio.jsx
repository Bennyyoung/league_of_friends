export const Audio = () => {
  const device = navigator.mediaDevices.getUserMedia({ audio: true });
  const items = [];
  device.then(stream => {
    const recorder = newMediaRecoreder(stream);
    recorder.ondataavailable = e => {
      items.push(e.data);
      if (recorder.state == 'inactive') {
        const blob = new Blob(items, { type: 'audio/webm' });
        const audio = document.getElementById('audio');
        const main_audio = document.createElement('audio');
        main_audio.setAttribute('controls', 'controls');
        audio.appendChild(main_audio);
        main_audio.innerhtml =
          '<source src="' +
          URL.createObjectURL(blob) +
          '" type="video/webm" />';
      }
    };
    recorder.start(100);
    setTimeout(() => {
      recorder.stop();
    }, 5000);
  });

  return (
    <>
      <div className="audio" id="audio"></div>
    </>
  );
};
