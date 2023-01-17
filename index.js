const states = [
	{ name: "Alabama", winningNumbers: "" },
	{ name: "Alaska", winningNumbers: "" },
	{ name: "Arizona", winningNumbers: "" },
	{ name: "Arkansas", winningNumbers: "" },
	{ name: "California", winningNumbers: "" },
	{ name: "Colorado", winningNumbers: "" },
	{ name: "Connecticut", winningNumbers: "" },
	{ name: "Delaware", winningNumbers: "" },
	{ name: "Florida", winningNumbers: "" },
	{ name: "Georgia", winningNumbers: "" },
	{ name: "Hawaii", winningNumbers: "" },
	{ name: "Idaho", winningNumbers: "" },
	{ name: "Illinois", winningNumbers: "" },
	{ name: "Indiana", winningNumbers: "" },
	{ name: "Iowa", winningNumbers: "" },
	{ name: "Kansas", winningNumbers: "" },
	{ name: "Kentucky", winningNumbers: "" },
	{ name: "Louisiana", winningNumbers: "" },
	{ name: "Maine", winningNumbers: "" },
	{ name: "Maryland", winningNumbers: "" },
	{ name: "Massachusetts", winningNumbers: "" },
	{ name: "Michigan", winningNumbers: "" },
	{ name: "Minnesota", winningNumbers: "" },
	{ name: "Mississippi", winningNumbers: "" },
	{ name: "Missouri", winningNumbers: "" },
	{ name: "Montana", winningNumbers: "" },
	{ name: "Nebraska", winningNumbers: "" },
	{ name: "Nevada", winningNumbers: "" },
	{ name: "New Hampshire", winningNumbers: "" },
	{ name: "New Jersey", winningNumbers: "" },
	{ name: "New Mexico", winningNumbers: "" },
	{ name: "New York", winningNumbers: "" },
	{ name: "North Carolina", winningNumbers: "" },
	{ name: "North Dakota", winningNumbers: "" },
	{ name: "Ohio", winningNumbers: "" },
	{ name: "Oklahoma", winningNumbers: "" },
	{ name: "Oregon", winningNumbers: "" },
	{ name: "Pennsylvania", winningNumbers: "" },
	{ name: "Rhode Island", winningNumbers: "" },
	{ name: "South Carolina", winningNumbers: "" },
	{ name: "South Dakota", winningNumbers: "" },
	{ name: "Tennessee", winningNumbers: "" },
	{ name: "Texas", winningNumbers: "" },
	{ name: "Utah", winningNumbers: "" },
	{ name: "Vermont", winningNumbers: "" },
	{ name: "Virginia", winningNumbers: "" },
	{ name: "Washington", winningNumbers: "" },
	{ name: "West Virginia", winningNumbers: "" },
	{ name: "Wisconsin", winningNumbers: "" },
	{ name: "Wyoming", winningNumbers: "" }
  ];
  
  
  
  const button = document.createElement("button");
  button.textContent = "Show states";
  document.querySelector(".winning-numbers").appendChild(button);
  
  const select = document.createElement("select");
  document.querySelector(".winning-numbers").appendChild(select);
  select.style.display = "none";
  
  button.addEventListener("click", e => {
	// Clear the previous options from the select element
	select.innerHTML = "";
	
	states.forEach(state => {
	  const option = document.createElement("option");
	  option.value = state.winningNumbers;
	  option.textContent = state.name;
	  select.appendChild(option);
	});
	select.style.display = "block";
  });
  
  select.addEventListener("change", e => {
	alert(`Winning numbers for ${e.target.options[e.target.selectedIndex].text}: ${e.target.value}`);
  });
  
