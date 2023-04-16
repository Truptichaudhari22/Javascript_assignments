// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// - September, October or November, the season is Autumn.
// - December, January or February, the season is Winter.
// - March, April or May, the season is Spring
// - June, July or August, the season is Summer

const monthName = [
    "January",
     "February",
      "March",
     "April", 
     "May", 
     "June",
     "July",
      "August", 
      "September",
     "Octomber", 
     "November", 
     "DEcember"
]
const d = new Date();
const getMonths = d.getMonth();

const month = monthName[getMonths];


switch (month) {
    case "January":
        console.log("Winter")
        break;
    
        case "February":
            console.log("Winter")
        break;

        case "March":
            console.log("spring")
        break;
        
        case "April":
            console.log("spring")
        break;
        
        case "May":
            console.log("spring")
        break;

        case "June":
            console.log("summer")
        break;

        case "July":
            console.log("summer")
        break;

        case "August":
            console.log("summer")
        break;

        case "September":
            console.log("Auntum")
        break;

        case "Octomber":
            console.log("Auntum")
        break;

        case "November":
            console.log("Auntum")
        break;

        case "December":
            console.log("Winter")
        break;

        default:
            console.log("not exist");
}
 