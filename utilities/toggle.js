function toggle(id){
    const container = document.getElementById('container').childNodes
    for(const section of container){
        if(section.tagName == 'DIV'){
            if(section.id == id) section.style.display = 'block'
            if(section.id != id) section.style.display = 'none'
        }

    }
}
