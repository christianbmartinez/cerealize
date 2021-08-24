/*
Cerealize - A node console app for generating randomized serial numbers. 
Features: 16, 20, 24 numbers or 32 characters with numbers.
Author: Christian B. Martinez
Contact: www.christianbmartinez.com, hello@christianbmartinez.com
*/

// Arrays of Uppercase, Lowercase, and other characters.
const x = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const y = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const z = ['!','@','#','$','%','^','&','*','(',')','+','=','_', '{', '}', '<', '>', '/', '[', ']']

// Function for generating random chars.
c = () => {
    for (i = Math.floor(Math.random() * x.length); i <= x.length; i++) {
        for (j = Math.floor(Math.random() * z.length); j <= z.length; j++) {
            for (k = Math.floor(Math.random() * y.length); k <= y.length; k++) {
                for (l = Math.floor(Math.random() * z.length); l <= z.length; l++) {
                    return `${x[i]}${z[j]}${y[k]}${z[l]}${Math.floor(Math.random() * 8999) + 1000}`
                }
            }
        }
    }
}

// Functions for generating random numbers
fr = () => { 
    return Math.floor(Math.random() * 8999) + 1000 
    // Returns a random 4 digit number
}

fv = () => {
    return Math.floor(Math.random() * 89999 ) + 10000
    // Returns a random 5 digit number
}

sx = () => {
   return Math.floor(Math.random() * 899999 ) + 100000 
    // Returns a random 6 digit number
}

// Generate the output
out = (x) => {
    if (x.val === 16) {        
        return(`${fr()}-${fr()}-${fr()}-${fr()}`) // ( 4 x 4 ) 16 digit serial number
    } else if (x.val === 20) {        
        return(`${fv()}-${fv()}-${fv()}-${fv()}`) // ( 5 x 4 ) 20 digit serial number
    } else if (x.val === 24) {
        return(`${sx()}-${sx()}-${sx()}-${sx()}`) // (6 x 4) 24 digit serial number
    } else {
        return(`${c()}-${c()}-${c()}-${c()}`) // ( 8 x 4 ) 32 char / number default
    }
}

console.log(out({})) // Default XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX
//console.log(out({ val:16 })) // XXXX-XXXX-XXXX-XXXX
//console.log(out({ val:20 })) // XXXXX-XXXXX-XXXXX-XXXXX
//console.log(out({ val:24 })) // XXXXXX-XXXXXX-XXXXXX-XXXXXX

