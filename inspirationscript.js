var currentDate = new Date();
var currentMonth = currentDate.getMonth()+1;
var currentDay;


currentDay = ('0' + currentDate.getDate()).slice(-2)

concatDate = currentMonth+currentDay


var inspirationData = inspiration;

document.addEventListener("click", function(){

    console.log(concatDate);
  });


  var i;
for (i = 0; i < inspirationData.length; i++) {
    if (concatDate >= inspirationData[i].datebeginning && concatDate <= inspirationData[i].dateend) {
        console.log(inspirationData[i].week)
        document.getElementById('week-name').innerHTML = "Week " + inspirationData[i].week;
        document.getElementById('recipe-name').innerHTML = inspirationData[i].recipetitle;
        document.getElementById('recipe-ingredients').innerHTML = inspirationData[i].ingredients;
        document.getElementById('recipe-directions').innerHTML = inspirationData[i].directions;
        document.getElementById('suggestions-name').innerHTML = inspirationData[i].suggestiontitle;
        document.getElementById('suggestions-list').innerHTML = inspirationData[i].suggestions
        
    }
  }



