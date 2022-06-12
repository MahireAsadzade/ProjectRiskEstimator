if (localStorage.getItem("req") == "true"){
    document.getElementById("req").classList.remove("dnone");
  
    
}
if (localStorage.getItem("extrisk") == "true"){
    document.getElementById("extrisk").classList.remove("dnone");

}

if (localStorage.getItem("projcomp") == "true"){
    document.getElementById("projcomp").classList.remove("dnone");
    
}

if (localStorage.getItem("teamrisk") == "true"){
    document.getElementById("teamrisk").classList.remove("dnone");
    
}

if (localStorage.getItem("orgenv_") == "true"){
    document.getElementById("orgenv_").classList.remove("dnone");
    
}

if (localStorage.getItem("plancontrol") == "true"){
    document.getElementById("plancontrol").classList.remove("dnone");
   
}


// RISK SCORE CALCULATIONNN
if((parseInt(document.getElementById("planprob").innerHTML)>10 || parseInt(document.getElementById("planprob").innerHTML)<50) &  (document.getElementById("planimp").innerHTML == "Very Low" || document.getElementById("planimp").innerHTML == "Low")){
    document.getElementById("overall_score1").innerHTML = "Very Low risky"
    document.getElementById("dev_sch1").innerHTML = "< 2 weeks"
    document.getElementById("dev_bud1").innerHTML = "< 1%"
}
if(parseInt(document.getElementById("planprob").innerHTML)>50  &  document.getElementById("planimp").innerHTML == "Very Low"){
    document.getElementById("overall_score1").innerHTML = "Low risky"
    document.getElementById("dev_sch1").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud1").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("planprob").innerHTML)>30 || parseInt(document.getElementById("planprob").innerHTML)<70) &  document.getElementById("planimp").innerHTML == "Low"){
    document.getElementById("overall_score1").innerHTML = "Low risky"
    document.getElementById("dev_sch1").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud1").innerHTML = "1% - 2%"
}
if(parseInt(document.getElementById("planprob").innerHTML)>70  &  document.getElementById("planimp").innerHTML == "Low"){
    document.getElementById("overall_score1").innerHTML = "Moderate risky"
    document.getElementById("dev_sch1").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud1").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("planprob").innerHTML)>10 || parseInt(document.getElementById("planprob").innerHTML)<50) &  document.getElementById("planimp").innerHTML == "Moderate"){
    document.getElementById("overall_score1").innerHTML = "Low risky"
    document.getElementById("dev_sch1").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud1").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("planprob").innerHTML)>50 || parseInt(document.getElementById("planprob").innerHTML)<70) &  document.getElementById("planimp").innerHTML == "Moderate"){
    document.getElementById("overall_score1").innerHTML = "Moderate risky"
    document.getElementById("dev_sch1").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud1").innerHTML = "2% - 4%"
}
if(parseInt(document.getElementById("planprob").innerHTML)>70  &  document.getElementById("planimp").innerHTML == "Moderate"){
    document.getElementById("overall_score1").innerHTML = "High risky"
    document.getElementById("dev_sch1").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud1").innerHTML = "4% - 8%"
}
if(parseInt(document.getElementById("planprob").innerHTML)>70  &  document.getElementById("planimp").innerHTML == "High"){
    document.getElementById("overall_score1").innerHTML = "Very High risky"
    document.getElementById("dev_sch1").innerHTML = "4 months plus"
    document.getElementById("dev_bud1").innerHTML = "8% plus"
}
// HIGHH
if((parseInt(document.getElementById("planprob").innerHTML)>10 || parseInt(document.getElementById("planprob").innerHTML)<30) &  document.getElementById("planimp").innerHTML == "High"){
    document.getElementById("overall_score1").innerHTML = "Low risky"
    document.getElementById("dev_sch1").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud1").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("planprob").innerHTML)>30 || parseInt(document.getElementById("planprob").innerHTML)<50) &  document.getElementById("planimp").innerHTML == "High"){
    document.getElementById("overall_score1").innerHTML = "Moderate risky"
    document.getElementById("dev_sch1").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud1").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("planprob").innerHTML)>50 || parseInt(document.getElementById("planprob").innerHTML)<70) &  document.getElementById("planimp").innerHTML == "High"){
    document.getElementById("overall_score1").innerHTML = "High risky"
    document.getElementById("dev_sch1").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud1").innerHTML = "4% - 8%"
}
// ORG 
if((parseInt(document.getElementById("orgprob").innerHTML)>10 || parseInt(document.getElementById("orgprob").innerHTML)<50) &  (document.getElementById("orgimp").innerHTML == "Very Low" || document.getElementById("orgimp").innerHTML == "Low")){
    document.getElementById("overall_score2").innerHTML = "Very Low risky"
    document.getElementById("dev_sch2").innerHTML = "< 2 weeks"
    document.getElementById("dev_bud2").innerHTML = "< 1%"
}
if(parseInt(document.getElementById("orgprob").innerHTML)>50  &  document.getElementById("orgimp").innerHTML == "Very Low"){
    document.getElementById("overall_score2").innerHTML = "Low risky"
    document.getElementById("dev_sch2").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud2").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("orgprob").innerHTML)>30 || parseInt(document.getElementById("orgprob").innerHTML)<70) &  document.getElementById("orgimp").innerHTML == "Low"){
    document.getElementById("overall_score2").innerHTML = "Low risky"
    document.getElementById("dev_sch2").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud2").innerHTML = "1% - 2%"
}
if(parseInt(document.getElementById("orgprob").innerHTML)>70  &  document.getElementById("orgimp").innerHTML == "Low"){
    document.getElementById("overall_score2").innerHTML = "Moderate risky"
    document.getElementById("dev_sch2").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud2").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("orgprob").innerHTML)>10 || parseInt(document.getElementById("orgprob").innerHTML)<50) &  document.getElementById("orgimp").innerHTML == "Moderate"){
    document.getElementById("overall_score2").innerHTML = "Low risky"
    document.getElementById("dev_sch2").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud2").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("orgprob").innerHTML)>50 || parseInt(document.getElementById("orgprob").innerHTML)<70) &  document.getElementById("orgimp").innerHTML == "Moderate"){
    document.getElementById("overall_score2").innerHTML = "Moderate risky"
    document.getElementById("dev_sch2").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud2").innerHTML = "2% - 4%"
}
if(parseInt(document.getElementById("orgprob").innerHTML)>70  &  document.getElementById("orgimp").innerHTML == "Moderate"){
    document.getElementById("overall_score2").innerHTML = "High risky"
    document.getElementById("dev_sch2").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud2").innerHTML = "4% - 8%"
}
if(parseInt(document.getElementById("orgprob").innerHTML)>70  &  document.getElementById("orgimp").innerHTML == "High"){
    document.getElementById("overall_score2").innerHTML = "Very High risky"
    document.getElementById("dev_sch2").innerHTML = "4 months plus"
    document.getElementById("dev_bud2").innerHTML = "8% plus"
}
if((parseInt(document.getElementById("orgprob").innerHTML)>10 || parseInt(document.getElementById("orgprob").innerHTML)<30) &  document.getElementById("orgimp").innerHTML == "High"){
    document.getElementById("overall_score2").innerHTML = "Low risky"
    document.getElementById("dev_sch2").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud2").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("orgprob").innerHTML)>30 || parseInt(document.getElementById("orgprob").innerHTML)<50) &  document.getElementById("orgimp").innerHTML == "High"){
    document.getElementById("overall_score2").innerHTML = "Moderate risky"
    document.getElementById("dev_sch2").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud2").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("orgprob").innerHTML)>50 || parseInt(document.getElementById("orgprob").innerHTML)<70) &  document.getElementById("orgimp").innerHTML == "High"){
    document.getElementById("overall_score2").innerHTML = "High risky"
    document.getElementById("dev_sch2").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud2").innerHTML = "4% - 8%"
}
// Proj
if((parseInt(document.getElementById("projprob").innerHTML)>10 || parseInt(document.getElementById("projprob").innerHTML)<50) &  (document.getElementById("projimp").innerHTML == "Very Low" || document.getElementById("projimp").innerHTML == "Low")){
    document.getElementById("overall_score3").innerHTML = "Very Low risky"
    document.getElementById("dev_sch3").innerHTML = "< 2 weeks"
    document.getElementById("dev_bud3").innerHTML = "< 1%"
}
if(parseInt(document.getElementById("projprob").innerHTML)>50  &  document.getElementById("projimp").innerHTML == "Very Low"){
    document.getElementById("overall_score3").innerHTML = "Low risky"
    document.getElementById("dev_sch3").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud3").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("projprob").innerHTML)>30 || parseInt(document.getElementById("projprob").innerHTML)<70) &  document.getElementById("projimp").innerHTML == "Low"){
    document.getElementById("overall_score3").innerHTML = "Low risky"
    document.getElementById("dev_sch3").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud3").innerHTML = "1% - 2%"
}
if(parseInt(document.getElementById("projprob").innerHTML)>70  &  document.getElementById("projimp").innerHTML == "Low"){
    document.getElementById("overall_score3").innerHTML = "Moderate risky"
    document.getElementById("dev_sch3").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud3").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("projprob").innerHTML)>10 || parseInt(document.getElementById("projprob").innerHTML)<50) &  document.getElementById("projimp").innerHTML == "Moderate"){
    document.getElementById("overall_score3").innerHTML = "Low risky"
    document.getElementById("dev_sch3").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud3").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("projprob").innerHTML)>50 || parseInt(document.getElementById("projprob").innerHTML)<70) &  document.getElementById("projimp").innerHTML == "Moderate"){
    document.getElementById("overall_score3").innerHTML = "Moderate risky"
    document.getElementById("dev_sch3").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud3").innerHTML = "2% - 4%"
}
if(parseInt(document.getElementById("projprob").innerHTML)>70  &  document.getElementById("projimp").innerHTML == "Moderate"){
    document.getElementById("overall_score3").innerHTML = "High risky"
    document.getElementById("dev_sch3").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud3").innerHTML = "4% - 8%"
}
if(parseInt(document.getElementById("projprob").innerHTML)>70  &  document.getElementById("projimp").innerHTML == "High"){
    document.getElementById("overall_score3").innerHTML = "Very High risky"
    document.getElementById("dev_sch3").innerHTML = "4 months plus"
    document.getElementById("dev_bud3").innerHTML = "8% plus"
}
if((parseInt(document.getElementById("projprob").innerHTML)>10 || parseInt(document.getElementById("projprob").innerHTML)<30) &  document.getElementById("projimp").innerHTML == "High"){
    document.getElementById("overall_score3").innerHTML = "Low risky"
    document.getElementById("dev_sch3").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud3").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("projprob").innerHTML)>30 || parseInt(document.getElementById("projprob").innerHTML)<50) &  document.getElementById("projimp").innerHTML == "High"){
    document.getElementById("overall_score3").innerHTML = "Moderate risky"
    document.getElementById("dev_sch3").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud3").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("projprob").innerHTML)>50 || parseInt(document.getElementById("projprob").innerHTML)<70) &  document.getElementById("projimp").innerHTML == "High"){
    document.getElementById("overall_score3").innerHTML = "High risky"
    document.getElementById("dev_sch3").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud3").innerHTML = "4% - 8%"
}
// REQ
if((parseInt(document.getElementById("reqprob").innerHTML)>10 || parseInt(document.getElementById("reqprob").innerHTML)<50) &  (document.getElementById("reqimp").innerHTML == "Very Low" || document.getElementById("reqimp").innerHTML == "Low")){
    document.getElementById("overall_score4").innerHTML = "Very Low risky"
    document.getElementById("dev_sch4").innerHTML = "< 2 weeks"
    document.getElementById("dev_bud4").innerHTML = "< 1%"
}
if(parseInt(document.getElementById("reqprob").innerHTML)>50  &  document.getElementById("reqimp").innerHTML == "Very Low"){
    document.getElementById("overall_score4").innerHTML = "Low risky"
    document.getElementById("dev_sch4").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud4").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("reqprob").innerHTML)>30 || parseInt(document.getElementById("reqprob").innerHTML)<70) &  document.getElementById("reqimp").innerHTML == "Low"){
    document.getElementById("overall_score4").innerHTML = "Low risky"
    document.getElementById("dev_sch4").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud4").innerHTML = "1% - 2%"
}
if(parseInt(document.getElementById("reqprob").innerHTML)>70  &  document.getElementById("reqimp").innerHTML == "Low"){
    document.getElementById("overall_score4").innerHTML = "Moderate risky"
    document.getElementById("dev_sch4").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud4").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("reqprob").innerHTML)>10 || parseInt(document.getElementById("reqprob").innerHTML)<50) &  document.getElementById("reqimp").innerHTML == "Moderate"){
    document.getElementById("overall_score4").innerHTML = "Low risky"
    document.getElementById("dev_sch4").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud4").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("reqprob").innerHTML)>50 || parseInt(document.getElementById("reqprob").innerHTML)<70) &  document.getElementById("reqimp").innerHTML == "Moderate"){
    document.getElementById("overall_score4").innerHTML = "Moderate risky"
    document.getElementById("dev_sch4").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud4").innerHTML = "2% - 4%"
}
if(parseInt(document.getElementById("reqprob").innerHTML)>70  &  document.getElementById("reqimp").innerHTML == "Moderate"){
    document.getElementById("overall_score4").innerHTML = "High risky"
    document.getElementById("dev_sch4").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud4").innerHTML = "4% - 8%"
}
if(parseInt(document.getElementById("reqprob").innerHTML)>70  &  document.getElementById("reqimp").innerHTML == "High"){
    document.getElementById("overall_score4").innerHTML = "Very High risky"
    document.getElementById("dev_sch4").innerHTML = "4 months plus"
    document.getElementById("dev_bud4").innerHTML = "8% plus"
}
if((parseInt(document.getElementById("reqprob").innerHTML)>10 || parseInt(document.getElementById("reqprob").innerHTML)<30) &  document.getElementById("reqimp").innerHTML == "High"){
    document.getElementById("overall_score4").innerHTML = "Low risky"
    document.getElementById("dev_sch4").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud4").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("reqprob").innerHTML)>30 || parseInt(document.getElementById("reqprob").innerHTML)<50) &  document.getElementById("reqimp").innerHTML == "High"){
    document.getElementById("overall_score4").innerHTML = "Moderate risky"
    document.getElementById("dev_sch4").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud4").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("reqprob").innerHTML)>50 || parseInt(document.getElementById("reqprob").innerHTML)<70) &  document.getElementById("reqimp").innerHTML == "High"){
    document.getElementById("overall_score4").innerHTML = "High risky"
    document.getElementById("dev_sch4").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud4").innerHTML = "4% - 8%"
}
// TEAM
if((parseInt(document.getElementById("teamprob").innerHTML)>10 || parseInt(document.getElementById("teamprob").innerHTML)<50) &  (document.getElementById("teamimp").innerHTML == "Very Low" || document.getElementById("teamimp").innerHTML == "Low")){
    document.getElementById("overall_score5").innerHTML = "Very Low risky"
    document.getElementById("dev_sch5").innerHTML = "< 2 weeks"
    document.getElementById("dev_bud5").innerHTML = "< 1%"
}
if(parseInt(document.getElementById("teamprob").innerHTML)>50  &  document.getElementById("teamimp").innerHTML == "Very Low"){
    document.getElementById("overall_score5").innerHTML = "Low risky"
    document.getElementById("dev_sch5").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud5").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("teamprob").innerHTML)>30 || parseInt(document.getElementById("teamprob").innerHTML)<70) &  document.getElementById("teamimp").innerHTML == "Low"){
    document.getElementById("overall_score5").innerHTML = "Low risky"
    document.getElementById("dev_sch5").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud5").innerHTML = "1% - 2%"
}
if(parseInt(document.getElementById("teamprob").innerHTML)>70  &  document.getElementById("teamimp").innerHTML == "Low"){
    document.getElementById("overall_score5").innerHTML = "Moderate risky"
    document.getElementById("dev_sch5").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud5").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("teamprob").innerHTML)>10 || parseInt(document.getElementById("teamprob").innerHTML)<50) &  document.getElementById("teamimp").innerHTML == "Moderate"){
    document.getElementById("overall_score5").innerHTML = "Low risky"
    document.getElementById("dev_sch5").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud5").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("teamprob").innerHTML)>50 || parseInt(document.getElementById("teamprob").innerHTML)<70) &  document.getElementById("teamimp").innerHTML == "Moderate"){
    document.getElementById("overall_score5").innerHTML = "Moderate risky"
    document.getElementById("dev_sch5").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud5").innerHTML = "2% - 4%"
}
if(parseInt(document.getElementById("teamprob").innerHTML)>70  &  document.getElementById("teamimp").innerHTML == "Moderate"){
    document.getElementById("overall_score5").innerHTML = "High risky"
    document.getElementById("dev_sch5").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud5").innerHTML = "4% - 8%"
}
if(parseInt(document.getElementById("teamprob").innerHTML)>70  &  document.getElementById("teamimp").innerHTML == "High"){
    document.getElementById("overall_score5").innerHTML = "Very High risky"
    document.getElementById("dev_sch5").innerHTML = "4 months plus"
    document.getElementById("dev_bud5").innerHTML = "8% plus"
}
if((parseInt(document.getElementById("teamprob").innerHTML)>10 || parseInt(document.getElementById("teamprob").innerHTML)<30) &  document.getElementById("teamimp").innerHTML == "High"){
    document.getElementById("overall_score5").innerHTML = "Low risky"
    document.getElementById("dev_sch5").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud5").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("teamprob").innerHTML)>30 || parseInt(document.getElementById("teamprob").innerHTML)<50) &  document.getElementById("teamimp").innerHTML == "High"){
    document.getElementById("overall_score5").innerHTML = "Moderate risky"
    document.getElementById("dev_sch5").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud5").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("teamprob").innerHTML)>50 || parseInt(document.getElementById("teamprob").innerHTML)<70) &  document.getElementById("teamimp").innerHTML == "High"){
    document.getElementById("overall_score5").innerHTML = "High risky"
    document.getElementById("dev_sch5").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud5").innerHTML = "4% - 8%"
}
// EXTERNAL
if((parseInt(document.getElementById("extprob").innerHTML)>10 || parseInt(document.getElementById("extprob").innerHTML)<50) &  (document.getElementById("extimp").innerHTML == "Very Low" || document.getElementById("extimp").innerHTML == "Low")){
    document.getElementById("overall_score6").innerHTML = "Very Low risky"
    document.getElementById("dev_sch6").innerHTML = "< 2 weeks"
    document.getElementById("dev_bud6").innerHTML = "< 1%"
}
if(parseInt(document.getElementById("extprob").innerHTML)>50  &  document.getElementById("extimp").innerHTML == "Very Low"){
    document.getElementById("overall_score6").innerHTML = "Low risky"
    document.getElementById("dev_sch6").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud6").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("extprob").innerHTML)>30 || parseInt(document.getElementById("extprob").innerHTML)<70) &  document.getElementById("extimp").innerHTML == "Low"){
    document.getElementById("overall_score6").innerHTML = "Low risky"
    document.getElementById("dev_sch6").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud6").innerHTML = "1% - 2%"
}
if(parseInt(document.getElementById("extprob").innerHTML)>70  &  document.getElementById("extimp").innerHTML == "Low"){
    document.getElementById("overall_score6").innerHTML = "Moderate risky"
    document.getElementById("dev_sch6").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud6").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("extprob").innerHTML)>10 || parseInt(document.getElementById("extprob").innerHTML)<50) &  document.getElementById("extimp").innerHTML == "Moderate"){
    document.getElementById("overall_score6").innerHTML = "Low risky"
    document.getElementById("dev_sch6").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud6").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("extprob").innerHTML)>50 || parseInt(document.getElementById("extprob").innerHTML)<70) &  document.getElementById("extimp").innerHTML == "Moderate"){
    document.getElementById("overall_score6").innerHTML = "Moderate risky"
    document.getElementById("dev_sch6").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud6").innerHTML = "2% - 4%"
}
if(parseInt(document.getElementById("extprob").innerHTML)>70  &  document.getElementById("extimp").innerHTML == "Moderate"){
    document.getElementById("overall_score6").innerHTML = "High risky"
    document.getElementById("dev_sch6").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud6").innerHTML = "4% - 8%"
}
if(parseInt(document.getElementById("extprob").innerHTML)>70  &  document.getElementById("extimp").innerHTML == "High"){
    document.getElementById("overall_score6").innerHTML = "Very High risky"
    document.getElementById("dev_sch6").innerHTML = "4 months plus"
    document.getElementById("dev_bud6").innerHTML = "8% plus"
}

if((parseInt(document.getElementById("extprob").innerHTML)>10 || parseInt(document.getElementById("extprob").innerHTML)<30) &  document.getElementById("extimp").innerHTML == "High"){
    document.getElementById("overall_score6").innerHTML = "Low risky"
    document.getElementById("dev_sch6").innerHTML = "2 weeks to 1 month"
    document.getElementById("dev_bud6").innerHTML = "1% - 2%"
}
if((parseInt(document.getElementById("extprob").innerHTML)>30 || parseInt(document.getElementById("extprob").innerHTML)<50) &  document.getElementById("extimp").innerHTML == "High"){
    document.getElementById("overall_score6").innerHTML = "Moderate risky"
    document.getElementById("dev_sch6").innerHTML = "1 month to 2 months"
    document.getElementById("dev_bud6").innerHTML = "2% - 4%"
}
if((parseInt(document.getElementById("extprob").innerHTML)>50 || parseInt(document.getElementById("extprob").innerHTML)<70) &  document.getElementById("extimp").innerHTML == "High"){
    document.getElementById("overall_score6").innerHTML = "High risky"
    document.getElementById("dev_sch6").innerHTML = "2 months to 4 months"
    document.getElementById("dev_bud6").innerHTML = "4% - 8%"
}