var text;
var input = prompt("Please txt the number 1-10");



switch (input) {
	case "1":
	  text = "Back to square 1";
	  break;
	case "2":
	  text = "Goody 2-shoes";
	  break;
	case "3":
	case "6":
	  text = "Two's caompany, there's a crowd";
	  break;
	case "4":
	case "9":
	  text = "Counting sheep";
	  break;
	case "5":
	  text = "Take five";
	  break;
	case "7":
	  text = "Seventh heaven";
	  break;
	case "8":
	  text = "Behind the eight-ball";
	  break;
	case "10":
	  text = "Cheaper by the dozen";
	  break;
	default:
	text = "Text the number again, please!";  
}


alert(text);