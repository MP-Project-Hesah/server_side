
<div align="center">
  <h1>Server Side</h1>
<img width="664" alt="بدون عنوان" src="https://user-images.githubusercontent.com/92258765/146672418-e09151da-cf5b-4397-975e-aa39246cdf74.png">
  </div>
  
  <hr>
  
<div align="center">
    
<br>
<br>  
    
<a href="https://nodejs.org/en/">
			<div>
				<img src="https://user-images.githubusercontent.com/92258765/146671698-9bf728b3-4fae-4a0e-9e93-f1e0ad3d1741.png"width="280" height="90>
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
   
 <a href="https://trello.com/mpprojecthesah/home">
<div>
<img src="https://gotcharecruitment.co.uk/wp-content/uploads/2017/03/Trello-logo-blue.svg_.png"width="250" height="90">
</div>
														       
<br>
														       
</div>
<div>
<img src="https://user-images.githubusercontent.com/92258765/146686922-ebef1f7e-3031-488c-a374-76cd72096338.png"width="300" height="100">
</div>



                                                                                                                                              
 ## [**My Slides**](https://www.slides.com)

## [**My Heorku** ](https://dashboard.heroku.com/)

## [**Clien side github**](https://github.com/MP-Project-Hesah/client_side)

## [**Trello**](https://trello.com/b/n9ol3PtC/frontendbackend)  
</div> 
</div> 
</div>																	
<hr> 
    
<br>

														       
# Inroductions
														       
