export function isEmpty(string) {
  return string === null || string === "" || string === undefined;
}

export function isNotEmpty(string) {
  return !isEmpty(string);
}

export function formatDate(date, separator = "-") {
  let processDate = new Date(date),
    month = "" + (processDate.getMonth() + 1),
    day = "" + processDate.getDate(),
    year = processDate.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(separator);
}

export function hasWhiteSpace(s) {
  return /\s/g.test(s);
}

export function getWarehouseNameByWarehouseCode(warehouses, selectedCode) {
  let warehouseName = "";

  warehouses.map((warehouse) => {
    if (warehouse.wareHouseCode === selectedCode) {
      warehouseName = warehouse.name;
    }
    return null;
  });
  return warehouseName;
}

export function changeDateFormat(date, dateFormat) {
  let processDate = new Date(date),
    month = "" + (processDate.getMonth() + 1),
    day = "" + processDate.getDate(),
    year = processDate.getFullYear(),
    monthName = processDate.toLocaleDateString("default", { month: "short" }),
    dateName = processDate.toLocaleDateString(undefined, { weekday: "short" }),
    hours = processDate.getHours(),
    minutes = processDate.getMinutes(),
    convertedHours = hours % 12,
    period = hours / 12;

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  switch (dateFormat) {
    case "dd/MM/yyyy":
      return [day, month, year].join("/");
    case "MM/dd/yyyy":
      return [month, day, year].join("/");
    case "dd/MMM/yyyy":
      return [day, monthName, year].join("/");
    case "MMM/dd/yyyy":
      return [monthName, day, year].join("/");
    case "ddd/dd/MMM":
      return `${dateName}, ${day} ${monthName} ${
        convertedHours === 0 ? 12 : convertedHours
      }:${minutes} ${
        hours === convertedHours ? "am" : period === 2 ? "am" : "pm"
      }`;
    case "yyyy/mm/dd":
      return `${year} ${monthName} ${day} ${
        convertedHours === 0 ? 12 : convertedHours
      }:${minutes} ${
        hours === convertedHours ? "am" : period === 2 ? "am" : "pm"
      }`;
    default:
      return [day, month, year].join("/");
  }
}

export function isEvenNumber(number) {
  if (parseFloat(number) % 2 === 0) {
    return true;
  }
  return false;
}

export function isConsistWith(pathName, content) {
  let pathMatched = false;

  if (content && content.length > 0) {
    content.map(({ link }) => {
      if (link === pathName) {
        pathMatched = true;
      }
      return null;
    });
  }

  return pathMatched;
}

export function textTruncate(str = "", length = 100, ending = "...") {
  if (str === null || str === undefined) {
    return "";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

export function stringHasSpaces(text) {
  if (text === null || text === undefined) {
    return false;
  } else {
    return !/\s/g.test(text);
  }
}

export function getActiveMainSidebar(path) {
  if (path.substring(0, 14) === "/erp/inventory") {
    return "inventory";
  } else if (path.substring(0, 14) === "/erp/purchases") {
    return "purchases";
  } else if (path.substring(0, 10) === "/erp/sales") {
    return "sales";
  } else if (path.substring(0, 14) === "/erp/customers") {
    return "customers";
  } else if (path.substring(0, 14) === "/erp/suppliers") {
    return "suppliers";
  } else if (path.substring(0, 13) === "/erp/settings") {
    return "settings";
  } else if (path.substring(0, 12) === "/erp/reports") {
    return "reports";
  } else if (path.substring(0, 14) === "/erp/warehouse") {
    return "warehouse";
  } else {
    return "inventory";
  }
}

export function getActiveSettingsSidebar(path) {
  if (path.substring(0, 19) === "/settings/locations") {
    return "location";
  } else if (path.substring(0, 15) === "/settings/users") {
    return "users";
  } else if (path.substring(0, 19) === "/settings/userRoles") {
    return "user Roles";
  } else {
    return "location";
  }
}

export function convertArrayToString(arrayToConvert) {
  let resultString = "";

  arrayToConvert.map((item) => {
    resultString += `${item}^`;
    return null;
  });

  return resultString.substring(0, resultString.length - 1);
}

export function convertStringToArray(stringToSplit: string) {
  return stringToSplit.split("^");
}

export function getStringArrayForEnquiry(dataString: string) {
  let stringArray: any = [];

  stringArray =
    dataString !== undefined ? convertStringToArray(dataString) : undefined;
  return stringArray;
}

export function stringHasSpecialCharacters(text) {
  const validPattern = RegExp(/^[a-zA-Z0-9]+$/i);
  return validPattern.test(text);
}

export function stringHasSpecialCharactersExceptSpace(text) {
  const validPattern = RegExp(/^[a-zA-Z0-9 ]+$/i);
  return validPattern.test(text);
}

export function stringHasNumbersAndHypenOnly(text) {
  const validPattern = RegExp(/^[a-zA-Z0-9-]+$/i);
  return validPattern.test(text);
}

export function checkUserPermissions(permissionsList, permission) {
  let permissionAllowed = false;

  if (isNotEmpty(permissionsList) && permissionsList.length > 0) {
    permissionsList.map(({ allow, id }) => {
      if (id === permission) {
        permissionAllowed = allow;
      }
      return null;
    });
  }

  return permissionAllowed;
}

export function flattenObject(ob) {
  var toReturn = {};

  for (let i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if (typeof ob[i] == "object") {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
}

export function isValidBarcode(barcode) {
  // check length
  if (
    barcode.length < 8 ||
    barcode.length > 18 ||
    (barcode.length !== 8 &&
      barcode.length !== 12 &&
      barcode.length !== 13 &&
      barcode.length !== 14 &&
      barcode.length !== 18)
  ) {
    return false;
  }

  var lastDigit = Number(barcode.substring(barcode.length - 1));
  var checkSum = 0;
  if (isNaN(lastDigit)) {
    return false;
  } // not a valid upc/ean

  var arr = barcode
    .substring(0, barcode.length - 1)
    .split("")
    .reverse();
  var oddTotal = 0,
    evenTotal = 0;

  for (var i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return false;
    } // can't be a valid upc/ean we're checking for

    if (i % 2 === 0) {
      oddTotal += Number(arr[i]) * 3;
    } else {
      evenTotal += Number(arr[i]);
    }
  }
  checkSum = (10 - ((evenTotal + oddTotal) % 10)) % 10;

  // true if they are equal
  return checkSum === lastDigit;
}

export function formatProductNameToPrint(input) {
  let charactorsArray = input.split(" ");
  let LINE_LENGTH = 27;
  let formattedInput = "";

  let currentLineLength = 0;
  for (var x = 0; x < charactorsArray.length; x++) {
    if (currentLineLength + charactorsArray[x].length < LINE_LENGTH) {
      formattedInput = formattedInput.concat(`${charactorsArray[x]} `);
      currentLineLength = currentLineLength + charactorsArray[x].length + 1;
    } else {
      currentLineLength = 0;
      formattedInput = formattedInput.concat("\n");
      formattedInput = formattedInput.concat(`${charactorsArray[x]} `);
      currentLineLength = currentLineLength + charactorsArray[x].length + 1;
    }
  }
  let lines = formattedInput.split("\n");
  return {
    line1: lines[0],
    line2: lines[1],
    line3: lines[2]
  };
}
