import  { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) { 
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorageItem.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
    
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(true);
        }
  
      }, 1000);
    });
  
  
  
    const saveItem = (newItem) => {
      try{
        const strinfifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, strinfifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(true);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
}

export { useLocalStorage };