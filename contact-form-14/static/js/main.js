function myfunction() {

	   const pcategory = document.getElementById("pcategory").value;
		const rcategory = document.getElementById("reqcateg").value;
		const budget = document.getElementById("budget").value;
		const duration = document.getElementById("duration").value;
		// risk items
		const req1 = document.getElementById("Requirement1").value;
	    const quality = document.getElementById("Quality").value;
		const market = document.getElementById("Market").value;
		const team = document.getElementById("Team").value;
		const technical = document.getElementById("Technical").value;
		const project_complexity = document.getElementById("project_complexity").value;
		const schedule = document.getElementById("Schedule").value;
		const req2 = document.getElementById("Requirement2").value;
		const performance = document.getElementById("Performance").value;
		const planCon = document.getElementById("planCon").value;
		const resource_availab = document.getElementById("resav").value;
		const legal = document.getElementById("legal").value;
		const budget_r = document.getElementById("Budget_r").value;
		const technical2 = document.getElementById("Technical2").value;
		const org_env = document.getElementById("orgenv").value;
		const performance2 = document.getElementById("Performance2").value;
		// risk categories
		const plan_cont = "Planning and Control";
		const external = "External";
		const org_env_cat = "Organizational Environment";
		const proj_complex = "Project complexity";
		const req_cat = "Requirement";
		const team_cat = "Team";
		localStorage.setItem("req", false);
		localStorage.setItem("extrisk", false);
		localStorage.setItem("projcomp", false);
		localStorage.setItem("teamrisk", false);
		localStorage.setItem("orgenv_", false);
		localStorage.setItem("plancontrol", false);
    
			if (document.getElementById("Requirement1").checked == true || document.getElementById("Requirement2").checked == true){
				localStorage.setItem("req", true);
				
			}
			if (document.getElementById("Market").checked == true || document.getElementById("legal").checked == true){
				localStorage.setItem("extrisk", true);
			}
			
			if (document.getElementById("Quality").checked == true || document.getElementById("Technical").checked == true || document.getElementById("Technical2").checked == true || document.getElementById("project_complexity").checked == true ){
			    localStorage.setItem("projcomp", true);
			}
			
			if (document.getElementById("Team").checked == true || document.getElementById("Performance").checked == true || document.getElementById("Performance2").checked == true ){
				localStorage.setItem("teamrisk", true);
			}
			
			if (document.getElementById("resav").checked == true || document.getElementById("Budget_r").checked == true || document.getElementById("orgenv").checked == true ){
				localStorage.setItem("orgenv_", true);
			}
			
			if (document.getElementById("Schedule").checked == true || document.getElementById("planCon").checked == true){
				localStorage.setItem("plancontrol", true);
			}
			
		let risk_items = []
		let risk_cat = []
		if (document.getElementById("Requirement1").checked == true || document.getElementById("Requirement2").checked == true){
			risk_items.push("Requirement")
			risk_cat.push("Requirement")
		}

		if (document.getElementById("Market").checked == true){
			risk_items.push("Market")
			risk_cat.push("External")
		}

		if (document.getElementById("legal").checked == true){
			risk_items.push("Contract/Legal risk")
			risk_cat.push("External")
		}
		if (document.getElementById("Quality").checked == true){
			risk_items.push("Quality")
			risk_cat.push("Project complexity")
		}
		if (document.getElementById("Technical").checked == true || document.getElementById("Technical2").checked == true){
			risk_items.push("Technical")
			risk_cat.push("Project complexity")
		}
		if (document.getElementById("project_complexity").checked == true ){
			risk_items.push("Project complexity")
			risk_cat.push("Project complexity")
		}

		if (document.getElementById("Team").checked == true){
			risk_items.push("Team")
			risk_cat.push("Team")
		}

		if (document.getElementById("Performance").checked == true || document.getElementById("Performance2").checked == true ){
			risk_items.push("Performance")
			risk_cat.push("Team")
		}

		if (document.getElementById("Budget_r").checked == true){
			risk_items.push("Budget")
			risk_cat.push("Organizational Environment")
		}
		if (document.getElementById("resav").checked == true){
			risk_items.push("Resource availability")
			risk_cat.push("Organizational Environment")
		}
		if (document.getElementById("orgenv").checked == true ){
			risk_items.push("Organizational Environment")
			risk_cat.push("Organizational Environment")
		}

		if (document.getElementById("Schedule").checked == true){
			risk_items.push("Schedule")
			risk_cat.push("Planning and Control")
		}
		if (document.getElementById("planCon").checked == true){
			risk_items.push("Schedule")
			risk_cat.push("Planning & Control")
		}



		const dict_values = {pcategory, rcategory, risk_items, risk_cat, budget, duration } //Pass the javascript variables to a dictionary.
		const s = JSON.stringify(dict_values); // Stringify converts a JavaScript object or value to a JSON string
		console.log(s); // Prints the variables to console window, which are in the JSON format
		$.ajax({
			url:"/test",
			type:"POST",
			contentType: "application/json",
			data: JSON.stringify(s)});

}


// event to handle situation when browser navigates to index page through history traversal:

window.addEventListener( "pageshow", function ( event ) {
	var historyTraversal = event.persisted || 
						   ( typeof window.performance != "undefined" && 
								window.performance.navigation.type === 2 );
	if ( historyTraversal ) {
	  // Handle page restore.
	  window.location.reload();
	}
  });