//Don't forget to return functions that are in the factory!
app.factory("ContactFactory", function($http, $q, FIREBASE_CONFIG) {
	
	let getContactList = () => {
		console.log("getCpntactList is running");
	    let info = [];
	    return $q((resolve, reject) => {
        $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json`)
	      .then((fbItems) => {
	        let contactCollection = fbItems.data;
	        // if (itemCollection !== null) {
		        Object.keys(contactCollection).forEach((key) => {
		          contactCollection[key].id=key;
		          info.push(contactCollection[key]);
		        });
		    // }
	          resolve(info);
	      })
	      .catch((error) => {
	        reject(error);
	      });
	    });
	  };

  let getSingleContact = (id) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${id}.json`)
      .then((resultz) => {
      	resultz.data.id = id;
          resolve(resultz);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let postNewContact = (newContact) => {
    return $q ((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact))
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };

  let remove = (contactId) => {
  	console.log("contactId", contactId);
  	return $q((resolve, reject) => {
  		$http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`)
  		.then((results) => {
  	console.log("results", results);
  			resolve();
  		})
     .catch((error) => {
        reject(error);
      });
    });
  };

	let editContact = (contact) => {
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contact.id}.json`, JSON.stringify({
				name: contact.name,
				address: contact.address,
				city: contact.city,
				phone: contact.phone,
				job: contact.job
			})
			).then((resultz) => {
				resolve(resultz);
  		})
	     .catch((error) => {
	        reject(error);
	      });
    });
  };


	  return {editContact:editContact, getContactList:getContactList, getSingleContact: getSingleContact, postNewContact: postNewContact, remove: remove};
      // , getSingleContact: getSingleItem, postNewItem: postNewItem, deletz: deletz, editItem: editItem};



});