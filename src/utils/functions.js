//WRITE DATA TO LOCAL STORAGE
export function writeToStorage(storageName,object){
        localStorage.setItem(storageName, JSON.stringify(object));
    }


// READ DATA FROM LOCAL STORAGE
export function readFromStorage(storageName) {
       return JSON.parse(localStorage.getItem(storageName));
    }
