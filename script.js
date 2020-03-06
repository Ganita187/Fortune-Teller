$("button").click(function(){
  let plane=$(".t").val();
  let job =$(".c").val();
  let house =$(".h").val();
  let sample =$(".age").val();
$(".result").text(`In the future you will travel to ${plane}, become a ${job}, live in a ${house} and have children when your ${Number(sample)*2}  years old.`);
$("h1,h3,.age,.t,.c,.h,button").hide();
});