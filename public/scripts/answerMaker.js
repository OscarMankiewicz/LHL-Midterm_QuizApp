const addAnswerButton = document.querySelector('.AddAnswer');
//this is just effects the initial first question in the new quiz page

addAnswerButton.addEventListener('click', function(event) {
  event.preventDefault();
});

$(document).ready(function() {
  let checkSignA = 0;
  $("#checkA").on("click", function() {
    document.getElementById("checkB").checked = false;
    document.getElementById("checkC").checked = false;
    document.getElementById("checkD").checked = false;
    checkSignA++;
    if (checkSignA % 2 !== 0) {
    document.getElementById("answerTagA").style.backgroundColor = "#118AB2";
    document.getElementById("Answer1-1").style.borderColor = "#118AB2";
    document.getElementById("answerTagB").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-2").style.borderColor = "#FA8334";
    document.getElementById("answerTagC").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-3").style.borderColor = "#FA8334";
    document.getElementById("answerTagD").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-4").style.borderColor = "#FA8334";
  } else {
    document.getElementById("answerTagA").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-1").style.borderColor = "#2B4162";
    document.getElementById("answerTagB").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-2").style.borderColor = "#2B4162";
    document.getElementById("answerTagC").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-3").style.borderColor = "#2B4162";
    document.getElementById("answerTagD").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-4").style.borderColor = "#2B4162";
  }
  });

  let checkSignB = 0;
  $("#checkB").on("click", function() {
    document.getElementById("checkA").checked = false;
    document.getElementById("checkC").checked = false;
    document.getElementById("checkD").checked = false;
    checkSignB++;
    if (checkSignB % 2 !== 0) {
    document.getElementById("answerTagA").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-1").style.borderColor = "#FA8334";
    document.getElementById("answerTagB").style.backgroundColor = "#118AB2";
    document.getElementById("Answer1-2").style.borderColor = "#118AB2";
    document.getElementById("answerTagC").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-3").style.borderColor = "#FA8334";
    document.getElementById("answerTagD").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-4").style.borderColor = "#FA8334";
  } else {
    document.getElementById("answerTagA").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-1").style.borderColor = "#2B4162";
    document.getElementById("answerTagB").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-2").style.borderColor = "#2B4162";
    document.getElementById("answerTagC").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-3").style.borderColor = "#2B4162";
    document.getElementById("answerTagD").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-4").style.borderColor = "#2B4162";
  }
  });

  let checkSignC = 0;
  $("#checkC").on("click", function() {
    document.getElementById("checkA").checked = false;
    document.getElementById("checkB").checked = false;
    document.getElementById("checkD").checked = false;
    checkSignC++;
    if (checkSignC % 2 !== 0) {
    document.getElementById("answerTagA").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-1").style.borderColor = "#FA8334";
    document.getElementById("answerTagB").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-2").style.borderColor = "#FA8334";
    document.getElementById("answerTagC").style.backgroundColor = "#118AB2";
    document.getElementById("Answer1-3").style.borderColor = "#118AB2";
    document.getElementById("answerTagD").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-4").style.borderColor = "#FA8334";
  } else {
    document.getElementById("answerTagA").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-1").style.borderColor = "#2B4162";
    document.getElementById("answerTagB").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-2").style.borderColor = "#2B4162";
    document.getElementById("answerTagC").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-3").style.borderColor = "#2B4162";
    document.getElementById("answerTagD").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-4").style.borderColor = "#2B4162";
  }
});

  let checkSignD = 0;
  $("#checkD").on("click", function() {
    document.getElementById("checkA").checked = false;
    document.getElementById("checkB").checked = false;
    document.getElementById("checkC").checked = false;
    checkSignD++;
    if (checkSignD % 2 !== 0) {
    document.getElementById("answerTagA").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-1").style.borderColor = "#FA8334";
    document.getElementById("answerTagB").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-2").style.borderColor = "#FA8334";
    document.getElementById("answerTagC").style.backgroundColor = "#FA8334";
    document.getElementById("Answer1-3").style.borderColor = "#FA8334";
    document.getElementById("answerTagD").style.backgroundColor = "#118AB2";
    document.getElementById("Answer1-4").style.borderColor = "#118AB2";
  } else {
    document.getElementById("answerTagA").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-1").style.borderColor = "#2B4162";
    document.getElementById("answerTagB").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-2").style.borderColor = "#2B4162";
    document.getElementById("answerTagC").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-3").style.borderColor = "#2B4162";
    document.getElementById("answerTagD").style.backgroundColor = "#2B4162";
    document.getElementById("Answer1-4").style.borderColor = "#2B4162";
  }
  });

  let counter = 2;
  $(".AddAnswer").on("click", function() {

    counter++;
    if (counter === 3) {
      console.log("Stylesss", document.getElementById("extra3"));
      document.getElementById("extra3").style.display = "flex";
    } else if (counter === 4) {
      document.getElementById("extra4").style.display = "flex";
    }

    if (counter >= 4) {
      $(addAnswerButton).hide();
      counter = 2;
    }
  });
});




console.log("debug check if answermaker works");

