import React from 'react';
import './css/searchBar.scss';
import searchIcon from '../../assets/akar-icons_search.svg'


const SearchBar = ({searchProducts}) => {
    return (
        <div className="input-group input-wrapper  rounded-2 align-items-center d-none d-lg-flex" >
            <div className="input-group-append p-2">
                <img src={searchIcon} alt=""/>
            </div>
            <input type="search"  className="form-control border border-0" placeholder="Search..." onChange={(e) => searchProducts(e.target.value)} />

        </div>
    );
    }

export default SearchBar;


// Crear un comando para crear un archivo index.html
// cindex = crear archivo index. html con la etiqueta
// ‹html>‹/html>
// como se crea en terminal
// touch index.html
// alias cindex="echo '<html></html>'" > index.html


// cis = archivo llamado main.js que contenga
// console.log ("Hola Mundo")
// como se crea en terminal
// touch main.js
// alias cis="echo 'console.log(\"Hola Mundo\")'" > main.js

// gadd = agregar todos los archivos a git
// alias gadd="git add ." 
