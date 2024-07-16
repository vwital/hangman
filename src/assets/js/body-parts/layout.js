export function createMarkup() {
  document.body.innerHTML = `   <main class="game">
      <div class="wrapper">
      <div class="game-field">
        <section class="gallow_full">
          <div class="gallow">
            <img
              class="gallow__bg"
              src="./assets/img/gallows.jpg"
              alt="img"
            />
            <div class="man">
              <img
                class="body__part body__head hidden"
                src="./assets/img/head.jpg"
                alt="head"
              />
              <img
                class="body__part body__body hidden"
                src="./assets/img/body.jpg"
                alt="body"
              />
              <img
                class="body__part body__arms left-arm hidden"
                src="./assets/img/left-arm.jpg"
                alt="left-arm"
              />
              <img
                class="body__part body__arms right-arm hidden"
                src="./assets/img/right-arm.jpg"
                alt="right-arm"
              />

              <img
                class="body__part body__legs left-leg hidden"
                src="./assets/img/left-leg.jpg"
                alt="left-leg"
              />
              <img
                class="body__part body__legs right-leg hidden"
                src="./assets/img/right-leg.jpg"
                alt="right-leg"
              />
            </div>
          </div>
        </section>
        <section class="game-control">
          <div class="word">

          </div>
          <div class="question">This is a question</div>
          <div class="incorrent">Incorrent guesses <span class="incorrect-counter">0</span>/6</span></div>
       <div class="buttons">
         <button class="buttons__btn">A</button>
         <button class="buttons__btn">B</button>
         <button class="buttons__btn">C</button>
         <button class="buttons__btn">D</button>
         <button class="buttons__btn">E</button>
         <button class="buttons__btn">F</button>
        <button class="buttons__btn">G</button>
        <button class="buttons__btn">H</button>
        <button class="buttons__btn">I</button>
        <button class="buttons__btn">J</button>
        <button class="buttons__btn">K</button>
         <button class="buttons__btn">L</button>
         <button class="buttons__btn">M</button>
         <button class="buttons__btn">N</button>
         <button class="buttons__btn">O</button>
         <button class="buttons__btn">P</button>
      <button class="buttons__btn">Q</button>
      <button class="buttons__btn">R</button>
      <button class="buttons__btn">S</button>
       <button class="buttons__btn">T</button>
       <button class="buttons__btn">U</button>
        <button class="buttons__btn">V</button>
      <button class="buttons__btn">W</button>
        <button class="buttons__btn">X</button>
  <button class="buttons__btn">Y</button>
     <button class="buttons__btn">Z</button>
   </div>
  </section>
  </div>
</div>
</main>
<div class="modal hidden__modal">
<p class="modal__grats"></p>
<p class="modal__message">
You won!</p>
<p class="modal__word">The word:</p>
<button class="modal__button">Restart  <img
class="button__arrow "
src="./assets/img/arrow.png"
alt="right-leg"
/></button>
</div>
<div class="overlay"></div>
`;
}
