import data from "./furniture"

let colorList = []
let furnitureList = [{type: "all",
        quantity: 26}]
let priceList = [
    {range: [0, 500.00],
     quantity: 0   
    },
    {range: [500.00, 800.00],
     quantity: 0   
    },
    {range: [800.00, 1100.00],
     quantity: 0   
    },
    {range: [1100.00, 1500.00],
     quantity: 0   
    },
    {range: [1500.00, 3000.00],
     quantity: 0   
    },
]


export function  getColorList ()  {
        
        const newarrr = [...data]
   
        newarrr.map(x => {
        const singlecolor = {
            color: x.color,
            quantity: 1
        }
        const colorExists = colorList.find(item => item.color === x.color)
        if(colorExists){
        colorExists.quantity++
        } else {
        colorList.push(singlecolor)
        }

    }) 
    return colorList
    }

export function  getFurnList ()  {
        
    
    const newarrr2 = [...data]

    newarrr2.map(x => {
      const singleType = {
        type: x.category,
        quantity: 1
      }
    const typeExists = furnitureList.find(item => item.type === x.category)
    if(typeExists){
      typeExists.quantity++
    } else {
      furnitureList.push(singleType)
    }

  })
      return furnitureList
    }

export function getPriceCategories () {

    const newarr = [...data]
    newarr.map(x => {
        if(x.price > 0 && x.price <= 500){
            priceList[0].quantity++
        } else if(x.price > 500 && x.price <= 800){
            priceList[1].quantity++
        } else if(x.price > 800 && x.price <= 1100){
            priceList[2].quantity++
        }else if(x.price > 1100 && x.price <= 1500){
            priceList[3].quantity++
        } else if(x.price > 1500 && x.price <= 3000) {
            priceList[4].quantity++
        }
    })
    return priceList
}

export function discounts (){
    const newarr = [...data]

  const biggestDiscounts = newarr.filter(x => x.discount === true).sort((a, b) => 
  (b.withoutDiscount - b.price) - (a.withoutDiscount - a.price)).splice(0, 3)

  return biggestDiscounts
}


