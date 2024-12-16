let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #000 ;">Egresada de Ingeniería Biomédica en la Facultad de Ingeneria Mecánica y Eléctrica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
