class ProductsApi {

  static products = [
    {
      "id": 1,
      "code": "prd001",
      "name": "Medium t-shirt",
      "description": "A Medium t-shirt",
      "category": 1,
      "sub-category": 101,
      "rate": 10,
      "active": true
    }, {
      "id": 2,
      "code": "prd002",
      "name": "Medium Trouser",
      "description": "A Medium trouser",
      "category": 1,
      "sub-category": 102,
      "rate": 20,
      "active": true
    }, {
      "id": 3,
      "code": "prd003",
      "name": "keyboard",
      "description": "keyboard for desktop PC",
      "category": 2,
      "sub-category": 103,
      "rate": 30,
      "active": true
    }
];

  static categories = [
    {
      "id": 1,
      "name": "cloth",
      "level": 1,
      "parent_id": 0
    },
    {
      "id": 101,
      "name": "t-shirt",
      "level": 2,
      "parent_id": 1
    },
    {
      "id": 102,
      "name": "trouser",
      "level": 2,
      "parent_id": 1
    },
    {
      "id": 2,
      "name": "electronics",
      "level": 1,
      "parent_id": 0
    },
    {
      "id": 103,
      "name": "computer",
      "level": 2,
      "parent_id": 2
    }
  ];

  static getCategoryName(categoryId) {
    let category = this.categories.filter(category => (category.id === categoryId));
    if(category.length > 0) {
      return category[0].name;
    }
  }
  static getCategories(level, parentId) {
    let parentIdInt = parseInt(parentId);
    return this.categories.filter(category => (category.level === level && category.parent_id === parentIdInt));
  }

  static getAllProducts() {
    return fetch("products.json").then(response => {
      return response.json();
    });

    //return this.products;
  }

  static getProduct(productId) {
    let productIdInt = parseInt(productId);
    let product = this.products.filter(product => (product.id === productIdInt));
    if(product.length === 0) {
      return null;
    } else {
      return product[0];
    }
  }

  static updateCat(cat) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/cats/${cat.id}`, {
      method: 'PUT',
      headers: headers, 
      body: JSON.stringify({cat: cat})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createOrUpdateProduct(myProd) {
    //new Date().valueOf()
    if(myProd.id === -1) {
      myProd.id = new Date().valueOf();
      this.products.push(myProd);
    } else {
      let existingProd = this.getProduct(myProd.id);
      existingProd.code = myProd.code;
      existingProd.name = myProd.name;
      existingProd.description = myProd.description;
      existingProd.category = myProd.category;
      existingProd["sub-category"] = myProd["sub-category"];
      existingProd.rate = myProd.rate;
      existingProd.active = myProd.active;
    }
    
  }

  static deleteCat(cat) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`${process.env.API_HOST}/api/v1/cats/${cat.id}`, {
      method: 'DELETE', 
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ProductsApi;
