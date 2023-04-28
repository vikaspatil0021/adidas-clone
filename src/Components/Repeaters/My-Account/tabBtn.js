

export const tabBtn = (tabId,className)=>{
    const activeTab = document.querySelector('.' + className);
    
    if(activeTab){
        
        activeTab.classList.remove(className);
        const activeTabContent = document.querySelector('#'+ activeTab.id + '-content');
        if(activeTabContent){
            activeTabContent.classList.add('d-none')
        }
    }
    


    const clickedTab  = document.querySelector('#'+ tabId);
    if(clickedTab){

        clickedTab.classList.add(className);
    }




    
    const clickedTabContent = document.querySelector('#'+ tabId + "-content")
    if(clickedTabContent){
        clickedTabContent.classList.remove('d-none')
    }

    window.scrollTo(0,0)

}
