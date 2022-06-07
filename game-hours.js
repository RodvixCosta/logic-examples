const list = {
    firstGame: [7, 8, 9, 10],
    secondGame: [7, 7, 7, 7],
    thirdGame: [7, 10, 8, 9],
    fourthGame: [7, 9, 10, 653127],
    fifthGame: [87, 9, 10, 6537],
    sixthGame: [27, 29, 10, 6537],
    seventhGame: [47, 69, 10, 6537],
  };
  
  function calcTime({ startHours, startMinutes, finalHours, finalMinutes }) {
    let hours = finalHours - startHours;
    let minutes = finalMinutes - startMinutes;
  
    if (minutes < 0) {
      minutes = 60 + (finalMinutes - startMinutes);
      hours = hours - 1;
    }
    if (hours <= 0) {
      hours = 24 + (startHours - finalHours);
    }
    if (minutes >= 60) {
      while (minutes >= 60) {
        minutes = minutes - 60;
        hours = hours + 1;
      }
    }
    if (hours >= 24) {
      let days = Math.floor(hours / 24);
      let remainHours = hours % 24;
      console.log(
        "O JOGO DUROU " + days + " DIA(S) E " + remainHours + " HORA(S) E " + minutes + " MINUTO(S)");
      return
    }
    if (hours === 0) {
      console.log("O JOGO DUROU " + minutes + " MINUTO(S)");
      return;
    }
    if (minutes === 0) {
      console.log("O JOGO DUROU " + hours + " HORAS(S)");
      return;
    }
    console.log("O JOGO DUROU " + hours + " HORA(S) E " + minutes + " MINUTO(S)");
  }
  
  function loopList() {
    Object.values(list).forEach((element) => {
      const startHours = element[2];
      const startMinutes = element[1];
      const finalHours = element[0];
      const finalMinutes = element[3];
      calcTime({ startHours, startMinutes, finalHours, finalMinutes });
    });
  }
  loopList();
  