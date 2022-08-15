/* eslint-disable max-len */
import React, {useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
import './Title.css';

function Title() {
  // const textWrapper = document.querySelector('.ml1 .letters');
  // textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class=\'letter\'>$&</span>');
  // const ml4 = {};
  // ml4.opacityIn = [0, 1];
  // ml4.scaleIn = [0.2, 1];
  // ml4.scaleOut = 3;
  // ml4.durationIn = 800;
  // ml4.durationOut = 600;
  // ml4.delay = 500;
  useEffect(() => {
    const textWrapper1 = document.querySelector('.ml1 .letters-1.letters');
    textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, '<span class=\'letter\'>$&</span>');

    const textWrapper2 = document.querySelector('.ml1 .letters-2.letters');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, '<span class=\'letter\'>$&</span>');
    anime.timeline({loop: true})
        .add({
          targets: '.ml1 .letters-1 .letter',
          opacity: [0, 1],
          translateZ: 0,
          duration: 600,
          delay: (el, i) => 150 * (i+1),
        }).add({
          targets: '.ml1 .letters-1',
          opacity: 0,
          duration: 200,
          easing: 'easeOutExpo',
          delay: 3000,
        }).add({
          targets: '.ml1 .letters-2 .letter',
          opacity: [0, 1],
          translateZ: 0,
          duration: 600,
          delay: (el, i) => 150 * (i+1),
        }).add({
          targets: '.ml1 .letters-2',
          opacity: 0,
          duration: 200,
          easing: 'easeOutExpo',
          delay: 3000,
        });
    // anime.timeline({loop: true})
    //     .add({
    //       targets: '.ml4 .letters-1',
    //       opacity: ml4.opacityIn,
    //       scale: ml4.scaleIn,
    //       duration: ml4.durationIn,
    //     }).add({
    //       targets: '.ml4 .letters-1',
    //       opacity: 0,
    //       scale: ml4.scaleOut,
    //       duration: ml4.durationOut,
    //       easing: 'easeInExpo',
    //       delay: ml4.delay,
    //     }).add({
    //       targets: '.ml4 .letters-2',
    //       opacity: ml4.opacityIn,
    //       scale: ml4.scaleIn,
    //       duration: ml4.durationIn,
    //     }).add({
    //       targets: '.ml4 .letters-2',
    //       opacity: 0,
    //       scale: ml4.scaleOut,
    //       duration: ml4.durationOut,
    //       easing: 'easeInExpo',
    //       delay: ml4.delay,
    //     }).add({
    //       targets: '.ml4',
    //       opacity: 0,
    //       duration: 500,
    //       delay: 500,
    //     });
  });

  return (
    <div>
      <h1 className="ml1 font-lekton">
        <span className="text-wrapper">
          {/* <span className="letters">Hello I&apos;m Lisa</span> */}

          <span className="letters letters-1">Hello I&apos;m Lisa</span>
          <span className="letters letters-2">Hallo ik ben Lisa</span>

        </span>
      </h1>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    </div>
  );
}

export default Title;
