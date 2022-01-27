/* optional parameters in typescript
extra - optional param
*/

function printIngredients(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}`: "" }`);
}

printIngredients('1 Cup', 'Rice Flour');
printIngredients('1 Cup', 'Sugar', 'Rava');

/* Optional fields */
interface User {
    id: string,
    info?: {
        email?:string
    }
}

function getEmail(user: User):string {
    return user?.info?.email ?? "";
}

/* Optional callbacks */
function addWithCallback(x:number, y:number, callback?:() => void) {
    console.log([x,y]);
    callback?.(); // only invoke when this function exists
}