// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchProductsById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products/"+id)
    const data = await response.json()
    resolve({ data })
  }
  );
}

//cartegories API
export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/categories")
    const data = await response.json()
    resolve({ data })
  }
  );
}

//brands API
export function fetchBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/brands")
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchProductsByFilters(filter, sort, pagination) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];                  //filter[key] will give the array to catigoryValues
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?'+queryString) 
    const data = await response.json()
    const totalItems = await response.headers.get('X-Total-Count')   //this will give the total items present in json server  
    resolve({data:{products:data, totalItems:+totalItems}})
  }
  );
}