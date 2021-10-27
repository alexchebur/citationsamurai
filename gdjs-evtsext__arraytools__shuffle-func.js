gdjs.evtsExt__ArrayTools__Shuffle = {};

gdjs.evtsExt__ArrayTools__Shuffle.conditionTrue_0 = {val:false};
gdjs.evtsExt__ArrayTools__Shuffle.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__ArrayTools__Shuffle.userFunc0x8d0d68 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getVariables().get(eventsFunctionContext.getArgument("arr"));
// Cast to array to ensure getAllChildrenArray returns the real array
arr.castTo("array");
const a = arr.getAllChildrenArray();
a.sort(() => Math.random() - 0.5);

};
gdjs.evtsExt__ArrayTools__Shuffle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ArrayTools__Shuffle.userFunc0x8d0d68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ArrayTools__Shuffle.func = function(runtimeScene, arr, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "arr") return arr;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ArrayTools__Shuffle.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

