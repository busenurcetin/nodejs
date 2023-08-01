// Konsola isim yazdırmak istiyorsak 2 yolu vardır:

const john = 'john'
const peter = 'peter'

const sayHi= (name)=>{
    consolelog(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)

// Böyle yazarsak konsola hello there susan, hello there john, hello there peter yazdırır.