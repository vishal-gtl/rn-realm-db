import React from 'react';
import Realm from 'realm';
import {Alert} from 'react-native';

class RealmHelper {

    static mRealmHelper = null;
    mRealm = null;

    constructor() {
    }

    static getInstance() {
        if (!this.mRealmHelper) {
            this.mRealmHelper = new RealmHelper();
            return this.mRealmHelper;
        } else {
            return this.mRealmHelper;
        }
    }

    // create new schema
    creteSchema(schemaArray) {
        if (this.mRealm == null) {
            this.mRealm = new Realm({schema: [schemaArray]});
            return this.mRealm;
        } else {
            return this.mRealm;
        }
    }

    // Get realm DB instance
    getRealmInstance() {
        if (this.mRealm != null)
            return this.mRealm;
        else
            return null;
    }

    // insert recode
    insert(schema, fieldArray, valueArray) {
        try {
            console.log("fieldArray >> "+fieldArray+"    valueArray >> "+valueArray);
            let fieldValueObj = null;
            if (this.checkFieldValueArrayValidation(fieldArray, valueArray)) {
                fieldValueObj = {};
                for (let i in fieldArray) {
                    fieldValueObj[fieldArray[i]] = valueArray[i];
                }

                if (fieldValueObj != null) {
                    this.getRealmInstance().write(() => {
                        console.log("schema >> "+schema);
                        console.log("fieldValueObj >> "+fieldValueObj);
                        this.getRealmInstance().create(schema, fieldValueObj);
                    });
                    return true;
                }
            }
        } catch (e) {
            console.log("Exception : insert >>> " + e);
        }
    }

    // Update : Must add primary field & its value in array
    update(schema, fieldArray, valueArray, primaryField, primaryId) {
        try {
            let fieldValueObj = null;
            if (this.checkFieldValueArrayValidation(fieldArray, valueArray) && this.isValidPrimaryField(primaryField, primaryId)) {
                this.getRealmInstance().write(() => {
                    let obj = this.getRealmInstance()
                        .objects(schema)
                        .filtered(primaryField + " = " + primaryId);

                    if (obj.length === 1) {
                        fieldValueObj = new Object();
                        for (let i in fieldArray) {
                            fieldValueObj[fieldArray[i]] = valueArray[i];
                        }

                        let resultObj = this.getRealmInstance().create(schema, fieldValueObj, true);

                        return resultObj;

                    } else {
                        alert("0 or more than 1 recode is found");
                    }
                });
            }
            // return false;
        } catch (e) {
            console.log("Update exception " + e);
            return false;
        }
    }

    // Search data based on filed and search text
    searchData(schema, field, searchText) {
        let obj = this.getRealmInstance()
            .objects(schema)
            .filtered(field + " = " + `"${searchText}"`)

        return obj;

    }

    // Delete single recode based on primary field if, recode found
    deleteSingleRecode(schema, primaryField, primaryFieldValue) {
        try{
        this.getRealmInstance().write(() => {
            let obj = this.getSingleRecode(schema, primaryField, primaryFieldValue);

            if (obj.length === 1) {
                this.getRealmInstance().delete(obj);
                return true;
            }
        });
        }catch (e) {
            console.log("Exception: delete single recode >> "+e);
        }
    }

    // Return no of recode / objects are exist in schema
    getNoOfRecode(schemaName) {
        return this.getRealmInstance()
            .objects(schemaName).length;
    }

    // Select: get all object of schema
    getAllObject(schema) {
        return this.getRealmInstance().objects(schema);
    }

    // Get specific single recode based on given condition if found
    getSingleRecode(schema, primaryField, primaryFieldValue) {
        let obj = this.getRealmInstance()
            .objects(schema)
            .filtered(primaryField + " = " + primaryFieldValue);

        if (obj != null && obj.length === 1) {
            return obj;
        } else {
            return false;
        }
    }

    // check field & value array validation
    checkFieldValueArrayValidation(fieldArray, valueArray) {

        if (!fieldArray || fieldArray.length <= 0 || !valueArray || valueArray.length <= 0) {
            console.log("in if");
            Alert.alert("Error", "Filed or value array is missing");
            return false;
        } else if (fieldArray.length !== valueArray.length) {
            Alert.alert("Error", "No of field or value array item(s) are missing");
            console.log("in else");
            return false;
        }
        return true;
    }

    // check primary field validation
    isValidPrimaryField(primaryField, value) {
        if (!primaryField || primaryField.length <= 0 || !value || value.length <= 0) {
            Alert.alert("Error", "Primary field and its value are required");
            return false;
        } else {
            return true;
        }
    }

    // Delete specific realm object
    deleteObject(realmObject) {
        if(!realmObject) {
            this.getRealmInstance().write(() => {
                this.getRealmInstance().delete(realmObject);
            });
        }
    }

    // Delete all object of schema like delete table
    deleteSchema(schema) {
        this.getRealmInstance().write(() => {
            const allObject = this.getRealmInstance().objects(schema);
            this.getRealmInstance().delete(allObject);
        });
    }

    getPrimaryKeyId = (schema, primaryField) => {
        if (this.getRealmInstance().objects(schema).max(primaryField)) {
            return this.getRealmInstance().objects(schema).max(primaryField) + 1;
        }
        return 1;
    }
}

export default RealmHelper;