## Learn the concepts used in this project
* [ Node.js Backend Architecture ](https://nodejs.org/en/docs/)
* [Setup Basic Server](https://blog.vanila.io/setup-basic-server-with-express-framework-37b2ec749a6d)
* [Implement JSON Web Token (JWT) Authentication](https://afteracademy.com/blog/implement-json-web-token-jwt-authentication-using-access-token-and-refresh-token)
* [Authentication vs Authorization](https://afteracademy.com/blog/authentication-vs-authorization)														       
## Development tools 
- Trello
- Wireframe.cc
- Creately														       
## Communication tools:
- Slack
## Installation:
#### Start backend server

## Database:

- MongoDB, with Mongoose API
														       
## Dependencies
You can install all dependencies by running `npm install` in the project directory.

| Dependency                                           | Usage                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------ |
| [axios](https://npm.com/package/body-parser)   | POST body parsing middleware. Adds body object to incoming request |
| [bcrypt](https://npmjs.com/package/compression) | Response compression middleware                                    |
| [express](https://npmjs.com/package/express)         | Express REST API framework                                         |
| [cors](https://npm.com/package/cors)                 | CORS middleware to set CORS policy                                 |
| [morgan](https://npmjs.com/package/morgan)           | HTTP request logger                                                |
| [mongoose](https://npmjs.com/package/winston)         | General purpose logger for the application                         |
| [passport](https://npmjs.com/package/nyc)                 | Code Coverage tool                                                 |
| [passport-jwt](https://npmjs.com/package/standard)       | Linting and styling tool.                                          |
| [react-dom](https://npmjs.com/package/chai)               | Assertion Library                                                  |
| [react-router-dom](https://npmjs.com/package/chai-http)     | Middleware for chai to test http endpoints                         |

<hr>
														       
<div align="center">
  <h1>Routes </h1>	
</div>
<hr>
<br> 
		   
## Test Route
This is the route that you can use to check if the API is running properly.      
                                                                                                                          
## Home

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


**Get all episodes**


| ENDPOINT  | Method | Params | URL Params | Success Response                                                                                 | Error Response                                                                                                         |
| --------- | ------ | ------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| /episodes | `GET`  | -      | -          | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `episodes:` [[episodes](#episode)],<br />`}` | <br /> 404 NOT FOUND <br> **Content:** `{ error: <A Message with a description of the Error> }` |

<br />


**Get episode by id**

| ENDPOINT  | Method | Params | URL Params | Success Response                                                                                 | Error Response                                                                                                         |
| --------- | ------ | ------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| /episode/{id} | `GET`  | -      | -          | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `episode:` [[Episode](#episode)],<br />`}` | <br /> 404 NOT FOUND <br> **Content:** `{ error: <A Message with a description of the Error> }` |

<br />




**create new episode**

| ENDPOINT  | Method | Params | URL Params | Success Response                                                                                 | Error Response                                                                                                         |
| --------- | ------ | ------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| /podcasts/{id}/episodes | `POST`  | -      | -          | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `podcasts:` [[Episode](#episode)],<br />`}` | <br /> 404 NOT FOUND <br> **Content:** `{ error: <A Message with a description of the Error> }` |

<br />

**get new episode**
| ENDPOINT  | Method | Params | URL Params | Success Response                                                                                 | Error Response                                                                                                         |
| --------- | ------ | ------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| /podcasts/{id}/episodes/new | `GET`  | -      | -          | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `podcasts:` [[Episode](#episode)],<br />`}` | <br /> 404 NOT FOUND <br> **Content:** `{ error: <A Message with a description of the Error> }` |

<br />

## Cover-image

**update podcast cover-image**

| ENDPOINT  | Method | Params | URL Params | Success Response                                                                                 | Error Response                                                                                                         |
| --------- | ------ | ------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| /podcasts/{id}/cover-image | `PUT`  | -      | -          | **Code:** 200 - OK **Content:** <br />`{`<br /> `podcasts:` [[Episode](#cover-image)],<br />`}` | <br /> 404 NOT FOUND <br> **Content:** `{ error: <A Message with a description of the Error> }` |

<br />

## Subscriptions

**get all user subscriptions**

| ENDPOINT  | Method | Params | URL Params | Success Response                                                                                 | Error Response                                                                                                         |
| --------- | ------ | ------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| /user/{id}/subscriptions | `GET`  | -      | -          | **Code:** 200 - OK<br />**Content:** <br />`{`<br /> `subscriptions:` [[Podcast](#subscriptions)],<br />`}` | <br /> 404 NOT FOUND <br> **Content:** `{ error: <A Message with a description of the Error> }` |

<br />

<table>
<tr>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:104px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/register</strong></span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">POST</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:302px;">
                <p><span style="font-family: Calibri, sans-serif;">{ username: &apos;HESA&apos;, password:&apos;1234&apos; }</span></p>
            </td>
            <td style="background-color:#deeaf6; border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:132px;">
                <p><span style="font-family: Calibri, sans-serif;">Create a new user.</span></p>
            </td>
        </tr>
        <tr>
            <td style="border-bottom:2px solid #9cc2e5; border-left:2px solid #9cc2e5; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:104px;">
                <p><span style="font-family: Calibri, sans-serif;"><strong>/authenticate</strong></span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:66px;">
                <p><span style="font-family: Calibri, sans-serif;">POST</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:302px;">
                <p><span style="font-family: Calibri, sans-serif;">{ username: &apos;HESA&apos;, password:&apos;1234&apos; }</span></p>
            </td>
            <td style="border-bottom:2px solid #9cc2e5; border-left:none; border-right:2px solid #9cc2e5; border-top:none; vertical-align:top; width:132px;">
                <p><span style="font-family: Calibri, sans-serif;">Generate a token.</span></p>
            </td>
        </tr>
    </tbody>
</table>
     

<hr>

# Models 


## User

| key          | type               
| ------------ | -------------------        
| email        | String                             
| name         | String              
| password     | String              
| avatar       | String                                  
| role         | Schema <Roles>                       
           
## Podcast

| key          | type               
| ------------ | -------------------
| name        | String              
| desc         | String              
| cover_image     | String                      
| episode_id   | String                       
| notificationsId       | Boolean 
| subscribtions_id       | String 
| isdel       | Boolean 								  
| roleId       | String   
								  
## Episode

| key          | type               
| ------------ | -------------------
| podcastId        | String              
| name         | String   
| episodeId         | String    
| date     | String              
| title       | String   
| desc       | String   
| length       | String                        
| musicId       | schema music             
								  
## Background_music

| key          | type               
| ------------ | -------------------        
| musicId        | String                             
| musicName         | String              
| title     | String  							  
           
## Subscriptions

| key          | type               
| ------------ | -------------------        
| podcastId        | String                             
| subscriptionsId         | String              
| date     | String              
  





                                                                                                                               
                                                                                                                               
                                                                                                                               
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
