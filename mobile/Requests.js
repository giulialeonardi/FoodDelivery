const Requests = {
    getRestaurantInfo,
    getMenu
  };

const apiUrl = "http://localhost:9000"

async function getRestaurantInfo(id) {
    const response=
            await fetch(`${apiUrl}/restaurant/${id}/`)
            .then(resp => resp.json())
            .then (responseJson => {
                return responseJson
            } 
        ).catch(err => {console.log(err)});  
        return response;
    }

async function getMenu(restaurantId, sectionId) {
    const response=
            await fetch(`${apiUrl}/restaurant/${restaurantId}/menu/${sectionId}/`)
            .then(resp => resp.json())
            .then (responseJson => {
                    return responseJson
            } 
        ).catch(err => {console.log(err)});  
        return response;
}
    
    export default Requests;