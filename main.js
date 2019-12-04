/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
    var header = document.querySelector('header');
		var section = document.querySelector('section');

/* STEP 3: Store the URL of a JSON file in a variable */
		var requestURL = 'https://jessicagilfillan.github.io/JSON/i-scream.json';

/* STEP 4: Create a new XHR object */
		var request = new XMLHttpRequest();

/* STEP 5: Open a new request using the request() method */
		request.open('GET', requestURL);

/* STEP 6: Set JavaScript to accept JSON from the server */
		request.responseType = 'json';

/* STEP 7: Send the request with the send() method */
    		request.send();

/* STEP 8: Add an event handler that listens for the onload event of the JSON file/object */
        		request.onload = function() {
        			var Weird Deals = request.response;
        			console.log(WeirdDeals);
        			populateHeader(WeirdDeals);
        			newDeals(WeirdDeals);
        		}

/* STEP 9: Build out the populateHeader() function */
    	function populateHeader(jsonObj){

	// Grab the company Name
            			var H1 = document.createElement('h1');
            			H1.textContent = jsonObj['companyName'];
            			header.appendChild(H1);
            			// Grab the company location and established date
            			var Para = document.createElement('p');
            		Para.textContent = 'Head Office: ' + jsonObj['headOffice'] + ', Established: ' + jsonObj['established'];
            			header.appendChild(headerPara);
            		}

  /* STEP 10a: Create a function to show new deals */
    function newDeals(jsonObj){

// STEP 10b: Bind the JSON topFlavors object to a var
                			var newDeals = jsonObj['newDeals'];

// STEP 10c: Loop through the topFlavors object
                			for (var i = 0; i < newDeals.length; i++) {

// STEP 10d: build HTML elements for the content
                				var article = document.createElement('article');
                				var h2 = document.createElement('h2');
                				var img = document.createElement('img');
                				var p1 = document.createElement('p');
                				var p2 = document.createElement('p');
                				var list = document.createElement('ul');
  // STEP 10e: Set the textContent property for each of the above elements (except the UL), based on the JSON content
                				img.setAttribute('src', 'http://aws.computerstudi.es/~gc900182471/json/images/' + topFlavors[i].image);
                				img.setAttribute('alt', topFlavors[i].name);
                				h2.textContent = topFlavors[i].name;
                				p1.textContent = 'Calories: ' + topFlavors[i].calories;
                				p2.textContent = 'Type: ' + topFlavors[i].type;

// STEP 10f: Build a loop for the ingredients array in the JSON
                				var features = newDeals[i].features;
                				for (var j = 0; j < features.length; j++) {
                					var listItem = document.createElement('li');

// Set text for each list item
                					listItem.textContent = ingredients[j];
                					list.appendChild(listItem);
                				}

// STEP 10g: Append each of the above HTML elements to the ARTICLE element

// STEP 10h: Append each complete ARTICLE element to the SECTION element
                        				article.appendChild(img);
                        				article.appendChild(h2);
                        				article.appendChild(p1);
                        				article.appendChild(p2);
                        				article.appendChild(list);
                        				section.appendChild(article);
                        				}
                        			}
