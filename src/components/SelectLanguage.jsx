import React from 'react'

const SelectLanguage = ({ setLanguage, openLanguage }) => {
    const languages = ['java', 'javascript', 'typescript', 'swift', 'sql', 'rust', 'ruby', 'python', 'php', 'perl', 'css', 'c', 'cpp', 'bash', 'json', 'kotlin', 'latex', 'xml', 'yaml'];
    return (
        <>
            <select onChange={(e) => setLanguage(e.target.value)} className={`border w-[15rem] rounded-md py-1 px-2 focus:outline-none mb-2 ${openLanguage ? "border-black cursor-pointer" : "cursor-not-allowed"}`} disabled={openLanguage ? false : true}>
                {languages.sort().map(lang => <option key={lang} value={lang} > {lang.slice(0, 1).toUpperCase() + lang.slice(1)} </option>)}
            </select>
        </>
    )
}

export default SelectLanguage;