/* 
param a - number
param b - number
addNumbers return type - number
*/
function addNumbers(a:number,b:number):number {
    return a + b;
}

export default addNumbers;

/* 
param str1 - string
param str2 - string
addStrings return type - string
*/
export const addStrings = (str1:string, str2:string):string => `${str1} ${str2}`;

/* 
param title - string
param param - string (or) number
format return type - string
*/
export const format = (title: string, param: string | number): string => `${title} ${param}`;

/* Void functions */
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
}

/* Promise functions */
export const fetchData = (url:string):Promise<string> => Promise.resolve(`Data from ${url}`);

/* rest parameters */
export const introduce = (salutation:string, ...names: string[]):string => {
    return `${salutation} ${names.join('..')}`;
}

export function getName(user: {first: string, last: string}):string {
    return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}
