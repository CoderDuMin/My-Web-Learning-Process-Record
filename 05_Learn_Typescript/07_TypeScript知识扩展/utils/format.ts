
// export function formatPrice() {

// }

// export function formatDate() {
  
// }

export namespace price {
  export function format(price: string) {
    return "¥" + price
  }

  export const name = "price"
}

export namespace date {
  export function format(dateString:string) {
    return 'date:'+dateString
  }

  const name = "date"
}


// export {}
