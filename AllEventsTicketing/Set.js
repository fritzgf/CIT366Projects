function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];
       
	  if(listA===null || listB === null) {//check for invalid inputs
	  	return null; // exit and return null to indicate an error
	  }
       for (var i =0; i < listA.length; i++) {// for every element in listA
       //get next value in the list
	  	var nextValue =listA[i];

	  	//for every element in listB
		   for(var j=0; j < listB.length; j++){
		   	if(listB[j]=== nextValue){//this listB element equals nextValue
            resultList.push(listB[j]);//add listB element to the end of resultList
				break;//break out of (exit) the listB inner loop
			}
		   }
	   }
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];

        if(listA===null || listB === null) {//check for invalid inputs
            return null; // exit and return null to indicate an error
        }

          resultList= listA;
          listB.forEach(el =>{
              if(!resultList.includes(el)) {
                  resultList.push(el);
              }
		  });

	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];

        if(listA===null || listB === null) {//check for invalid inputs
            return null; // exit and return null to indicate an error
        }
        listA.forEach(el => {
        	if(!listB.includes(el)){
        		resultList.push(el);
			}
		})


	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
	   listA.forEach(el =>{
	   	if(!listB.includes(el)){
            resultList.push(el);

		}
	   });
        listB.forEach(el =>{
            if(!listA.includes(el)){
                resultList.push(el);

            }
        });
	   return resultList;
	}	
	

}
