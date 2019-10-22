let lyric1 = ' bottles of beer on the wall, '
let lyric2= ' bottles of beer.'
let lyric3= ' Take one down and pass it around, '
let lyric4 = ' bottles of beer on the wall.' 

let N =99
for(let i=N ; i>=0 ; i--){
         
       if(i==0){
           console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.')
       break;}
       if(i==1){
       lyric4='no more bottles of beer on the wall.'
       console.log(i+lyric1+i+lyric2+'\n'+lyric3+lyric4);
       continue;}
     console.log(i+lyric1+i+lyric2+'\n'+lyric3+(i-1)+lyric4);
    }
