app.factory("ContactFactory", function($http, $q, FIREBASE_CONFIG) {
	
	let getContactList = () => {
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

 //  let getSingleItem = (id) => {
 //    return $q((resolve, reject) => {
 //      $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${id}.json`)
 //      .then((resultz) => {
 //      	resultz.data.id = id;
 //          resolve(resultz);
 //      })
 //      .catch((error) => {
 //        reject(error);
 //      });
 //    });
 //  };

 //  let postNewItem = (newItem) => {
 //    return $q ((resolve, reject) => {
 //      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
 //      .then((results) => {
 //        resolve(results);
 //      })
 //      .catch((error) => {
 //        reject(error);
 //      });
 //    });
 //  };

 //  let deletz = (itemId) => {
 //  	return $q((resolve, reject) => {
 //  		$http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
 //  		.then((resultz) => {
 //  			resolve();
 //  		})
 //     .catch((error) => {
 //        reject(error);
 //      });
 //    });
 //  };

	// let editItem = (item) => {
	// 	return $q((resolve, reject) => {
	// 		$http.put(`${FIREBASE_CONFIG.databaseURL}/items/${item.id}.json`, JSON.stringify({
	// 			assignedTo: item.assignedTo,
	// 			isCompleted: item.isCompleted,
	// 			task: item.task
	// 		})
	// 		).then((resultz) => {
	// 			resolve(resultz);
 //  		})
	//      .catch((error) => {
	//         reject(error);
	//       });
 //    });
 //  };


	  return {getContactList:getContactList};
      // , getSingleItem: getSingleItem, postNewItem: postNewItem, deletz: deletz, editItem: editItem};



});