const URL = process.env.NODE_ENV === 'development' ? '/api' : '../../pos/common.do';
const REQUESTCONFIG = {
	method: 'POST',  
	headers: { "Content-Type": "application/x-www-form-urlencoded" }
}
export function fetch_request(body, success, failure) {
	REQUESTCONFIG.body = body;
    fetch(URL, REQUESTCONFIG).then( (response) => {
        if ( response.ok ) {
            return response.json(); 
        }
    }).then ( (response) => {
        success(response);
    }).catch((error) => {  
    	failure();
    }); 
} 