

function patterns(params) {
    let str = "";
    for (let i = 1; i <= params; i++) {
        for(let j = 0; j <i; j++) {
            str = str + "*";
        }
        str = str + "\n";
    }
    console.log(str);
}
function patternsA(params) {
    let str = "";
    for (let row = 1; row <= params; row++) {
        for (let col = 0; col <params; col++){
            str = str + "*";
        }
        document.write(str);
    }
    function patternsA(params) {
        let str = "";
        for (let row = 1; row <= params; row++){
            for (let col = params; col > row; col--){
                if (col < 2 && col > 2){
                    str = str + "";
                } else{
                    str = str + "";
                }
            }
            for (let i = 0; i < row * 2-1; i++){
                str += "*";
            }
            str = str + "\n";
        }
        console.log(str);
    }
}
patternsA(3);