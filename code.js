$(document).ready(function() {
  var equation = "";
  var currentEntry = "";
  var answer;
  var error = "";
  $(".clear").click(function() {
    if (error != "") {
      error = "";
      $(".display").html(
        "<div class='entry'></div> <div class='equation'></div>"
      );
      equation = "";
      currentEntry = "";
    }
    if (equation.includes("=")) {
      equation = "";
      currentEntry = "";
      answer = "";
    }
    if (currentEntry.length >= 12) {
      equation = "";
      currentEntry = "";
      answer = "";
      error = "What kind of calculator do you think this is?!";
      $(".display").html(error);
    }
    if (equation.length + currentEntry.length > 22) {
      equation = "";
      currentEntry = "";
      error = "What kind of calculator do you think this is?!";
      $(".display").html(error);

    }
  });
  $(".operator").click(function() {
    if (equation.includes("=")) {
      equation = "";
      currentEntry = answer;
      answer = "";
    }
  });
  $(".AC").click(function() {
    equation = "";
    currentEntry = "";
    $(".entry").html(currentEntry);
    $(".equation").html(equation);
    if (error != "") {
      error = "";
      $(".display").html(
        "<div class='entry'></div> <div class='equation'></div>"
      );
      equation = "";
      currentEntry = "";
    }
  });
  $(".7").click(function() {
    currentEntry += "7";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".4").click(function() {
    currentEntry += "4";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".1").click(function() {
    currentEntry += "1";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".0").click(function() {
    if(currentEntry != ""){
   currentEntry += "0";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
}
  });
  $(".CE").click(function() {
    if (equation.includes("=")) {
      equation = "";
      currentEntry = "";
      answer = "";
      $(".entry").html(currentEntry);
      $(".equation").html(equation);
    }
    if (currentEntry != "") {
      equation += currentEntry;
      var arr = equation.split("");
      var num = currentEntry.length;
      var end = arr.length - num;
      arr.splice(end, num);
      equation = arr.join("");
      currentEntry = "";
      $(".entry").html(currentEntry);
      $(".equation").html(equation);
    }
    if (error != "") {
      error = "";
      $(".display").html(
        "<div class='entry'></div> <div class='equation'></div>"
      );
      equation = "";
      currentEntry = "";
    }
  });
  $(".8").click(function() {
    currentEntry += "8";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".5").click(function() {
    currentEntry += "5";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".2").click(function() {
    currentEntry += "2";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".divide").click(function() {
    if (currentEntry !== "") {
      equation += currentEntry;
      equation += "/";
      currentEntry = "";
      $(".entry").html("/");
    }
    $(".equation").html(equation);
  });
  $(".9").click(function() {
    currentEntry += "9";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".6").click(function() {
    currentEntry += "6";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".3").click(function() {
    currentEntry += "3";
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".decimal").click(function() {
    if (currentEntry === "") {
      currentEntry += "0.";
    } else if (!currentEntry.includes(".")) {
      currentEntry += ".";
    }
    $(".entry").html(currentEntry);
    $(".equation").html(equation.concat(currentEntry));
  });
  $(".multiply").click(function() {
    if (currentEntry !== "") {
      equation += currentEntry;
      equation += "*";
      currentEntry = "";
      $(".entry").html("*");
    }
    $(".equation").html(equation);
  });
  $(".minus").click(function() {
    if (currentEntry !== "") {
      equation += currentEntry;
      equation += "-";
      currentEntry = "";
      $(".entry").html("-");
    } else if ( equation == "" && currentEntry == "") {
      equation += "-";
      $(".entry").html("-");
    }
    $(".equation").html(equation);
  });
  $(".add").click(function() {
    if (currentEntry !== "") {
      equation += currentEntry;
      equation += "+";
      currentEntry = "";
      $(".entry").html("+");
    }
    $(".equation").html(equation);
  });
  $(".equals").click(function() {
    if (!equation.includes("=")) {
      equation += currentEntry;
      answer = eval(equation);
      equation += "=";
      if (answer.toString().includes(".")) {
        answer = Math.round(answer * 1000000) / 1000000;
      }
      equation += answer.toString();
      if (equation.length < 25 && answer.toString().length < 15) {
        $(".entry").html(answer);
        $(".equation").html(equation);
      } else {
        error = "What kind of calculator do you think this is?!";
        $(".display").html(error);
      }
    }
  });
});
// known bugs:
