# LOCUS
Locus is a simple Javascript based web-app which gives you the basic functionaility of real-time location changing on Google maps. You can see an object's location bieng changed instant wise on LOCUS. 
You can see location changes of as many objects as you want. This app is a basic one and you can extend it to match your requirements. Yo can either make a location tracking app of your trusted contacts, you family members or employees etc. However, This is a dashboard side website. It does not support the tranmission of object's cooridnates. Rather it just accepts Object's Coordinates and show them moving on map in real-time 


## Getting Started

Just clone the repo and open the ```index.html``` file in editor. Put you Google Maps API Key in the ```Maps``` Tag and Then Open this file in browser. You'll see a Map with 4 markers there. To understand how things are working, continue reading the documantation.

## Open source liberaries Used
The following liberaries have been used for developing LOCUS:
 - [Google Firebase (Real-Time Database)](https://firebase.google.com/docs/database/)
 - [Goolge Maps API](https://cloud.google.com/maps-platform)
 
### Google Firebase (Real-Time Database):
 Used to get realtime location changes of an object. The object's location is transmitted to database from his end (not a part of this liberary. It only shows you the object being moved on maps), This app accepts the coordinates of object in real-time using Google Firebase Real-time Database.
 
 ### Goolge Maps API
 Used to show the objects's location being moved. The most basic part of app.
 
## Project Structure
- ```index.html``` 

It has just the initialization of a Google Map. Don't Forget to add you own Google Maps API key into the script tag of Maps. This file also has 
script tag for ```index.js```.

- ```index.js```

It has all the logic related to our maps app. Note that in the code, hardcoded values are used so that you can see the app working right after you clone it. However,
you can always get your cooridinates from your real-time database and show them on maps as well (Database initialization and usage is present in this file as well.)
#### i) Firebase Stuff:
You go to firebase and get your firebase project credentials and paste them to connect your project with LOCUS. 
Then you get the address of database from where you want to get the coordinates i.e:

```const dbRefObject = new Firebase("<your-firebase-project-db-address-which-contains-realtime-coordinates>");```
You can obtain as many properties of object as you want. Like Name, Info etc. However longitude and latitude values are must. Using these values you'll be able to place the object on the map.

You get these properties from database using ```childSnapshot.val().propert-name-saved-in-data-base```
We'll use these info properties later in Map.

#### ii) Map Stuff:
First few lines are initilizing ones. ```markers``` array holds the info of all the objects which will be drawn on the map. In the code, imaginary values have been used to stuff this array, in real you'll use the real-time data about object retrieved from the Firebase data-base.

Similarly you'll use addintional information (Name, Location) in the ```infoWindowContent``` to make an interactive Marker tooltip on the map.

Later we loop through the ```markers``` and draw every object on the map according to it's changing/static coordinates. And in the last, we draw a map on the DOM.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Inspiration

* Uber/Careem
* [Google Trusted Contacts](https://contacts.google.com/trustedcontacts/u/0/)
* [Life360](https://www.life360.com/)

### Auther:
- **M. Zain Mohsin** from [Team Progomania](https://www.facebook.com/progomania/)
