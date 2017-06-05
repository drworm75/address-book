//Don't forget to return functions that are in the factory!
app.factory("ContactFactory", function($http, $q, FIREBASE_CONFIG) {
	
	let getContactList = (userId) => {
		console.log("get ContactList is running");
    console.log("rootScope in getContactList", userId);
	    let info = [];
	    return $q((resolve, reject) => {
        $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userId}"`)	      
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
    console.log("contact in ItemFactory", contact);
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contact.id}.json`, JSON.stringify({
        name: contact.name,
        address: contact.address,
        city: contact.city,
        state: contact.state,
        zip: contact.zip,
        phone: contact.phone,
        job: contact.job,
        uid: contact.uid
      })
      ).then((resultz) => {
      console.log("editContact factory after return... resultz", resultz);
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