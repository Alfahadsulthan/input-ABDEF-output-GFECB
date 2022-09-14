let a=[],c=0,d,e,f=[],g=[],h=0,i,j,b=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function onclick(){
    a=input.value
    while(c<a.length){
        d=a[c]
        e=b.indexOf(d)
        if(e==25){
            e=-1
        }
        f[c]=b[e+1]
        c++ 
    }
    console.log(f)
    j=f.length
    i=f.length-1
    while(j>h){
        g[h]=f[i]
        h++
        i--
    }
    console.log(g)
}
var button=document.getElementById('b1')
button.addEventListener('click',onclick)