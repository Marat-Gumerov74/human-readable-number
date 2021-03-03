module.exports = function toReadable (number) {
  let result = "";
  let arrNumber = String(number).split("");

  function checkFirstSymbol(x) {
		let item;
		switch(x){
			case "0": item = "zero"; break
			case "1": item = "one"; break
			case "2": item = "two"; break
			case "3": item = "three"; break
			case "4": item = "four"; break
			case "5": item = "five"; break
			case "6": item = "six"; break
			case "7": item = "seven"; break
			case "8": item = "eight"; break
			case "9": item = "nine"; break
		}
		return item;
	}

    function checkSecondSymbol(x, y, a) {
		let item = "";
		if(!a){a = "";}
		
		switch(x){
			case "0": item += y === "0"? "" : a + checkFirstSymbol(y); break
			case "1": switch(y){
						case "0":  item = a + "ten"; break
						case "1":  item = a + "eleven"; break
						case "2":  item = a + "twelve"; break
						case "3":  item = a + "thirteen"; break
						case "4":  item = a + "fourteen"; break
						case "5":  item = a + "fifteen"; break
						case "6":  item = a + "sixteen"; break
						case "7":  item = a + "seventeen"; break
						case "8":  item = a + "eighteen"; break
						case "9":  item = a + "nineteen"; break
					}
					break
			case "2": item = a + "twenty";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
			case "3": item = a + "thirty";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
			case "4": item = a + "forty";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
			case "5": item = a + "fifty";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
			case "6": item = a + "sixty";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
			case "7": item = a + "seventy";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
			case "8": item = a + "eighty";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
			case "9": item = a + "ninety";  item += y === "0"? "" : " " + checkFirstSymbol(y); break
		}
		return item;
	}

	switch (arrNumber.length) {
			case 1: result += checkFirstSymbol(arrNumber[0]); break
			case 2: result += checkSecondSymbol(arrNumber[0],arrNumber[1]); break
			case 3: result += checkFirstSymbol(arrNumber[0]) + " hundred" + checkSecondSymbol(arrNumber[1], arrNumber[2], " ")
			break
	}

	return result;
}
