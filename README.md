
<div align="center">
  <h1>Server Side</h1>
<img width="664" alt="بدون عنوان" src="https://user-images.githubusercontent.com/92258765/146672418-e09151da-cf5b-4397-975e-aa39246cdf74.png">
  </div>
  
  <hr>
  
<div align="center">
	<div>
    
<br>
<br>  
    
<a href="https://nodejs.org/en/">
			<div>
				<img src="https://user-images.githubusercontent.com/92258765/146671698-9bf728b3-4fae-4a0e-9e93-f1e0ad3d1741.png"width="300" height="90>
			</div>                                                                                                                                       
<br>                                                                                                                                            
<br>  
<br>                                                                                                                                            
                                                                                                                                            
<a href="https://www.postman.com/company/press-media/">
			<div>
				<img src="https://user-images.githubusercontent.com/92258765/146672033-a1326f94-42af-4f0f-b60f-0789adb6f738.png"width="350" height="130">
			</div>                                                                                                                                      
<br>
<br>
                                                                                                                                                
                                                                                                                                            
                                                                                                                                            
                                                                                                                                            
  <a href="https://docs.mongodb.com/drivers/node/current/">
			<div>
				<img src="https://user-images.githubusercontent.com/92258765/146671505-412c86b5-eaaa-40ca-b06d-30a188a4fc0c.png"width="300" height="100">
			</div>
    
  <br>
  <br>                                                                                                                                              
                                                                                                                                                
                                                                                                                                                
 <a href="https://www.postman.com/company/press-media/">
			<div>
				<img src="https://user-images.githubusercontent.com/92258765/146671646-e7a650f6-179e-4650-bbd8-4925188de8db.png"width="350" height="130">
			</div>
   
 <a href="https://www.postman.com/company/press-media/">
			<div>
				<img src="https://gotcharecruitment.co.uk/wp-content/uploads/2017/03/Trello-logo-blue.svg_.png"width="300" height="100">
			</div>


  </div> </div>  
                                                                                                                                             
   <hr> 
    
  <br>
                                                                                                                               
# Routes

## Test Route
This is the route that you can use to check if the API is running properly.                                                                                                        
                                                                                                                               
### Home

 **Returns a set of of podcasts and authors based on the categories selected by the user.**



| ENDPOINT | Method | Params | URL Params                          | Success Response                                                                                                                                                                               | Error Response                                                                                                         |
| -------- | ------ | ------ | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| /home    | `GET`  | -      | `categories:` [Category](#category) | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `hottestPodcasts:` [[Podcast](#podcast)],<br />`newReleases`: [[Podcast](#podcast)],<br />| <br />**Content:** `{ error: <A Message with a description of the Error> }` |


                                                                                                                               
                                                                                                                               
                                                                                                                               
                                                                                                                               
                                                                                                                               
                                                                                                                               
                                                                                                                               
## Podcasts

**Get all podcats**


| ENDPOINT  | Method | Params | URL Params | Success Response                                                                                 | Error Response                                                                                                         |
| --------- | ------ | ------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| /podcasts | `GET`  | -      | -          | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `podcasts:` [[Podcast](#podcast)],<br />`}` | <br /> 404 NOT FOUND <br> **Content:** `{ error: <A Message with a description of the Error> }` |

<br />

**Get a single podcast**



| ENDPOINT      | Method | Params | URL Params | Success Response                                                                              | Error Response                                                                                                                                                                                                            |
| ------------- | ------ | ------ | ---------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /podcasts/:id | `GET`  | id     | -          | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `podcast:` [Podcast](#podcast),<br />`}` | **Code:** 404 - NOT FOUND<br />**Content:** `{ message: "Podcast not Found." }`<br /><br />

<br />

 **Stream a podcast file**



| ENDPOINT             | Method | Params | URL Params | Success Response                                                                         | Error Response                                                                                                                                                                                                            |
| -------------------- | ------ | ------ | ---------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /podcasts/:id/listen | `GET`  | id     | -          | <br />**Content:** <br />`Stream of a podcast audio file` | **Code:** 404 - NOT FOUND<br />**Content:** `{ message: "Podcast not Found." }`<br /><br />

<br />
                                                                                                         
                                                                                                                               
## Episodes
## Category
## 
                                                                                                                               
                                                                                                                               
                                                                                                                               
<div align="center">
  <h1> Use case UML Digram</h1>
  </div>


![Untitled Workspace (21)](https://user-images.githubusercontent.com/92258765/146610610-86959abe-2bc8-4026-bca7-e57719899d60.jpg)



<div align="center">
  <h1> State UML Digram </h1>
  </div>
  
![Untitled Workspace (13)](https://user-images.githubusercontent.com/92258765/146556069-05fdd93c-3891-4c74-b105-04a64947a65a.jpg)


<div align="center">
  <h1> ER Model Digram</h1>
  </div>
  
![Untitled Workspace (24)](https://user-images.githubusercontent.com/92258765/146653859-5c2e3aa4-9c39-4393-b1e0-b48737c1d007.jpg)
