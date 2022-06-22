exports.getDate=function(){
  var currentDay= new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  return currentDay.toLocaleDateString("en-US",options);
}

exports.getDay=function(){
  var currentDay= new Date();
  const options = { weekday: 'long' };
  return currentDay.toLocaleDateString("en-US",options);
}
