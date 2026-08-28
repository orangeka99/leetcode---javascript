/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
     var checkIfInstanceOf = function (obj, classFunction) {
        console.log(typeof obj);
        console.log(typeof classFunction);

        let check = true;
        // console.log(typeof ob)
        if (
          (typeof obj == "function" && typeof classFunction == "function") ||
          obj === null ||
          obj === undefined
        ) {
          console.log("PPPP");
          if (typeof obj == "function" && typeof classFunction == "function") {
            if (classFunction.prototype.isPrototypeOf(Object(obj)) == true) {
              return true;
            } else {
              return false;
            }
          }else{
            return false
          }
        } else {
          // if (typeof obj == "object" && typeof classFunction == "function") {

          if (typeof classFunction == "function") {
            if (classFunction.prototype.isPrototypeOf(Object(obj)) == false) {
              return false;
            } else {
              console.log("TRUE :");
              return true;
            }
          }

          if (Object.keys(obj).length == 0 && classFunction == null) {
            console.log("First");
            return false;
          }

          if (
            Object.keys(obj).length == 0 &&
            Object.keys(classFunction).length == 0 &&
            typeof obj == "object"
          ) {
            console.log("Second");
            return false;
            // if (typeof obj == "object" && typeof classFunction == "object") {
            //   return false;
            // }
            // if (typeof obj == "object" && typeof classFunction == "number") {
            //   return false;
            // }
          }

          if (typeof classFunction == "object") {
            return false;
          }
          if (typeof obj == typeof classFunction) {
            return false;
          }
          if (typeof classFunction != "function") {
            return false;
          }
        }
      };

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */