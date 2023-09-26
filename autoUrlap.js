
class AutoUrlap{
    #tipus=[]
    #rendszam=[]

    constructor(tipus, rendszam){
        const SZULOELEM=(".tarolo")
        this.#tipus=tipus
        this.rendszam=rendszam

        SZULOELEM.append(`<form action="">`)
        for (const key in object) {
                const element = object[key];
                SZULOELEM.append(` <label for="${rendszam}"></label>
                <label for="${tipus}"></label> >`)
            
        }
        SZULOELEM.append(` <input type="text">`)
        SZULOELEM.append(` <input type="text">`)
        SZULOELEM.append(` </form>`)
       
        
    }}
    export default AutoUrlap