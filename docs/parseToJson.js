const docsData = {
    globals: {
        variables: '/Users/asolovev/scout24/source/showcar-ui/src/01-settings/docs/',
        fonts: '/Users/asolovev/scout24/source/showcar-ui/src/03-generic/docs',
        layout: '/Users/asolovev/scout24/source/showcar-ui/src/05-layout/docs',
        utilities: '/Users/asolovev/scout24/source/showcar-ui/src/07-utilities/docs',
    },
    atoms: '/Users/asolovev/scout24/source/showcar-ui/src/06-components/atoms/**/docs',
    molecules: '/Users/asolovev/scout24/source/showcar-ui/src/06-components/molecules/**/docs',
    organisms: '/Users/asolovev/scout24/source/showcar-ui/src/06-components/organisms**/docs',
    extras: '/Users/asolovev/scout24/source/showcar-ui/docs/helpers/extras'
}

let allJson = {}

const prepairStructure = (name) =>{

}

Object.keys(docsData).forEach((component) => {

})



/*
Object.keys(docsData).forEach((component) => {

console.log(component)
/!*
    if(typeof docsData[component] === 'object' ){
        Object.keys(docsData[component]).forEach((group) => {
            console.log(docsData[component][group])
        })
    }
*!/
})*/


const finalJson = {
    globals:{
        variables:{
            colors:'url',
        }
    }
}

/*
 const fs = require('fs');
 const path = require('path');
 const recursiveSync = require('recursive-readdir-sync');

 let files = recursiveSync(path.join(__dirname, '../../../..'))


 globalJSON = files
 .filter(fileName => {
 return path.parse(fileName).base === 'example.html' && path.parse(fileName).dir.split('/').slice(- 3)[0] === 'src';
 })
 .map(htmlPaths => {
 const srcDir = path.parse(htmlPaths).dir;
 const distDir = srcDir.split('/').slice(0, - 3).join('/') + '/dist';
 const dirsArr = srcDir.split('/').slice(- 2);
 const identDir = dirsArr.join('/');
 return {
 name: dirsArr[1],
 type: dirsArr[0],
 distDir,
 srcDir,
 identDir,
 content: JSON.stringify(require('fs').readFileSync(htmlPaths, 'utf8'))
 }
 })
 .reduce((res, obj) => {
 res[obj.name] = {
 type: obj.type,
 name: obj.name,
 identDir: obj.identDir,
 distDir: obj.distDir,
 srcDir: obj.srcDir,
 content: obj.content
 };
 return res;
 }, ({}));
 */
