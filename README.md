
# react-native-rn-gtl-realmdb

## Getting started

`$ npm install react-native-rn-gtl-realmdb --save`

### Mostly automatic installation

`$ react-native link react-native-rn-gtl-realmdb`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-rn-gtl-realmdb` and add `RNRnGtlRealmdb.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRnGtlRealmdb.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRnGtlRealmdbPackage;` to the imports at the top of the file
  - Add `new RNRnGtlRealmdbPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-rn-gtl-realmdb'
  	project(':react-native-rn-gtl-realmdb').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-rn-gtl-realmdb/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-rn-gtl-realmdb')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNRnGtlRealmdb.sln` in `node_modules/react-native-rn-gtl-realmdb/windows/RNRnGtlRealmdb.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Rn.Gtl.Realmdb.RNRnGtlRealmdb;` to the usings at the top of the file
  - Add `new RNRnGtlRealmdbPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNRnGtlRealmdb,{ RealmHelper } from 'react-native-rn-gtl-realmdb';

// TODO: What to do with the module?
RealmHelper;

create singlton of "RealmHelper" 
let realmHelper = RealmHelper.getInstance();

Now you can perform all realm databse operation using "realmHelper", 
Example: https://github.com/vishal-gtl/rn-realm-db/tree/master/rn_realm_db_demo
This demo tested in android emulator.



```
  