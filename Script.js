var i = 1;

function findD(a, b, c) {
  if (a == 0)
    return "D = ?";
  var D = b*b - 4*a*c;
  return "D = " + D;
}

function calculate(a, b, c) {
  if (a == 0)
    return "Недопустимое значение A";
  var D = b*b - 4*a*c;
  var x1, x2;
  if (D > 0) {
    x1 = (-b+Math.sqrt(D))/(2*a);
    x2 = (-b-Math.sqrt(D))/(2*a);
    return "Корни уравнения: x1 = " + x1.toFixed(3) + ", x2 = " + x2.toFixed(3);
  }
  else if (D == 0) {
    x1 = -b/(2*a);
    return "Корни уравнения: x1 = x2 = " + x1.toFixed(3);
  }
  else {
    return "Корней нет!";
  }
}

function find() {
  var a = document.getElementById('A').value;
  var b = document.getElementById('B').value;
  var c = document.getElementById('C').value;

  var res = calculate(a, b, c);

  var tbody = document.getElementById('result');
  var row = document.createElement("TR");
  if (i == 1)
	  row.style.background = "#fff";
  tbody.appendChild(row);
  
  for (var j = 1; j < tbody.rows.length; j++) {
	if (j % 2 == 1) {
		tbody.rows[j].style.background = "#fff";
	}
	else if (j % 2 == 0) {
		tbody.rows[j].style.background = "#efefef";
	}
  }

  var td1 = document.createElement("TD");
  td1.appendChild(document.createTextNode(i));
  i++;

  var date = new Date();
  var td2 = document.createElement("TD");
  td2.appendChild(document.createTextNode(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()));

  var td3 = document.createElement("TD");
  td3.appendChild(document.createTextNode(res));

  var d = findD(a, b, c);
  var td4 = document.createElement("TD");
  td4.appendChild(document.createTextNode(d));

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

  document.getElementById('answer').style.display = 'block';
}

result.addEventListener('click', function(evt){
	if (evt.target.closest('.firstLine')) {
		var temps;
	}
	else {
		evt.target.closest('tr').remove();
	}
	
	var tbody = document.getElementById('result');
	for (var j = 0; j < tbody.rows.length; j++) {
	if (j % 2 == 1) {
		tbody.rows[j].style.background = "#fff";
	}
	else if (j % 2 == 0) {
		tbody.rows[j].style.background = "#efefef";
	}
  }
});
